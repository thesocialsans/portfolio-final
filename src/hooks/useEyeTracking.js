import { useEffect, useMemo } from 'react'

// Expressed relative to the pupil's own rendered size, so the travel range
// scales with the stage instead of overflowing the eye socket on smaller screens.
const MAX_OFFSET_RATIO = 0.06
const MAX_ROTATE_DEG = 2.5

function useEyeTracking(eyes) {
  const refsById = useMemo(() => {
    const map = {}
    eyes.forEach((eye) => {
      map[eye.id] = { current: null }
    })
    return map
  }, [eyes])

  const refCallbacks = useMemo(() => {
    const callbacks = {}
    eyes.forEach((eye) => {
      callbacks[eye.id] = (node) => {
        refsById[eye.id].current = node
      }
    })
    return callbacks
  }, [eyes, refsById])

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const handlePointerMove = (event) => {
      Object.values(refsById).forEach((ref) => {
        const el = ref.current
        if (!el) return

        const rect = el.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const maxOffset = rect.width * MAX_OFFSET_RATIO

        const dx = event.clientX - centerX
        const dy = event.clientY - centerY
        const angle = Math.atan2(dy, dx)
        const distance = Math.min(Math.hypot(dx, dy) / 12, maxOffset)

        const offsetX = Math.cos(angle) * distance
        const offsetY = Math.sin(angle) * distance
        const rotateDeg = (angle * (180 / Math.PI)) * (MAX_ROTATE_DEG / 180)

        el.style.transform = `translate(${offsetX}px, ${offsetY}px) rotate(${rotateDeg}deg)`
      })
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [refsById])

  return refCallbacks
}

export default useEyeTracking
