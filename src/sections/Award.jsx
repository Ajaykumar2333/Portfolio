import "./Award.css";

const Award = () => {
  return (
    <section className="award" id="award">
      <div className="award-container">

        <div className="award-content">
          <p className="award-tag">Recognition</p>
          <h2 className="award-title">
            Best Employee <span className="accent">Award</span>
          </h2>
          <p className="award-year">Allyted Solutions · 2024</p>
          <p className="award-desc">
            Recognised as the Best Employee of 2024 at Allyted Solutions —
            awarded for consistently high-quality work and strong overall
            performance across every project taken on through the year.
          </p>

          <div className="award-highlights">
            <div className="award-hl">
              <span className="award-hl-icon">⭐</span>
              <div>
                <h4>Consistent quality</h4>
                <p>High standards maintained across every project, every time.</p>
              </div>
            </div>
            <div className="award-hl">
              <span className="award-hl-icon">📈</span>
              <div>
                <h4>Strong performance</h4>
                <p>Reliable output and steady growth throughout the year.</p>
              </div>
            </div>
            <div className="award-hl">
              <span className="award-hl-icon">🤝</span>
              <div>
                <h4>Trusted by the team</h4>
                <p>Dependable work that the team could count on.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="award-image-side">
          <div className="award-img-wrap">
            <div>
              
            <img src="./assets/Bestemployee.png" alt="" />
            </div>
            <div className="award-badge">
            </div>
            <div className="award-badge-float">
              <span className="award-badge-icon">🏆</span>
              <div>
                <p className="award-badge-title">Best Employee</p>
                <p className="award-badge-year">2024</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Award;