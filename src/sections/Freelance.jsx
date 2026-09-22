import { Link } from "react-router-dom";
import "./Freelance.css";

const freelanceProjects = [
  {
    id: "01",
    title: "Big Leap Technologies",
    category: "EdTech Website + LMS",
    role: "UI/UX Designer + Frontend",
    desc: "Website redesign and placement-focused LMS for an IT training institute, built solo on the frontend while a teammate handled the backend.",
    outcome: "Live site and LMS, frontend built solo alongside one backend teammate.",
    tags: ["Website", "LMS", "Frontend Dev"],
    path: "/bigleap",
    color: "#F16232",
    image: "/assets/BL-Ourprogram.jpg",
    url: "bigleaptech.in",
  },
];

const Freelance = () => {
  return (
    <section className="freelance" id="freelance">
      <div className="freelance-container">

        <div className="freelance-header">
          <p className="freelance-tag">Freelance — Outside of Work</p>
          <h2 className="freelance-title-main">
            Projects I took on <span className="accent">on the side.</span>
          </h2>
          <p className="freelance-subline">
            Independent freelance work, separate from my full-time role — clients I worked
            with directly, end to end.
          </p>
        </div>

        <div className="freelance-grid">
          {freelanceProjects.map((project) => (
            <Link
              to={project.path}
              key={project.id}
              className="freelance-card"
              style={{ "--freelance-accent": project.color }}
            >
              <div className="freelance-card-frame">
                <div className="freelance-card-browserbar">
                  <span className="freelance-dot freelance-dot-red" />
                  <span className="freelance-dot freelance-dot-yellow" />
                  <span className="freelance-dot freelance-dot-green" />
                  <span className="freelance-card-url">{project.url}</span>
                </div>
                <div className="freelance-card-shot-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="freelance-card-shot"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="freelance-card-body">
                <div className="freelance-card-head">
                  <span className="freelance-card-num">{project.id}</span>
                  <p className="freelance-card-cat">{project.category}</p>
                  <span className="freelance-badge">Freelance</span>
                </div>
                <h3 className="freelance-card-name">{project.title}</h3>
                <p className="freelance-card-desc">{project.desc}</p>
                <p className="freelance-card-outcome">{project.outcome}</p>
                <div className="freelance-card-foot">
                  <div className="freelance-card-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="freelance-tag-chip">{t}</span>
                    ))}
                  </div>
                  <span className="freelance-card-cta">
                    View Case Study <span className="freelance-card-arrow">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Freelance;