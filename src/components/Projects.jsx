import { memo } from 'react'
import projects from '../data/projects'

const ProjectItem = memo(function ProjectItem({ title, tags, description, link, liveUrl, index }) {
  return (
    <article className="project-item">
      <div className="project-number">0{index + 1}</div>
      <div className="project-content">
        <div className="project-title-row">
          <div>
            <p className="project-type">PROJECT</p>
            <h3>{title}</h3>
          </div>
          <a href={link} target="_blank" rel="noreferrer" className="project-arrow" aria-label={`Open ${title} source`}>
            ↗
          </a>
        </div>

        <p>{description}</p>

        <div className="project-tags">
          {tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>

        <div className="project-links">
          <a href={link} target="_blank" rel="noreferrer" className="text-link">
            GitHub Repository <span>↗</span>
          </a>
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className="text-link text-link--live">
              Live Demo <span>↗</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
})

const Projects = memo(function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading section-heading--row">
        <div>
          <p className="section-label">03 / Projects</p>
          <h2>Selected work from my GitHub.</h2>
        </div>
        <a className="btn btn-secondary btn-sm" href="https://github.com/Manime016" target="_blank" rel="noreferrer">
          GitHub Profile ↗
        </a>
      </div>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectItem key={project.title} {...project} index={index} />
        ))}
      </div>
    </section>
  )
})

export default Projects
