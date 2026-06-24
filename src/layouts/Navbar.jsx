import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Skills", href: "skills" },
    { label: "Work", href: "work" },
    { label: "Motion", href: "motion" },
    { label: "Contact", href: "contact" },
  ];

  const handleNav = (e, href) => {
    setMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="/">AK</Link>
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <li key={link.label}>
            {isHome ? (
              <a
                href={`#${link.href}`}
                onClick={(e) => handleNav(e, link.href)}
              >
                {link.label}
              </a>
            ) : (
              <Link to={`/#${link.href}`}>{link.label}</Link>
            )}
          </li>
        ))}
      </ul>

      <a href="#contact" onClick={(e) => handleNav(e, "contact")} className="navbar-cta">
        Hire Me
      </a>

      <button
        className="navbar-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
};

export default Navbar;
