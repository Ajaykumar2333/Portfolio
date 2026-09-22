import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

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
