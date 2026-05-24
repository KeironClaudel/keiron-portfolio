/**
 * Renders the projects section of the portfolio.
 * Each project is displayed as a rectangular card with
 * description, technologies, repository links and demo access.
 */
import { FaGithub } from "react-icons/fa";

export default function Projects({ projects, t }) {
  return (
    <section id="projects" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.projectTitle}</span>
        <h2>{t.projectDesc}</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => {
          const hasDemoCredentials =
            project.demoCredentials || project.showDemoPlaceholder;
          const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
          const hasAccess = hasDemoCredentials || hasLiveUrl;
          const liveLabel = project.liveLabel || t.projectDemo;
          const techLine = [
            ...(project.technologies?.backend ?? []),
            ...(project.technologies?.frontend ?? []),
            ...(project.technologies?.deployment ?? []),
          ];

          return (
            <article key={project.title} className="card project-card">
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

                {techLine.length > 0 && (
                  <div className="project-tech-inline" aria-label="Technologies used">
                    {techLine.map((tech, index) => (
                      <div key={`${project.title}-tech-${index}`} className="tech-chip">
                        <span className="tech-icon">{tech.icon}</span>
                        <span>{tech.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="project-card-actions">
                {hasAccess && (
                  <div className="project-demo-box">
                    {hasDemoCredentials && (
                      <div className="project-demo-credentials">
                        <span className="demo-label">{t.demoUser}</span>
                        <span className="demo-value">
                          {project.demoCredentials?.user ??
                            "[Pending demo user]"}
                        </span>
                      </div>
                    )}

                    {hasLiveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-demo-button"
                        aria-label={`${liveLabel} - ${project.title}`}
                      >
                        {liveLabel}
                      </a>
                    ) : (
                      <span
                        className="project-demo-button project-demo-button-disabled"
                        aria-label={`${t.projectDemoPending} - ${project.title}`}
                      >
                        {t.projectDemoPending}
                      </span>
                    )}
                  </div>
                )}

                <div className="project-links">
                  {project.backendUrl && (
                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${t.projectBackend} - ${project.title}`}
                    >
                      <span className="repo-link-icon" aria-hidden="true">
                        <FaGithub />
                      </span>
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
                      <span className="repo-link-icon" aria-hidden="true">
                        <FaGithub />
                      </span>
                      {t.projectFrontend}
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
