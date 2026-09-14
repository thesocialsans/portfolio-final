import { useEffect } from 'react'

function useScrollReveal(containerRef, selector = '.pr-reveal') {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const root = containerRef.current
    if (!root) return undefined

    const targets = Array.from(root.querySelectorAll(selector))

    if (prefersReducedMotion) {
      targets.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    let pending = targets
    const revealThreshold = window.innerHeight > 0 ? window.innerHeight * 0.92 : 800

    const checkTargets = () => {
      if (pending.length === 0) return
      const stillPending = []
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < revealThreshold) {
          el.classList.add('is-visible')
        } else {
          stillPending.push(el)
        }
      })
      pending = stillPending
      if (pending.length === 0) {
        window.removeEventListener('scroll', checkTargets)
        window.removeEventListener('resize', checkTargets)
      }
    }

    checkTargets()
    window.addEventListener('scroll', checkTargets, { passive: true })
    window.addEventListener('resize', checkTargets)

    return () => {
      window.removeEventListener('scroll', checkTargets)
      window.removeEventListener('resize', checkTargets)
    }
  }, [containerRef, selector])
}

export default useScrollReveal
