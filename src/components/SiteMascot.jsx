import { useEffect, useRef, useState } from 'react'
import mascotIcon from '../assets/images/mascot-icon.png'
import './SiteMascot.css'

const SIZE = 48
const FLEE_RADIUS = 140
const EDGE_MARGIN = 16
const MIN_FLEE_INTERVAL = 220

function SiteMascot() {
  const [bouncing, setBouncing] = useState(false)
  const [pos, setPos] = useState(null)
  const elRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const lastFleeRef = useRef(0)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches

    const bounds = () => {
      const header = document.querySelector('.site-fixed-header')
      const footer = document.querySelector('.site-fixed-footer')
      const top = (header?.getBoundingClientRect().height || 80) + EDGE_MARGIN
      const bottom = window.innerHeight - (footer?.getBoundingClientRect().height || 80) - EDGE_MARGIN
      const left = EDGE_MARGIN
      const right = window.innerWidth - SIZE - EDGE_MARGIN
      return { top, bottom, left, right }
    }

    const setInitial = () => {
      const name = document.querySelector('.site-header__name')
      let initial
      if (name) {
        const nameRect = name.getBoundingClientRect()
        initial = {
          x: nameRect.right + 4,
          y: nameRect.top + nameRect.height / 2 - SIZE / 2,
        }
      } else {
        const header = document.querySelector('.site-fixed-header')
        const headerHeight = header?.getBoundingClientRect().height || 80
        initial = { x: window.innerWidth / 2 - SIZE / 2, y: headerHeight / 2 - SIZE / 2 }
      }
      posRef.current = initial
      setPos(initial)
    }
    setInitial()
    window.addEventListener('resize', setInitial)

    if (prefersReducedMotion || !hasFinePointer) {
      return () => window.removeEventListener('resize', setInitial)
    }

    const handleMouseMove = (event) => {
      const now = performance.now()
      const { x, y } = posRef.current
      const cx = x + SIZE / 2
      const cy = y + SIZE / 2
      const dx = cx - event.clientX
      const dy = cy - event.clientY
      const dist = Math.hypot(dx, dy)
      if (dist > FLEE_RADIUS || now - lastFleeRef.current < MIN_FLEE_INTERVAL) return

      const b = bounds()
      const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.8
      const jump = 160 + Math.random() * 140
      let nx = cx + Math.cos(angle) * jump - SIZE / 2
      let ny = cy + Math.sin(angle) * jump - SIZE / 2
      nx = Math.min(Math.max(nx, b.left), b.right)
      ny = Math.min(Math.max(ny, b.top), b.bottom)

      lastFleeRef.current = now
      posRef.current = { x: nx, y: ny }
      setPos({ x: nx, y: ny })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('resize', setInitial)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleClick = () => {
    if (bouncing) return
    setBouncing(true)
    window.setTimeout(() => setBouncing(false), 700)
  }

  if (!pos) return null

  return (
    <button
      ref={elRef}
      type="button"
      className={`site-mascot${bouncing ? ' site-mascot--bounce' : ''}`}
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      onClick={handleClick}
      aria-label="Catch me if you can"
    >
      <img className="site-mascot__icon" src={mascotIcon} alt="" />
    </button>
  )
}

export default SiteMascot
