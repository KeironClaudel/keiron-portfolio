export default function Websites({ websites, t }) {
  const renderDescriptionParagraph = (website, paragraph, index) => {
    if (!website.websiteHrefLabel || !paragraph.includes(website.websiteHrefLabel)) {
      return <p key={index}>{paragraph}</p>;
    }

    const [beforeLink, afterLink] = paragraph.split(website.websiteHrefLabel);

    return (
      <p key={index}>
        {beforeLink}
        <a
          href={website.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="website-inline-link"
          aria-label={`${website.websiteHrefLabel} - ${website.title}`}
        >
          {website.websiteHrefLabel}
        </a>
        {afterLink}
      </p>
    );
  };

  return (
    <section id="websites" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.websiteTitle}</span>
        <h2>{t.websiteDesc}</h2>
      </div>

      <div className="websites-grid">
        {websites.map((website) => (
          <article key={website.title} className="card website-card">
            <div className="website-card-preview">
              <img src={website.previewImage} alt={website.title} />
            </div>

            <div className="website-card-content">
              <div className="website-card-copy">
                <span className="panel-label">{t.websiteLabel}</span>
                <h3>{website.title}</h3>

                {Array.isArray(website.description) ? (
                  website.description.map((paragraph, index) =>
                    renderDescriptionParagraph(website, paragraph, index),
                  )
                ) : (
                  renderDescriptionParagraph(website, website.description, 0)
                )}
              </div>

              <div className="website-card-bottom">
                <div className="website-stack-rail">
                  <span className="website-stack-label">{t.skillsDesc}</span>
                  {website.technologies && (
                    <div className="website-tech-strip">
                      {website.technologies.frontend?.map((tech, index) => (
                        <div
                          key={`website-frontend-${index}`}
                          className="tech-chip"
                        >
                          <span className="tech-icon">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}

                      {website.technologies.deployment?.map((tech, index) => (
                        <div
                          key={`website-deploy-${index}`}
                          className="tech-chip"
                        >
                          <span className="tech-icon">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="website-card-footer">
                  <a
                    href={website.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="project-demo-button"
                    aria-label={`${website.liveLabel} - ${website.title}`}
                  >
                    {website.liveLabel}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
