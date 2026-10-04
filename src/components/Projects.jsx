import { memo } from 'react'
import projects from '../data/projects'

const ProjectCard = memo(function ProjectCard({ project, featured }) {
  return (
    <article className={`project-card ${featured ? 'project-card--featured' : ''}`}>
      <div className="project-meta">
        <span>{featured ? 'Featured build' : 'Backend project'}</span>
        <span>↗</span>
      </div>
      <div className="project-main">
        <div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <a href={project.link} target="_blank" rel="noreferrer" className="project-open" aria-label={`Open ${project.title} on GitHub`}>View source <span>↗</span></a>
      </div>
      <div className="project-tags">
        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
      </div>
    </article>
  )
})

const Projects = memo(function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-intro section-intro-row">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2>Things I&apos;ve actually built.</h2>
        </div>
        <a href="https://github.com/Manime016" target="_blank" rel="noreferrer" className="section-link">See all on GitHub ↗</a>
      </div>

      <div className="project-showcase">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} featured={index === 0} />
        ))}
      </div>
    </section>
  )
})

export default Projects
