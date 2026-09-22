import "./Award.css";

const Award = () => {
  return (
    <section className="award" id="award">
      <div className="section-wrap award-inner">
        <div className="award-photo-wrap">
          <div className="award-glow" />
          <img
            src="/assets/Bestemployee.png"
            alt="Ajay receiving the Best Employee award at Allyted Solutions"
            className="award-photo"
          />
          <span className="award-badge">🏆 WINNER</span>
        </div>

        <div className="award-content">
          <span className="award-tag">RECOGNITION</span>
          <h3 className="award-title">Best Employee<br />Allyted Solutions, 2024</h3>
          <p className="award-desc">
            Recognised company-wide out of the entire team for consistently high-quality
            design and frontend work, reliable delivery, and a strong ownership mindset
            across every project I touched.
          </p>
          <div className="award-divider" />
          <p className="award-meta">Awarded live, in front of the whole company.</p>
        </div>
      </div>
    </section>
  );
};

export default Award;