import { Link } from 'react-router-dom'
import './ProjectCTA.css'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ProjectCTA({ route, accent, title }) {
  if (!route) {
    return (
      <span className="project-cta project-cta--badge" style={{ background: accent }}>
        Case soon
      </span>
    )
  }

  return (
    <Link
      to={route}
      className="project-cta project-cta--arrow"
      style={{ background: accent }}
      aria-label={`View ${title} case study`}
    >
      <ArrowIcon />
    </Link>
  )
}

export default ProjectCTA
