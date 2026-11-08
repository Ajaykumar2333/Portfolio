import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

// Case study pages have their own navigation, so the global navbar is hidden there.
const CASE_STUDY_ROUTES = ["/trainex", "/jaldihire", "/voyd", "/bigleap", "/property-inspection"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const hidden = CASE_STUDY_ROUTES.some((r) => location.pathname.startsWith(r));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Home", to: "/", type: "route" },
    { label: "Work", to: "/work", type: "route" },
    { label: "About", to: "about", type: "anchor" },
  ];

  const handleAnchor = (e, id) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
    }
  };

  if (hidden) return null;

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
        AV<span className="navbar-logo-dot">.</span>
      </Link>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) =>
          link.type === "route" ? (
            <li key={link.label}>
              <Link to={link.to} onClick={() => setMenuOpen(false)}>{link.label}</Link>
            </li>
          ) : (
            <li key={link.label}>
              <a href={`#${link.to}`} onClick={(e) => handleAnchor(e, link.to)}>{link.label}</a>
            </li>
          )
        )}
      </ul>

      <a
        href="#contact"
        onClick={(e) => handleAnchor(e, "contact")}
        className="navbar-cta"
      >
        Contact
      </a>

      <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? "open" : ""} />
        <span className={menuOpen ? "open" : ""} />
        <span className={menuOpen ? "open" : ""} />
      </button>
    </nav>
  );
};

export default Navbar;