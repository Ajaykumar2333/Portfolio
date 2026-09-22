import "./About.css";

const stats = [
  { num: "3+", label: "Years" },
];

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
            A designer who also ships the frontend. I care about the detail
            that gets skipped — the form asking too much, the flow that makes
            someone stop and think. I design it right, then build it myself
            so nothing gets lost on the way to production.
          </p>

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
            src="./assets/Ajaypic.png"
            alt="Ajaykumar Vodla"
            className="about-img"
          />
        </div>
      </div>
    </section>
  );
};

export default About;