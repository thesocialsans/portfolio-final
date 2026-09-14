import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SiteMascot from '../components/SiteMascot'
import portfolioText from '../assets/images/home-portfolio-text.png'
import sangFigure from '../assets/images/home-sang.png'
import diamondImage from '../assets/images/home-diamond.png'
import '../styles/siteFrame.css'
import './Home.css'
import useEyeTracking from '../hooks/useEyeTracking'

const EYES = [
  { id: 'left', leftPct: 50, topPct: 43.52 },
  { id: 'right', leftPct: 52.24, topPct: 45.19 },
]

function Home() {
  const eyeRefs = useEyeTracking(EYES)

  return (
    <div className="home-scroll">
      <div className="site-fixed-header site-fixed-header--transparent">
        <SiteHeader activeNav="Home" />
      </div>

      <main className="home-stage">
        <img className="home-stage__layer home-stage__portfolio-text" src={portfolioText} alt="" />
        <img className="home-stage__layer home-stage__figure" src={sangFigure} alt="Sangavi Ramesh illustration" />

        {EYES.map((eye) => (
          <span
            key={eye.id}
            ref={eyeRefs[eye.id]}
            className="home-eye-pupil"
            style={{ left: `${eye.leftPct}%`, top: `${eye.topPct}%` }}
            aria-hidden="true"
          />
        ))}

        <p className="home-tagline">I turn complexity into clarity.</p>

        <Link to="/portfolio" className="home-diamond" aria-label="View portfolio">
          <img className="home-diamond__image" src={diamondImage} alt="" />
        </Link>

        <p className="home-work-label">Work 22'-26'</p>
      </main>

      <div className="site-fixed-footer site-fixed-footer--transparent">
        <SiteFooter />
      </div>
      <SiteMascot />
    </div>
  )
}

export default Home
