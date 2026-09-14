import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import '../styles/siteFrame.css'
import './ProjectPlaceholder.css'

function ProjectPlaceholder({ title, category }) {
  return (
    <div className="project-placeholder">
      <div className="site-fixed-header">
        <SiteHeader activeNav="Portfolio" />
      </div>

      <main className="project-placeholder__main">
        <p className="project-placeholder__eyebrow">Case study</p>
        <h1 className="project-placeholder__title">{title}</h1>
        <p className="project-placeholder__category">{category}</p>
        <p className="project-placeholder__note">
          This case study is being written up. Check back soon, or head back to see the rest of the work.
        </p>
        <Link to="/portfolio" className="project-placeholder__back">
          &larr; Back to Portfolio
        </Link>
      </main>

      <div className="site-fixed-footer">
        <SiteFooter />
      </div>
    </div>
  )
}

export default ProjectPlaceholder
