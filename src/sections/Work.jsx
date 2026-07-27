import { Link } from "react-router-dom";
import "./Work.css";

const projects = [
  {
    id: "01",
    title: "VOYD Interiors",
    category: "E-Commerce + Field App",
    desc: "Connected two disconnected experiences — furniture shopping and renovation tracking — into one trusted platform, including a mobile field-inspection tool.",
    tags: ["E-Commerce", "Trust & Verification", "Mobile Web"],
    path: "/voyd",
    color: "#F16232",
    image: "/voydimages/banner-img.png",
    url: "voydinteriors.com",
    size: "large",
  },
  {
    id: "02",
    title: "Jaldihire",
    category: "SaaS Hiring Platform",
    desc: "Redesigned the marketing site and employer dashboard around one problem: hiring workflows had too many steps. Shipped a unified design system across both.",
    tags: ["Web App", "Dashboard", "Hiring"],
    path: "/jaldihire",
    color: "#F16232",
    image: "/assets/Halfhomepage.png",
    url: "jaldihire.com",
    size: "large",
  },
  {
    id: "03",
    title: "Trainex Academy",
    category: "EdTech Platform",
    desc: "Designed and built the student portal, LMS, and admin panel end-to-end — from Figma to shipped React code.",
    tags: ["LMS", "Website", "Admin Panel"],
    path: "/trainex",
    color: "#F16232",
    image: "/assets/course.jpg",
    url: "trainexacademy.com",
    size: "small",
  },
  {
    id: "04",
    title: "Big Leap Technologies",
    category: "EdTech Website + LMS",
    desc: "Website redesign and placement-focused LMS for an IT training institute, built solo on the frontend while a teammate handled the backend.",
    tags: ["LMS", "Website", "Frontend Dev"],
    path: "/bigleap",
    color: "#F16232",
    image: "/assets/BL-Ourprogram.jpg",
    url: "bigleaptech.in",
    size: "small",
  },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work-container">

        <div className="work-header">
          <p className="work-tag">Portfolio — 04 Selected Projects</p>
          <h2 className="work-title-main">
            Work that shipped, <span className="accent">not just shots.</span>
          </h2>
          <p className="work-subline">
            Every project below went from Figma to a live, working product —
            design system, screens, and the frontend behind them.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <Link
              to={project.path}
              key={project.id}
              className={`work-card work-card--${project.size}`}
              style={{ "--work-accent": project.color }}
            >
              <div className="work-card-frame">
                <div className="work-card-browserbar">
                  <span className="work-dot work-dot-red" />
                  <span className="work-dot work-dot-yellow" />
                  <span className="work-dot work-dot-green" />
                  <span className="work-card-url">{project.url}</span>
                </div>
                <div className="work-card-shot-wrap">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="work-card-shot"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="work-card-body">
                <div className="work-card-head">
                  <span className="work-card-num">{project.id}</span>
                  <p className="work-card-cat">{project.category}</p>
                </div>
                <h3 className="work-card-name">{project.title}</h3>
                <p className="work-card-desc">{project.desc}</p>
                <div className="work-card-foot">
                  <div className="work-card-tags">
                    {project.tags.map((t) => (
                      <span key={t} className="work-tag-chip">{t}</span>
                    ))}
                  </div>
                  <span className="work-card-cta">
                    View Case Study <span className="work-card-arrow">→</span>
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

export default Work;
