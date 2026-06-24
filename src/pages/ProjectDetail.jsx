import { useParams, Link } from "react-router-dom";
import "./ProjectDetail.css";

const caseStudies = {
  "trainex-academy": {
    title: "Trainex Academy",
    category: "UI/UX Design + Frontend Development",
    year: "2023",
    tools: ["Figma", "React JS", "HTML", "CSS", "LMS"],
    overview:
      "Designed and developed the full Trainex Academy platform — including the main website, LMS screens, and admin dashboard. Handled both the UI/UX design and frontend development end to end.",
    problem:
      "Trainex needed a professional online learning platform that was easy to navigate for students and powerful enough for admins to manage courses, users and content.",
    process: [
      "Researched competitor e-learning platforms",
      "Created wireframes for website, LMS and admin panel",
      "Designed high-fidelity UI in Figma",
      "Developed frontend using React JS",
      "Built and integrated LMS and admin screens",
    ],
    outcome:
      "Delivered a fully functional academy website with LMS and admin panel, improving the overall learning experience for students and management for admins.",
  },
  "trainex-motion": {
    title: "Trainex Promotional Videos",
    category: "Motion Design",
    year: "2023",
    tools: ["After Effects", "Premiere Pro", "Photoshop"],
    overview:
      "Created promotional videos and logo animations for Trainex Academy using After Effects. The motion work was used for social media marketing and internal presentations.",
    problem:
      "Trainex needed engaging promotional content to market their academy and create a strong brand presence through motion graphics.",
    process: [
      "Storyboarded the promotional video concepts",
      "Designed logo animation sequence in After Effects",
      "Created motion graphics for social media",
      "Rendered and delivered final video assets",
    ],
    outcome:
      "Delivered high quality promo videos and logo animations that strengthened the Trainex brand identity across digital platforms.",
  },
  "jaldihire": {
    title: "Jaldihire",
    category: "UI/UX Design + Web Application",
    year: "2023",
    tools: ["Figma", "React JS", "Web App"],
    overview:
      "Designed and developed the Jaldihire web application — a hiring platform built to connect employers and job seekers quickly and efficiently.",
    problem:
      "The hiring process needed to be simplified and made faster. Users needed a clean, intuitive interface to post jobs and apply with minimal friction.",
    process: [
      "Conducted user research on hiring platforms",
      "Designed wireframes and user flows",
      "Created high-fidelity UI in Figma",
      "Developed the frontend of the web application",
    ],
    outcome:
      "Delivered a clean, fast and user-friendly hiring web application that streamlined the recruitment process for both employers and candidates.",
  },
  "voyd-interiors": {
    title: "VOYD Interiors",
    category: "UI/UX Design + E-Commerce",
    year: "2023",
    tools: ["Figma", "E-Commerce", "UI Design"],
    overview:
      "Designed the VOYD Interiors website — a premium interior design e-commerce platform showcasing furniture and interior products with a luxury aesthetic.",
    problem:
      "VOYD needed a website that matched their premium brand identity and made it easy for customers to browse and purchase interior products online.",
    process: [
      "Studied luxury interior design brand websites",
      "Created mood boards and style guides",
      "Designed full website UI in Figma",
      "Designed e-commerce product pages and checkout flow",
    ],
    outcome:
      "Delivered a visually premium e-commerce website design that elevated the VOYD brand and provided a smooth shopping experience.",
  },
  "allyted-hrms": {
    title: "Allyted HRMS",
    category: "UI/UX Design + Frontend Development",
    year: "2022",
    tools: ["Figma", "React JS", "HRMS", "Web App"],
    overview:
      "Designed and developed the Allyted HRMS tool — a human resource management web application used internally to manage employees, attendance, payroll and more.",
    problem:
      "Allyted needed a centralised HRMS tool to replace manual HR processes and give both HR teams and employees a simple, efficient platform to manage everything.",
    process: [
      "Mapped out all HR workflows and requirements",
      "Designed the full UI system in Figma",
      "Built reusable component-based frontend in React",
      "Developed key modules: employee, attendance, payroll",
    ],
    outcome:
      "Delivered a complete HRMS web application that streamlined HR operations across the company, saving time and reducing manual errors.",
  },
  "big-leap-technologies": {
    title: "Big Leap Technologies",
    category: "UI/UX Design + Frontend Development",
    year: "2023",
    tools: ["Figma", "React JS", "LMS", "Website"],
    overview:
      "Designed and developed the Big Leap Technologies website and LMS platform. Handled the complete design and frontend development of both products.",
    problem:
      "Big Leap needed a strong website to represent their tech brand and a learning management system to deliver their training programs online.",
    process: [
      "Designed the company website UI from scratch",
      "Built the LMS screens and user flows",
      "Developed the frontend for both website and LMS",
      "Ensured responsive design across all screen sizes",
    ],
    outcome:
      "Delivered a professional tech company website and a fully functional LMS that helped Big Leap scale their training delivery online.",
  },
};

const ProjectDetail = ({ slug: slugProp }) => {
  const { slug: slugParam } = useParams();
  const slug = slugProp || slugParam;
  const project = caseStudies[slug];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="back-btn">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="pd-hero">
        <div className="pd-hero-content">
          <Link to="/" className="pd-back">← Back to Work</Link>
          <p className="pd-category">{project.category} · {project.year}</p>
          <h1 className="pd-title">{project.title}</h1>
          <div className="pd-tools">
            {project.tools.map((t) => (
              <span key={t} className="pd-tool">{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="pd-body">
        <div className="pd-section">
          <h2 className="pd-heading">Overview</h2>
          <p className="pd-text">{project.overview}</p>
        </div>

        <div className="pd-section">
          <h2 className="pd-heading">The Problem</h2>
          <p className="pd-text">{project.problem}</p>
        </div>

        <div className="pd-section">
          <h2 className="pd-heading">Process</h2>
          <ul className="pd-process-list">
            {project.process.map((step, i) => (
              <li key={i} className="pd-process-item">
                <span className="pd-step-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pd-img-placeholder">
          📸 Add your project screenshots here
        </div>

        <div className="pd-section pd-outcome">
          <h2 className="pd-heading">Outcome</h2>
          <p className="pd-text">{project.outcome}</p>
        </div>

        <div className="pd-nav">
          <Link to="/" className="pd-nav-btn">← All Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;