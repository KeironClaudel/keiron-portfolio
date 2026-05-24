export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.aboutTitle}</span>
        <h2>{t.aboutDesc}</h2>
      </div>

      <article className="card about-card">
        <div className="about-accent-layout">
          <span className="about-rail" aria-hidden="true" />

          <div className="about-copy">
            <span className="about-kicker">{t.aboutProfileLabel}</span>
            <p className="about-summary">{t.aboutSummary}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
