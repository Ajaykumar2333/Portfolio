import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./WorkPage.css";

const WorkPage = () => {
  const [filter, setFilter] = useState("all");

  const filtered = projects.filter((p) => filter === "all" || p.kind === filter);

  return (
    <main className="workpage">
      <div className="section-wrap">
        <div className="workpage-header">
          <p className="section-eyebrow">Portfolio</p>
          <h1 className="workpage-title">My Work</h1>
          <p className="workpage-sub">Every project shipped, from Figma to production.</p>

          <div className="workpage-toggle">
            <button
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={filter === "live" ? "active" : ""}
              onClick={() => setFilter("live")}
            >
              Live Projects
            </button>
            <button
              className={filter === "case-study" ? "active" : ""}
              onClick={() => setFilter("case-study")}
            >
              Case Studies
            </button>
          </div>
        </div>

        <div className="workpage-grid">
          {filtered.map((project, i) => (
            <Link
              to={project.path}
              key={project.id}
              className="workpage-card"
              style={{ "--reveal-delay": `${i * 0.08}s` }}
            >
              <div className="workpage-card-frame">
                <div className="workpage-card-browserbar">
                  <span className="workpage-dot" />
                  <span className="workpage-dot" />
                  <span className="workpage-dot" />
                  <span className="workpage-card-url">{project.url}</span>
                </div>
                <div className="workpage-card-shot-wrap">
                  <img src={project.image} alt={project.title} className="workpage-card-shot" loading="lazy" />
                </div>
              </div>

              <div className="workpage-card-body">
                <div className="workpage-card-head">
                  <h3>{project.title}</h3>
                  <span className="workpage-badge">{project.kind === "live" ? "Live" : "Case Study"}</span>
                </div>
                <p className="workpage-card-cat">{project.category}</p>
                <p className="workpage-card-desc">{project.desc}</p>
                <div className="workpage-card-foot">
                  <div className="workpage-card-tags">
                    {project.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <span className="workpage-card-cta">View ↗</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
