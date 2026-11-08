import "./About.css";

const stats = [
  { num: "3+", label: "Years" },
];

// Smooth-scroll to a section of the home page
const goTo = (id) => (e) => {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-wrap about-grid">
        <div className="about-left">
          <p className="section-eyebrow">About</p>
          <h2 className="section-heading about-title">
            Hi, I'm <span className="accent">Ajaykumar</span>
          </h2>
          <p className="about-desc">
            A UI/UX designer who cares about the detail that gets skipped — the
            form asking too much, the flow that makes someone stop and think. I
            research it, design it right, and hand it over so nothing gets lost
            on the way to production.
          </p>

          <div className="about-actions">
            <a href="#work" className="about-btn about-btn--primary" onClick={goTo("work")}>
              Design works <span aria-hidden="true">↗</span>
            </a>
            <a href="#motion" className="about-btn about-btn--ghost" onClick={goTo("motion")}>
              Motion works <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="about-stats">
            {stats.map((s) => (
              <div className="about-stat" key={s.label}>
                <span className="about-stat-num">{s.num}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="about-socials">
            <a href="mailto:vodlaajay113@gmail.com" aria-label="Email">✉</a>
            <a href="tel:+919346175460" aria-label="Phone">☎</a>
          </div>
        </div>

        <div className="about-right">
          <img
            src="/assets/Ajaypic.png"
            alt="Ajaykumar Vodla"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;