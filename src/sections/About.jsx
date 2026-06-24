import "./About.css";

const About = () => {
  const tools = [
    { name: "Figma", icon: "🎨" },
    { name: "Photoshop", icon: "🖼️" },
    { name: "After Effects", icon: "🎬" },
    { name: "React JS", icon: "⚛️" },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">

        <div className="about-left">
          <div className="about-img-wrapper">
            <div className="about-img-placeholder"><img src="./assets/Ajaypic.jpg" alt="" /></div>
            <div className="about-badge">
              <span className="badge-num">3+</span>
              <span className="badge-label">years</span>
            </div>
          </div>
        </div>

        <div className="about-right">
          <p className="about-tag">About Me</p>
          <h2 className="about-title">
            Designing <span className="accent">Interfaces.</span>
            <br />
            Writing the <span className="accent">Code.</span>
          </h2>
          <p className="about-desc">
            I'm a UI/UX Designer & Frontend Developer with 3+ years of experience.
            My work spans the full design process — competitor research, style guides,
            wireframes, prototypes, and translating designs into clean frontend code.
          </p>
          <p className="about-desc">
            I bring strong visual UI knowledge alongside hands-on HTML, CSS, JS
            and React experience — so my designs don't just look great in Figma,
            they translate cleanly into real products.
          </p>
          <div className="about-tools">
            {tools.map((t) => (
              <span key={t.name} className="tool-badge">
                {t.icon} {t.name}
              </span>
            ))}
          </div>
        </div>

      </div>

      <div className="about-stats">
        <div className="stat-item">
          <span className="stat-value">3+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">40+</span>
          <span className="stat-label">Projects Done</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">20+</span>
          <span className="stat-label">Happy Clients</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">10+</span>
          <span className="stat-label">Tools Mastered</span>
        </div>
      </div>
    </section>
  );
};

export default About;