export default function About({ t }) {
  return (
    <section id="about" className="section">
      <div className="section-heading">
        <span className="section-tag">{t.aboutTitle}</span>
        <h2>{t.aboutDesc}</h2>
      </div>

      <article className="card">
        <p>{t.aboutBodyOne}</p>
        <p>{t.aboutBodySecond}</p>
        <p>{t.aboutBodyThird}</p>
      </article>
    </section>
  );
}
