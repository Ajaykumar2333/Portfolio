import "./Timeline.css";

const experience = [
  {
    period: "2022 — Present",
    title: "UI/UX Designer & Frontend Developer",
    org: "Allyted Solutions",
    desc: "Design and frontend across an internal HRMS, the VOYD Interiors platform, and client projects.",
  },
];

const education = [
  {
    period: "2026",
    title: "MBA, Marketing",
    org: "",
    desc: "Completed while working full-time.",
  },
  {
    period: "2022",
    title: "B.Tech, Electrical Engineering",
    org: "",
    desc: "Foundation before moving into design and frontend development.",
  },
];

const Timeline = () => {
  return (
    <section className="timeline" id="timeline">
      <div className="section-wrap timeline-grid">
        <div className="timeline-col">
          <p className="section-eyebrow">Experience</p>
          <div className="timeline-track">
            {experience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  {item.org && <p className="timeline-org">{item.org}</p>}
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="timeline-col">
          <p className="section-eyebrow">Education</p>
          <div className="timeline-track">
            {education.map((item, i) => (
              <div className="timeline-item" key={i}>
                <span className="timeline-dot" />
                <div className="timeline-card">
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  {item.org && <p className="timeline-org">{item.org}</p>}
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;