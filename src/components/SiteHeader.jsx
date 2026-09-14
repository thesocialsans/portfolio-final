import { Link } from 'react-router-dom'
import './SiteHeader.css'

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Portfolio', to: '/portfolio' },
]

function SiteHeader({ activeNav = 'Home', onDark = false }) {
  return (
    <header className={`site-header${onDark ? ' site-header--on-dark' : ''}`}>
      <div className="site-header__brand">
        <p className="site-header__name">
          <span className="site-header__name-first">Sangavi</span>{' '}
          <span className="site-header__name-last">Ramesh</span>
        </p>
        <p className="site-header__role">INTERACTION DESIGNER</p>
      </div>

      <div className="site-header__nav">
        <ul className="site-header__nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.label} className="site-header__nav-item">
              <Link to={item.to}>{item.label}</Link>
              {item.label === activeNav && <span className="site-header__nav-dot" aria-hidden="true" />}
            </li>
          ))}
        </ul>
        <a
          href="/Sangavi-Ramesh-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="site-header__resume"
        >
          Resume
        </a>
      </div>
    </header>
  )
}

export default SiteHeader
