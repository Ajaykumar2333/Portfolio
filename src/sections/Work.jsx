import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./Work.css";

const Work = () => {
  const preview = projects.slice(0, 3);

  return (
    <section className="work" id="work">
      <div className="section-wrap">
        <div className="work-header">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-heading">
            Shipped products, <span className="accent">not just shots</span>
          </h2>
        </div>

        <div className="work-grid">
          {preview.map((project, i) => (
            <Link
              to={project.path}
              key={project.id}
              className="work-card"
              style={{ "--reveal-delay": `${i * 0.1}s` }}
            >
              <div className="work-card-frame">
                <div className="work-card-browserbar">
                  <span className="work-dot" />
                  <span className="work-dot" />
                  <span className="work-dot" />
                  <span className="work-card-url">{project.url}</span>
                </div>
                <div className="work-card-shot-wrap">
                  <img src={project.image} alt={project.title} className="work-card-shot" loading="lazy" />
                </div>
              </div>

              <div className="work-card-body">
                <div className="work-card-head">
                  <h3 className="work-card-name">{project.title}</h3>
                  <span className="work-card-arrow">↗</span>
                </div>
                <p className="work-card-cat">{project.category}</p>
              </div>
            </Link>
          ))}
        </div>

        <Link to="/work" className="work-viewall">
          View All Work <span className="work-card-arrow">↗</span>
        </Link>
      </div>
    </section>
  );
};

export default Work;
