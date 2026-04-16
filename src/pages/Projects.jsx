/**
 * Renders the projects section of the portfolio.
 * Each project is displayed as a horizontal card with
 * description on the left and actions on the right.
 */
export default function Projects({ projects, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.projectTitle}</span>
        <h2>{t.projectDesc}</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasDemo =
            project.demoCredentials &&
            project.liveUrl &&
            project.liveUrl !== "#";

          return (
            <article key={project.title} className="card project-card">
              {/* Left side: title + description */}
              <div className="project-card-content">
                <span className="panel-label">{t.projectLabel}</span>
                <h3>{project.title}</h3>

                {Array.isArray(project.description) ? (
                  project.description.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              {/* Right side: repo links + demo access */}
              <div className="project-card-actions">
                <div className="project-links">
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projectBackend} - ${project.title}`}
                    >
                      {t.projectBackend}
                    </a>
                  )}

                  {project.frontendUrl && (
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projectFrontend} - ${project.title}`}
                    >
                      {t.projectFrontend}
                    </a>
                  )}
                </div>

                {hasDemo && (
                  <div className="project-demo-box">
                    <div className="project-demo-credentials">
                      <span className="demo-label">{t.demoUser}</span>
                      <span className="demo-value">
                        {project.demoCredentials.user}
                      </span>
                    </div>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="project-demo-button"
                      aria-label={`${t.projectDemo} - ${project.title}`}
                    >
                      {t.projectDemo}
                    </a>
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
