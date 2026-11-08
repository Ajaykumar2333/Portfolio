import { useState } from "react";

/**
 * Project thumbnail. Shows project.image; if that file is missing it tries
 * project.fallbacks one by one, so a wrong file name never shows a broken icon.
 */
const ProjectShot = ({ project, className }) => {
  const list = [project.image, ...(project.fallbacks || [])];
  const [index, setIndex] = useState(0);

  if (index >= list.length) {
    return (
      <div
        className={className}
        role="img"
        aria-label={project.title}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(255,255,255,0.04)",
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.9rem",
          textAlign: "center",
          padding: "16px",
        }}
      >
        {project.title}
      </div>
    );
  }

  return (
    <img
      src={list[index]}
      alt={project.title}
      className={className}
      loading="lazy"
      onError={() => setIndex((i) => i + 1)}
    />
  );
};

export default ProjectShot;
