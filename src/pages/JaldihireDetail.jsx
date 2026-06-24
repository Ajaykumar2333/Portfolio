import { Link } from "react-router-dom";
import "./JaldihireDetail.css";

const JaldihireDetail = () => {
  const img = (name) => `/assets/${name}`;

  return (
    <div className="jh-page">

      {/* ── HERO ── */}
      <section className="jh-hero">
        <div className="jh-hero-inner">
          <Link to="/" className="jh-back">← Back to Work</Link>
          <div className="jh-tags-row">
            <span className="jh-tag jh-tag-accent">UI/UX Design</span>
            <span className="jh-tag">Design System</span>
            <span className="jh-tag">B2B SaaS</span>
            <span className="jh-tag">Marketing Website</span>
          </div>
          <h1 className="jh-hero-title">
            Jaldi<span className="jh-accent">Hire</span>
          </h1>
          <p className="jh-hero-tagline">360° Hiring Solution</p>
          <p className="jh-hero-sub">
            An AI-powered recruitment SaaS platform. I joined mid-development and elevated the entire visual quality — redesigning the marketing website from scratch, building the design system, and designing key product screens.
          </p>
          <div className="jh-meta-grid">
            <div className="jh-meta-item">
              <span className="jh-meta-label">My Role</span>
              <span className="jh-meta-value">UI/UX Designer</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Type</span>
              <span className="jh-meta-value">Company Project</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Platform</span>
              <span className="jh-meta-value">Website + Web Application</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Tools</span>
              <span className="jh-meta-value">Figma</span>
            </div>
            <div className="jh-meta-item">
              <span className="jh-meta-label">Live</span>
              <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-meta-link">jaldihire.com ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO BANNER IMAGE ── */}
      <div className="jh-img-banner">
        <img src={img("JHHomepage.png")} alt="Jaldihire Homepage" className="jh-banner-img" />
      </div>

      {/* ── 01 OVERVIEW ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner">
          <div className="jh-section-label">01 — Overview</div>
          <h2 className="jh-heading">What is <span className="jh-accent">Jaldihire?</span></h2>
          <p className="jh-body">Jaldihire is a 360-degree AI-powered SaaS recruitment platform designed for the Office of the CHRO. It centralizes talent acquisition — from job creation and sourcing, to background verification, interviews, and offers — all in one system serving employers, recruiters, applicants, and freelance interviewers.</p>

          <div className="jh-context-box">
            <strong>Context:</strong> Jaldihire was already under development when I joined. The core application flows, backend, and product logic were already built by the team. My involvement was specifically on the <strong>UI/UX side</strong> — I came in and elevated the visual quality of the product. I was not involved in the full web application flows or feature logic; my role was to bring visual consistency, usability, and a proper design system to a product that needed UI direction.
          </div>

          <div className="jh-highlight-box">
            🚀 Live at <a href="https://jaldihire.com" target="_blank" rel="noreferrer">jaldihire.com</a> — A real shipped product serving real employers and job seekers across India.
          </div>
        </div>
      </section>

      {/* ── 02 MY SCOPE ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner">
          <div className="jh-section-label">02 — My Scope</div>
          <h2 className="jh-heading">What I <span className="jh-accent">actually did</span></h2>
          <p className="jh-body">Rather than designing from zero, my job was to take an existing product in mid-build and make it visually strong, consistent, and credible. I focused on the areas where design had the most impact.</p>

          <div className="jh-scope-grid">
            <div className="jh-scope-card">
              <h4>✅ What I worked on</h4>
              <ul>
                <li>Redesigned the complete marketing website from scratch</li>
                <li>Built the Design System — colors, typography, buttons, forms, dropdowns, alerts, tables, icons</li>
                <li>Designed the Employer Dashboard UI</li>
                <li>Designed the Admin Dashboard UI</li>
                <li>Designed Post a Job form</li>
                <li>Designed All Jobs listing page</li>
                <li>Designed Job Description page</li>
                <li>Designed Applicant landing page</li>
                <li>Designed Interviewer landing page</li>
              </ul>
            </div>
            <div className="jh-scope-card jh-scope-out">
              <h4>× What was already built</h4>
              <ul>
                <li>Core web application flows and feature logic</li>
                <li>Backend architecture and APIs</li>
                <li>Initial product structure (Recruiter, Advisor, Interviewer panels)</li>
                <li>Business logic and data models</li>
              </ul>
            </div>
          </div>

          <div className="jh-stats">
            <div className="jh-stat">
              <span className="jh-stat-num">1</span>
              <span className="jh-stat-label">Website Redesigned</span>
            </div>
            <div className="jh-stat">
              <span className="jh-stat-num">1</span>
              <span className="jh-stat-label">Design System Built</span>
            </div>
            <div className="jh-stat">
              <span className="jh-stat-num">2</span>
              <span className="jh-stat-label">Dashboards Designed</span>
            </div>
            <div className="jh-stat">
              <span className="jh-stat-num">5<span className="jh-stat-plus">+</span></span>
              <span className="jh-stat-label">Key Screens</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 03 WEBSITE REDESIGN ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label">03 — Website Redesign</div>
            <h2 className="jh-heading">Marketing website — <span className="jh-accent">full redesign</span></h2>
            <p className="jh-body">The original website lacked visual hierarchy, consistency, and credibility for a B2B SaaS product. I redesigned it from scratch — homepage, all landing pages for each user type (Employer, Applicant, Interviewer), services pages, and the About / Mission-Vision pages.</p>
          </div>

          {/* Homepage — full bleed */}
          <div className="jh-screen-full">
            <div className="jh-screen-header">
              <span className="jh-screen-label">Homepage — Full View</span>
            </div>
            <div className="jh-screen-frame">
              <img src={img("Homepagge.png")} alt="Jaldihire Homepage" className="jh-screen-img" />
            </div>
          </div>

          {/* 3-col grid for landing pages */}
          <div className="jh-screen-grid-3">
            <div className="jh-screen-card">
              <span className="jh-screen-label">Employer Page</span>
              <div className="jh-screen-frame">
                <img src={img("Employer.png")} alt="Employer Landing Page" className="jh-screen-img" />
              </div>
            </div>
            <div className="jh-screen-card">
              <span className="jh-screen-label">Applicant Page</span>
              <div className="jh-screen-frame">
                <img src={img("Applicant.png")} alt="Applicant Landing Page" className="jh-screen-img" />
              </div>
            </div>
            <div className="jh-screen-card">
              <span className="jh-screen-label">Interviewer Page</span>
              <div className="jh-screen-frame">
                <img src={img("interviewer.png")} alt="Interviewer Page" className="jh-screen-img" />
              </div>
            </div>
          </div>

          {/* 2-col for remaining pages */}
          <div className="jh-screen-grid-2">
            <div className="jh-screen-card">
              <span className="jh-screen-label">Services Page</span>
              <div className="jh-screen-frame">
                <img src={img("Services with content.png")} alt="Services Page" className="jh-screen-img" />
              </div>
            </div>
            <div className="jh-screen-card">
              <span className="jh-screen-label">About Us Page</span>
              <div className="jh-screen-frame">
                <img src={img("aboutus.png")} alt="About Us Page" className="jh-screen-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 04 DESIGN SYSTEM ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label">04 — Design System</div>
            <h2 className="jh-heading">Built the system <span className="jh-accent">from scratch</span></h2>
            <p className="jh-body">Before touching any product screens, I built a comprehensive design system in Figma. The goal was to establish how the entire product should look — giving the development team a single source of truth for every UI element.</p>
          </div>

          {/* COLOR PALETTE */}
          <div className="jh-inner">
            <h3 className="jh-subheading">Color Palette</h3>
            <div className="jh-colors">
              {[
                { color: "#013262", name: "Primary Dark Navy", hex: "#013262", use: "Headers, navigation, ATS table headers" },
                { color: "#0069C1", name: "Button Default Blue", hex: "#0069C1", use: "Primary CTA buttons — default state" },
                { color: "#8C4A87", name: "Button Hover Purple", hex: "#8C4A87", use: "Primary buttons on hover" },
                { color: "#FFFFFF", name: "White", hex: "#FFFFFF", use: "Card backgrounds, content areas", border: true },
                { color: "#F5F5F5", name: "Light Gray", hex: "#F5F5F5", use: "Alternating table rows, secondary backgrounds" },
              ].map((c, i) => (
                <div key={i} className="jh-color-item">
                  <div className="jh-color-swatch" style={{ background: c.color, border: c.border ? "1px solid #ddd" : "none" }}></div>
                  <span className="jh-color-name">{c.name}</span>
                  <span className="jh-color-hex">{c.hex}</span>
                  <span className="jh-color-use">{c.use}</span>
                </div>
              ))}
            </div>

            {/* TYPOGRAPHY */}
            <h3 className="jh-subheading" style={{ marginTop: "48px" }}>Typography</h3>
            <div className="jh-type-scale">
              {[
                { name: "H1 — Hero", size: "48–56px / 800", sample: "Jaldihire", sampleSize: "32px", weight: "800" },
                { name: "H2 — Section", size: "32–40px / 700", sample: "360° Hiring Solution", sampleSize: "22px", weight: "700" },
                { name: "H3 — Card Title", size: "20–24px / 600", sample: "Pre-screened Profiles", sampleSize: "16px", weight: "600" },
                { name: "Body", size: "14–16px / 400", sample: "Achieve your hiring targets efficiently.", sampleSize: "14px", weight: "400", color: "#666" },
                { name: "Label / Tag", size: "11px / 700 / uppercase", sample: "UI/UX DESIGN", sampleSize: "11px", weight: "700", color: "#0069C1", spacing: "2px" },
              ].map((t, i) => (
                <div key={i} className="jh-type-row">
                  <span className="jh-type-name">{t.name}</span>
                  <span className="jh-type-size">{t.size}</span>
                  <span className="jh-type-demo" style={{ fontSize: t.sampleSize, fontWeight: t.weight, color: t.color || "#111", letterSpacing: t.spacing || "normal", textTransform: t.spacing ? "uppercase" : "none" }}>{t.sample}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── STYLE GUIDE — full bleed ── */}
          <div className="jh-inner">
            <h3 className="jh-subheading" style={{ marginTop: "56px" }}>Design System Components</h3>
          </div>

          <div className="jh-screen-full">
            <div className="jh-screen-header">
              <span className="jh-screen-label">Full Style Guide — Figma Export</span>
              <span className="jh-screen-badge">Figma</span>
            </div>
            <div className="jh-screen-frame jh-frame-ds">
              <img src={img("Style Guide.png")} alt="Style Guide" className="jh-screen-img" />
            </div>
          </div>

          {/* ── DS COMPONENTS — each one full-width, stacked ── */}
          <div className="jh-ds-stack">

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">01</span>
                <h4 className="jh-ds-title">Button Library — All States</h4>
                <p className="jh-ds-desc">Complete button system covering default, hover, disabled, icon-only, outline, and destructive variants. Every interactive state documented.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Buttons.png")} alt="Button Components" className="jh-screen-img" />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">02</span>
                <h4 className="jh-ds-title">Form Inputs</h4>
                <p className="jh-ds-desc">Input fields covering all states — placeholder, focused, filled, success, error, disabled, and mandatory. Built to handle every real-world form scenario.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Forminputs.png")} alt="Form Input Components" className="jh-screen-img" />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">03</span>
                <h4 className="jh-ds-title">Alert System</h4>
                <p className="jh-ds-desc">Four alert types — success, warning, error, and info — in both inline and toast variants. Consistent iconography and color coding across the product.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Alerts.png")} alt="Alert Components" className="jh-screen-img" />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">04</span>
                <h4 className="jh-ds-title">Data Tables</h4>
                <p className="jh-ds-desc">ATS-style data tables with alternating row colors, hover states, sortable headers, pagination, and action columns. Built for recruiters who live in dense data views.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Table.png")} alt="Table Components" className="jh-screen-img" />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row">
              <div className="jh-ds-info">
                <span className="jh-ds-num">05</span>
                <h4 className="jh-ds-title">Dropdowns</h4>
                <p className="jh-ds-desc">Select dropdowns with single and multi-select options, default/selected/focused states, and accessible keyboard navigation patterns.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Dropdowns.png")} alt="Dropdown Components" className="jh-screen-img" />
                </div>
              </div>
            </div>

            <div className="jh-ds-divider" />

            <div className="jh-ds-row jh-ds-row-reverse">
              <div className="jh-ds-info">
                <span className="jh-ds-num">06</span>
                <h4 className="jh-ds-title">Icon Library</h4>
                <p className="jh-ds-desc">Custom icon set covering all product actions — create, copy, paste, back, edit, view, and more — in consistent stroke weight and sizing across every panel.</p>
              </div>
              <div className="jh-ds-screen">
                <div className="jh-screen-frame jh-frame-ds">
                  <img src={img("Icons.png")} alt="Icon Library" className="jh-screen-img" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 05 PRODUCT SCREENS ── */}
      <section className="jh-section jh-dark">
        <div className="jh-inner-wide">
          <div className="jh-inner">
            <div className="jh-section-label jh-label-dark">05 — Product Screens</div>
            <h2 className="jh-heading jh-heading-white">Dashboard & app screens — <span className="jh-accent">key deliverables</span></h2>
            <p className="jh-body jh-body-muted">I designed the Employer Dashboard and Admin Dashboard UI, along with core screens: Post a Job form, All Jobs listing, and Job Description page. These screens were built on top of the design system I created.</p>
          </div>

          {/* Employer Dashboard — full bleed */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "40px" }}>Employer Dashboard</h3>
          </div>
          <div className="jh-screen-full jh-screen-full-dark">
            <div className="jh-screen-header jh-header-dark">
              <span className="jh-screen-label jh-label-white">Dashboard — Full View</span>
              <span className="jh-screen-badge jh-badge-dark">Figma → Dev Handoff</span>
            </div>
            <div className="jh-screen-frame jh-frame-dark">
              <img src={img("EmployerDashboard.png")} alt="Employer Dashboard" className="jh-screen-img" />
            </div>
          </div>

          {/* Prototype */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "56px" }}>Prototype Animation</h3>
          </div>
          <div className="jh-screen-full jh-screen-full-dark">
            <div className="jh-screen-header jh-header-dark">
              <span className="jh-screen-label jh-label-white">Figma Prototype — Interaction Flow</span>
              <span className="jh-screen-badge jh-badge-dark">Prototype</span>
            </div>
            <div className="jh-screen-frame jh-frame-dark">
              <video
                src={img("animation1.mp4")}
                className="jh-screen-img jh-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
            <p className="jh-anim-note">Prototype animation built in Figma — demonstrating key interaction flows.</p>
          </div>

          {/* Job Screens — premium spotlight stack */}
          <div className="jh-inner">
            <h3 className="jh-subheading jh-subheading-white" style={{ marginTop: "56px" }}>Job Screens</h3>
          </div>

          {/* All Jobs — full width spotlight */}
          <div className="jh-job-spotlight">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 01</div>
              <h4 className="jh-job-spotlight-title">All Jobs — Listing Page</h4>
              <p className="jh-job-spotlight-desc">Designed for density and speed. Recruiters can scan 1,300+ listings at a glance — title, company, location, salary, and application count all visible without opening a record. Filter bar pinned at top for instant refinement.</p>
              <div className="jh-job-pills">
                <span>Dense data layout</span>
                <span>Filter bar</span>
                <span>Quick scan cards</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <img src={img("joblistingspage.png")} alt="Job Listings Page" className="jh-screen-img" />
              </div>
            </div>
          </div>

          <div className="jh-job-divider" />

          {/* Job Description — full width spotlight, reversed */}
          <div className="jh-job-spotlight jh-job-spotlight-rev">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 02</div>
              <h4 className="jh-job-spotlight-title">Job Description Page</h4>
              <p className="jh-job-spotlight-desc">Full job detail view with structured sections — description, responsibilities, skills, and package info. Sidebar surfaces the assigned Job Agent and recruiter contacts. Tab system separates Applicants, Panel Members, and descriptions cleanly.</p>
              <div className="jh-job-pills">
                <span>Tabbed layout</span>
                <span>Job agent sidebar</span>
                <span>Apply CTA</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <img src={img("jobdescription.png")} alt="Job Description Page" className="jh-screen-img" />
              </div>
            </div>
          </div>

          <div className="jh-job-divider" />

          {/* Post a Job — full width */}
          <div className="jh-job-spotlight">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 03</div>
              <h4 className="jh-job-spotlight-title">Post a Job — Application Form</h4>
              <p className="jh-job-spotlight-desc">Multi-step job creation form. Employers fill in role details, package, experience requirements, and assign interviewers — all in a clean structured flow built entirely on the design system components I created.</p>
              <div className="jh-job-pills">
                <span>Multi-step form</span>
                <span>Design system inputs</span>
                <span>Employer flow</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark">
                <img src={img("jobappplication.png")} alt="Job Application Form" className="jh-screen-img" />
              </div>
            </div>
          </div>

          <div className="jh-job-divider" />

          {/* Admin — locked */}
          <div className="jh-job-spotlight jh-job-spotlight-rev">
            <div className="jh-job-spotlight-meta">
              <div className="jh-job-tag">Screen 04</div>
              <h4 className="jh-job-spotlight-title">Admin Dashboard</h4>
              <p className="jh-job-spotlight-desc">Full admin panel UI designed for platform operations — user management, employer overview, recruiter activity, and system-level controls. Available for walkthrough during an interview session.</p>
              <div className="jh-job-pills">
                <span>Platform overview</span>
                <span>User management</span>
                <span>Activity tracking</span>
              </div>
            </div>
            <div className="jh-job-spotlight-screen">
              <div className="jh-screen-frame jh-frame-dark jh-frame-locked">
                <div className="jh-locked-content">
                  <span className="jh-lock-icon">🔒</span>
                  <p>Admin Dashboard</p>
                  <span>Available during interview walkthrough</span>
                </div>
              </div>
            </div>
          </div>

          <div className="jh-inner">
            <div className="jh-nda-box" style={{ marginTop: "40px" }}>
              ℹ️ I also understand the Recruiter panel flows and overall platform architecture — available for walkthrough during interview.
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 KEY DECISIONS ── */}
      <section className="jh-section jh-white">
        <div className="jh-inner">
          <div className="jh-section-label">06 — Key Design Decisions</div>
          <h2 className="jh-heading">Why I designed <span className="jh-accent">it this way</span></h2>

          <div className="jh-decisions" style={{ marginTop: "32px" }}>
            {[
              {
                num: "01",
                title: "Design system before screens",
                desc: "I built the complete design system — color tokens, button library, form states, alert variants, data tables, icon system — before designing any product screens. With multiple panels and developers working in parallel, consistency needed a foundation.",
              },
              {
                num: "02",
                title: "Website redesign to establish credibility",
                desc: "The original site didn't convey the sophistication of the product. I redesigned it with clear sections for each user type — Employer, Applicant, and Interviewer — each with their own value proposition and CTA flow.",
              },
              {
                num: "03",
                title: "Dark navy + yellow = brand distinction",
                desc: "The Jaldihire brand uses a dark navy and yellow palette that stands out in the recruitment space dominated by blues and greens. I carried this consistently across the website and dashboard without making it feel heavy.",
              },
              {
                num: "04",
                title: "Job listing page built for quick scanning",
                desc: "The All Jobs page was designed with density in mind — recruiters and employers need to scan many listings fast. Cards were structured to show the most critical info (title, company, location, salary) at a glance without opening.",
              },
            ].map((d, i) => (
              <div key={i} className="jh-decision-card" style={{ background: "rgba(13,27,42,0.04)", border: "1px solid #eee" }}>
                <span className="jh-decision-num">{d.num}</span>
                <div className="jh-decision-content">
                  <h4 style={{ color: "#111" }}>{d.title}</h4>
                  <p style={{ color: "#666" }}>{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 07 OUTCOME ── */}
      <section className="jh-section jh-gray">
        <div className="jh-inner">
          <div className="jh-section-label">07 — Outcome</div>
          <h2 className="jh-heading">Delivered and <span className="jh-accent">shipped.</span></h2>

          <div className="jh-outcome-list">
            {[
              "Complete marketing website redesign — all user landing pages + services + about pages",
              "1 unified design system — colors, typography, buttons, forms, dropdowns, alerts, tables, icons",
              "Employer Dashboard UI — designed and handed off",
              "Admin Dashboard UI — designed and handed off",
              "Post a Job form, All Jobs listing, and Job Description page",
              "Applicant & Interviewer landing pages designed",
              "All deliverables successfully handed to development and shipped live",
            ].map((item, i) => (
              <div key={i} className="jh-outcome-item">
                <span className="jh-outcome-tick">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="jh-live-link">
            <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-btn-primary">View Live Site ↗</a>
            <Link to="/" className="jh-btn-outline">← All Projects</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default JaldihireDetail;