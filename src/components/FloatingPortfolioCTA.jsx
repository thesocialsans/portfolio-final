import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import diamondImage from '../assets/images/home-diamond.png'
import './FloatingPortfolioCTA.css'

function FloatingPortfolioCTA() {
  const [bottomOffset, setBottomOffset] = useState(150)

  useEffect(() => {
    const footer = document.querySelector('.site-fixed-footer')
    if (!footer) return undefined

    const measure = () => {
      setBottomOffset(footer.getBoundingClientRect().height + 64)
    }
    measure()

    const observer = new ResizeObserver(measure)
    observer.observe(footer)
    window.addEventListener('resize', measure)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [])

  return (
    <Link
      to="/portfolio"
      className="floating-portfolio-cta"
      style={{ bottom: `${bottomOffset}px` }}
      aria-label="Back to Portfolio"
    >
      <img className="floating-portfolio-cta__tile" src={diamondImage} alt="" />
      <span className="floating-portfolio-cta__tooltip">Portfolio</span>
    </Link>
  )
}

export default FloatingPortfolioCTA
