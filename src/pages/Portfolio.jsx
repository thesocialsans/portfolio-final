import { useEffect, useRef } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import PortfolioGrid from '../components/PortfolioGrid'
import skylineImage from '../assets/images/portfolio-skyline.png'
import '../styles/siteFrame.css'
import './Portfolio.css'

const PARALLAX_RANGE_PX = 18

function useBackdropParallax() {
  const imgRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return undefined

    const handlePointerMove = (event) => {
      const el = imgRef.current
      if (!el) return
      const xRatio = event.clientX / window.innerWidth - 0.5
      const yRatio = event.clientY / window.innerHeight - 0.5
      el.style.transform = `translate3d(${xRatio * -PARALLAX_RANGE_PX}px, ${yRatio * -PARALLAX_RANGE_PX}px, 0) scale(1.06)`
    }

    window.addEventListener('pointermove', handlePointerMove)
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return imgRef
}

function Portfolio() {
  const backdropRef = useBackdropParallax()

  return (
    <div className="portfolio-page">
      <div className="portfolio-page__backdrop" aria-hidden="true">
        <img ref={backdropRef} className="portfolio-page__backdrop-image" src={skylineImage} alt="" />
        <div className="portfolio-page__backdrop-overlay" />
      </div>

      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Portfolio" onDark />
      </div>

      <main className="portfolio-main">
        <h1 className="portfolio-heading">Selected Work</h1>
        <PortfolioGrid />
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter onDark />
      </div>
      <SiteMascot />
    </div>
  )
}

export default Portfolio
