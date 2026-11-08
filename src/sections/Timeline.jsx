import "./Timeline.css";

const experience = [
  {
    period: "Feb 2023 — Present",
    title: "UI/UX Designer",
    org: "Allyted Solutions",
    desc: "Websites, web apps and mobile apps, from research to developer hand-off. Internal HRMS, VOYD Interiors, JaldiHire, Trainex Academy and more.",
  },
];

const education = [
  {
    period: "2024 — 2026",
    title: "MBA, Marketing",
    org: "Jaya Prakash Narayan College of Engineering",
    desc: "Completed while working full-time.",
  },
  {
    period: "2019 — 2022",
    title: "B.Tech, Electrical Engineering",
    org: "Annamacharya Institute of Technology and Sciences",
    desc: "Foundation before moving into UI/UX design.",
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