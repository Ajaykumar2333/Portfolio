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
        <h1 className="hero-title">
          Designing Intuitive <span className="accent">Experiences</span>
          <br />
          Building Them into <span className="accent">Reality</span>
        </h1>
        <button className="hero-btn" onClick={() => handleScroll("work")}>
          Explore My Work
        </button>
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