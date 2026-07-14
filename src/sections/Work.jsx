import { Link } from "react-router-dom";
import "./Work.css";

const projects = [
  {
    id: "01",
    title: "Jaldihire",
    category: "SaaS Hiring Platform",
    desc: "End-to-end design of a hiring platform — from job post creation to candidate tracking. Complex workflows made simple.",
    tags: ["Web App", "Dashboard", "Hiring"],
    path: "/jaldihire",
    color: "#f05a28",
  },
  {
    id: "02",
    title: "Trainex Academy",
    category: "EdTech Platform",
    desc: "Full UI/UX + frontend dev for a training platform. Student portal, LMS, admin panel — built and shipped.",
    tags: ["LMS", "Website", "Admin Panel"],
    path: "/trainex",
    color: "#3b82f6",
  },
  {
    id: "03",
    title: "Allyted HRMS",
    category: "Internal Tool Design",
    desc: "Self-initiated internal HR system design at Allyted. Identified the need, proposed it, designed it, and won Best Employee for it.",
    tags: ["HRMS", "Internal Tool", "Web App"],
    path: "/hrms",
    color: "#10b981",
  },
  {
    id: "04",
    title: "VOYD Interiors",
    category: "E-Commerce Design",
    desc: "Luxury interior brand's e-commerce website. Clean, editorial UI that matches the premium positioning of the brand.",
    tags: ["E-Commerce", "Luxury UI", "Website"],
    path: "/voyd",
    color: "#8b5cf6",
  },
  {
    id: "05",
    title: "Big Leap Technologies",
    category: "EdTech Website + LMS",
    desc: "Website redesign and placement-focused LMS for an IT training institute in Hyderabad.",
    tags: ["LMS", "Website", "Frontend Dev"],
    path: "/bigleap",
    color: "#f59e0b",
  },
];

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="work-container">

        <div className="work-header">
          <p className="work-tag">Portfolio</p>
          <h2 className="work-title-main">
            Selected <span className="accent">Work</span>
          </h2>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <Link to={project.path} key={project.id} className="work-card">
              <div className="work-card-head">
                <span className="work-card-num">{project.id}</span>
                <span className="work-card-arrow">→</span>
              </div>
              <p className="work-card-cat">{project.category}</p>
              <h3 className="work-card-name">{project.title}</h3>
              <p className="work-card-desc">{project.desc}</p>
              <div className="work-card-tags">
                {project.tags.map((t) => (
                  <span key={t} className="work-tag-chip">{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Work;