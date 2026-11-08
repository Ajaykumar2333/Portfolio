import { Link } from "react-router-dom";

// Opens a case study inside the site, or opens a live website directly in a new tab.
const ProjectLink = ({ project, children, ...rest }) =>
  project.external ? (
    <a href={project.external} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  ) : (
    <Link to={project.path} {...rest}>
      {children}
    </Link>
  );

export default ProjectLink;
