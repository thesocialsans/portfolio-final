import { useEffect, useState } from 'react'
import './ProjectSectionNav.css'

function ProjectSectionNav({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const elements = sections
      .map((section) => ({ id: section.id, el: document.getElementById(section.id) }))
      .filter((entry) => entry.el)

    if (elements.length === 0) return undefined

    const checkActive = () => {
      const markerY = window.innerHeight > 0 ? window.innerHeight * 0.4 : 300
      let current = elements[0].id
      for (const { id, el } of elements) {
        if (el.getBoundingClientRect().top <= markerY) {
          current = id
        } else {
          break
        }
      }
      setActiveId(current)
    }

    checkActive()
    window.addEventListener('scroll', checkActive, { passive: true })
    window.addEventListener('resize', checkActive)
    return () => {
      window.removeEventListener('scroll', checkActive)
      window.removeEventListener('resize', checkActive)
    }
  }, [sections])

  const handleClick = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' })
  }

  return (
    <nav className="project-section-nav" aria-label="Case study sections">
      <ul>
        {sections.map((section) => (
          <li key={section.id}>
            <button
              type="button"
              className={`project-section-nav__dot${activeId === section.id ? ' is-active' : ''}`}
              onClick={() => handleClick(section.id)}
              aria-label={section.label}
              aria-current={activeId === section.id ? 'true' : undefined}
            >
              <span className="project-section-nav__tooltip">{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default ProjectSectionNav
