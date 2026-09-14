import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import './PortfolioGrid.css'

function PortfolioGrid() {
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default PortfolioGrid
