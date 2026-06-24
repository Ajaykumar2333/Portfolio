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
            Recognised as the Best Employee of 2024 at Allyted Solutions — for
            self-initiating and designing the internal HRMS system from scratch,
            without being asked. Identified the problem, proposed the solution,
            designed it end-to-end, and delivered a live product that the team
            uses daily.
          </p>

          <div className="award-highlights">
            <div className="award-hl">
              <span className="award-hl-icon">💡</span>
              <div>
                <h4>Self-initiated</h4>
                <p>Nobody asked for it — I saw the gap and built it.</p>
              </div>
            </div>
            <div className="award-hl">
              <span className="award-hl-icon">🎨</span>
              <div>
                <h4>Designed end-to-end</h4>
                <p>Research, wireframes, UI, and final design — all me.</p>
              </div>
            </div>
            <div className="award-hl">
              <span className="award-hl-icon">🚀</span>
              <div>
                <h4>Live & in use</h4>
                <p>The HRMS is actively used by the team today.</p>
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
