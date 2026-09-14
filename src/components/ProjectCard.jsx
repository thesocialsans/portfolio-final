import ProjectCTA from './ProjectCTA'
import './ProjectCard.css'

function ProjectCard({ project }) {
  const { title, description, category, image, accent, route } = project

  return (
    <article className={`project-card${route ? '' : ' project-card--static'}`}>
      <img className="project-card__image" src={image} alt="" aria-hidden="true" />
      <div className="project-card__tint" aria-hidden="true" />

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>
      </div>

      <div className="project-card__footer">
        <p className="project-card__category">{category}</p>
        <ProjectCTA route={route} accent={accent} title={title} />
      </div>
    </article>
  )
}

export default ProjectCard
