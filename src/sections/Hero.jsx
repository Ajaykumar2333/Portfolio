import "./Hero.css";

const Hero = () => {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />

      <div className="hero-content">
        <p className="hero-badge">Open to UI/UX Designer Opportunities</p>

        <h1 className="hero-title">
          <span className="hero-line hero-line-1">Designing Digital Products</span>
          <span className="hero-line hero-line-2">That Users Love</span>
          <span className="hero-line hero-line-3">And Businesses Value</span>
        </h1>

        <p className="hero-skills">
          UI Design <span className="dot">•</span> Wireframing{" "}
          <span className="dot">•</span> Prototyping{" "}
          <span className="dot">•</span> Design Systems{" "}
          <span className="dot">•</span> Frontend Collaboration
        </p>

        <div className="hero-cta-row">
          <button
            className="hero-btn hero-btn-primary"
            onClick={() => handleScroll("work")}
          >
            View Case Studies
          </button>

          <a
            className="hero-btn hero-btn-secondary"
            href="/assets/Ajay-Resume.pdf"
            download
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[
            "PHOTOSHOP","AFTER EFFECTS","UI/UX DESIGN","MOTION DESIGN","FIGMA","WIREFRAMING",
            "PHOTOSHOP","AFTER EFFECTS","UI/UX DESIGN","MOTION DESIGN","FIGMA","WIREFRAMING",
          ].map((skill, i) => (
            <span key={i} className="ticker-item">
              {skill} <span className="ticker-star">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;