import "./Motion.css";

const motionWorks = [
  {
    id: 1,
    title: "Brand Reveal Animation",
    tool: "After Effects",
    duration: "0:30",
  },
  {
    id: 2,
    title: "UI Micro-interactions",
    tool: "After Effects + Figma",
    duration: "0:45",
  },
  {
    id: 3,
    title: "Product Promo Video",
    tool: "Premiere Pro",
    duration: "1:20",
  },
];

const Motion = () => {
  return (
    <section className="motion-section" id="motion">
      <div className="motion-container">
        <div className="motion-header">
          <p className="section-tag">Motion Design</p>
          <h2 className="section-title">
            Bringing Designs to <span className="accent">Life</span>
          </h2>
          <p className="section-sub">
            Animation and motion work created with After Effects & Premiere Pro.
          </p>
        </div>

        <div className="motion-grid">
          {motionWorks.map((item) => (
            <div key={item.id} className="motion-card">
              <div className="motion-thumb">
                <div className="motion-placeholder">
                  <span className="play-icon">▶</span>
                </div>
                <span className="motion-duration">{item.duration}</span>
              </div>
              <div className="motion-info">
                <h3 className="motion-title">{item.title}</h3>
                <p className="motion-tool">{item.tool}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Motion;