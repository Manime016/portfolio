import { memo } from 'react'
import projects from '../data/projects'

const ProjectItem = memo(function ProjectItem({ title, tags, description, link }) {
  return (
    <article className="project-item">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-meta">
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <a
          href={link ?? '#contact'}
          target={link ? '_blank' : undefined}
          rel={link ? 'noreferrer' : undefined}
          className="btn btn-secondary btn-sm"
        >
          View Project
        </a>
      </div>
    </article>
  )
})

const Projects = memo(function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="section-label">Projects</p>
        <h2>Selected work and web applications.</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
})

export default Projects

