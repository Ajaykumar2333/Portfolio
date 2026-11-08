import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./JaldihireDetail.css";

/* JaldiHire: website design case study.
   Everything is in /public/JH-images.
   Persona photos (round): persona-employer.jpg, persona-applicant.jpg,
   persona-interviewer.jpg. Put them in the same folder.
   The web application is under NDA and is not shown. */

const img = (name) => encodeURI(`/JH-images/${name}`);

const COLORS = { employer: "#FF7C56", applicant: "#9FC76D", interviewer: "#FFB845" };
const TOTAL = "06";

const meta = [
  { label: "Project", value: "Website for a hiring platform" },
  { label: "Company", value: "Allyted Solutions" },
  { label: "My role", value: "UI/UX designer" },
  { label: "Scope", value: "Every page, plus the animations" },
  { label: "Platform", value: "Website, desktop" },
];

const team = [
  { name: "Anvesh", role: "Manager", work: "Gave the project and the brief." },
  { name: "Ajaykumar Vodla", role: "UI/UX Designer", work: "Designed the website." },
  { name: "Sripriya", role: "PMO and Tester", work: "Tracked the work and tested it." },
];

const needs = [
  { color: COLORS.applicant, text: "Applicants need jobs." },
  { color: COLORS.employer, text: "Employers need applicants." },
  { color: COLORS.interviewer, text: "Interviewers run the interviews in between." },
];

const personas = [
  {
    key: "Employer", name: "Kavya", age: 34, color: COLORS.employer, photo: "employer-img.jpg",
    line: "Hires for a growing company", quote: "I need good people, and fast.",
    worry: "Will I find the right people in time?",
    goals: ["Hire faster and spend less", "Get pre-screened profiles", "Keep interviews, checks and offers in one place"],
    pains: ["Hiring takes too long", "Too many profiles to sort", "Too many tools to manage"],
    needs: ["A clear Hire Now page", "To see the ATS and dashboards", "An easy way to ask for a demo"],
    path: ["Homepage", "Employer page", "Pricing", "Request a demo"],
    designed: ["Hire Now section on the homepage", "Employer page with dashboards and ATS", "Pricing page with three plans", "Contact Sales demo form"],
  },
  {
    key: "Applicant", name: "Rohit", age: 26, color: COLORS.applicant, photo: "persona-applicant.jpg",
    line: "Wants a better job", quote: "I want a better job.",
    worry: "Will employers notice my profile?",
    goals: ["A higher-paying role", "A stronger profile", "Better work-life balance"],
    pains: ["Hard to get noticed", "Job search is slow", "Not sure the pay is fair"],
    needs: ["A clear Apply Now page", "Easy job search", "A quick way to sign up"],
    path: ["Homepage", "Applicant section", "Browse jobs", "Create account"],
    designed: ["Apply Now section on the homepage", "Browse jobs: list and details on one screen", "Login with animation", "Applicant page that moves as you scroll"],
  },
  {
    key: "Interviewer", name: "Suresh", age: 38, color: COLORS.interviewer, photo: "persona-interviewer.jpg",
    line: "Has 8+ years of experience", quote: "I want to earn in my free time.",
    worry: "Will I get paid on time?",
    goals: ["Earn money in free time", "Work from anywhere", "Get paid right after the interview"],
    pains: ["Fixed hours do not fit his day", "Not sure if he is eligible", "Late payments"],
    needs: ["A clear eligibility list", "A simple sign up", "To see how payment works"],
    path: ["Homepage", "Interviewer page", "Eligibility", "Register"],
    designed: ["Earn Now section on the homepage", "Instant payments and flexible schedules", "Eligibility criteria as six cards", "Three-step register block"],
  },
];

const roadmap = [
  { n: "01", tag: "In progress", on: true, title: "UX audit", items: ["Go through every screen and flow", "List the usability problems", "Decide what to fix first"] },
  { n: "02", tag: "In progress", on: true, title: "Design system", items: ["Colors and typography", "Form inputs and dropdowns", "Tables and icons"] },
  { n: "03", tag: "Next", on: false, title: "Redesign", items: ["The entire application", "Screen by screen", "Built on the new design system"] },
];

const palette = [
  { name: "Navy", hex: "#072C50", use: "Backgrounds, hero", bg: "#072C50", fg: "#fff" },
  { name: "Yellow", hex: "#F7CC47", use: "Buttons, key words", bg: "#F7CC47", fg: "#09090b" },
  { name: "Amber", hex: "#FFB845", use: "Interviewer", bg: "#FFB845", fg: "#09090b" },
  { name: "Coral", hex: "#FF7C56", use: "Employer", bg: "#FF7C56", fg: "#09090b" },
  { name: "Green", hex: "#9FC76D", use: "Applicant", bg: "#9FC76D", fg: "#09090b" },
];

const weights = [
  { name: "Bold", w: 700, sample: "Hiring is easy now!" },
  { name: "SemiBold", w: 600, sample: "Boost your hiring speed" },
  { name: "Medium", w: 500, sample: "Apply Now, Hire Now, Earn Now" },
  { name: "Regular", w: 400, sample: "Get access to pre-screened profiles, ready for your team." },
];

/* pin: s = side (l or r), y = % down the screen, x = % across the screen where the dot lands */
const SCREENS = [
  {
    title: "Homepage", line: "One page that shows all three users, then gives each one a section.", src: "JHHomepage.png",
    pins: [
      { s: "l", y: 4, x: 17, t: "Hero", d: "One line says what JaldiHire is: 360° Hiring Solution." },
      { s: "r", y: 6, x: 64, t: "Three users first", d: "Interviewer, Applicant and Employer, right in the hero." },
      { s: "l", y: 12, x: 35, t: "Four forces", d: "Best Practices, Strategies, Technology and Expert Team, joined as one." },
      { s: "l", y: 30, x: 22, t: "Employer: Hire Now", d: "Its own section, with its own call to action." },
      { s: "r", y: 37, x: 72, t: "Interviewer: Earn Now", d: "The light band changes the rhythm." },
      { s: "l", y: 43, x: 25, t: "Applicant: Apply Now", d: "Same layout, so it is easy to compare." },
      { s: "r", y: 50, x: 50, t: "Trusted by industry leaders", d: "Client logos come before anything else." },
      { s: "l", y: 61, x: 30, t: "What they say", d: "Client feedback in one block." },
      { s: "r", y: 77, x: 55, t: "Case study collection", d: "Six cards, one for each story." },
      { s: "l", y: 88, x: 45, t: "Contact form", d: "I'm interested in... then email and phone. Short." },
    ],
  },
  {
    title: "Employer page", color: COLORS.employer, line: "Hire Now. Each feature gets one block with a real screen.", src: "Employer.jpg",
    pins: [
      { s: "l", y: 3, x: 25, t: "Hire quality profiles with 10x speed", d: "The promise, then the dashboard." },
      { s: "r", y: 11, x: 68, t: "Dashboards", d: "Data-driven dashboards shown on a real screen." },
      { s: "l", y: 19.5, x: 22, t: "Pre-evaluated talent pool", d: "We screen profiles 10x faster." },
      { s: "r", y: 26, x: 70, t: "Interview management", d: "Integrated Interview Management Application." },
      { s: "l", y: 34, x: 52, t: "Set up your workflow", d: "A person, big type, and one idea." },
      { s: "r", y: 41, x: 78, t: "Interview feedback", d: "Skill ratings, strengths, weaknesses, overall." },
      { s: "l", y: 47.5, x: 25, t: "Application Tracking System", d: "Data-driven analytics and email notifications." },
      { s: "r", y: 57, x: 75, t: "Features", d: "Chips on a yellow band." },
      { s: "l", y: 65, x: 28, t: "Why U turn to JaldiHire", d: "Quick turnarounds, hire the best, save money." },
      { s: "r", y: 73, x: 60, t: "Your benefits", d: "Benefits float around the person." },
      { s: "l", y: 85, x: 40, t: "Client voices", d: "Success stories, then prospects." },
    ],
  },
  {
    title: "Interviewer page", color: COLORS.interviewer, line: "Earn Now. It sells the money first, then the freedom.", src: "interviewer.jpg",
    pins: [
      { s: "l", y: 4, x: 50, t: "Earn Money, Knowledge and Recognition", d: "One button: Become an Interviewer." },
      { s: "r", y: 14, x: 80, t: "Instant money", d: "Big gold type does the talking." },
      { s: "l", y: 25, x: 30, t: "Flexible schedules", d: "Outside office hours, weekends, holidays." },
      { s: "r", y: 35.5, x: 78, t: "Instant payments", d: "Get paid right after the interview." },
      { s: "l", y: 56, x: 25, t: "Stay updated", d: "Demand, updates and recognition." },
      { s: "r", y: 64, x: 70, t: "Eligibility criteria", d: "Six cards, so nobody applies by mistake." },
      { s: "l", y: 83.5, x: 30, t: "Register", d: "Create account, schedule interviews, get paid." },
    ],
  },
  {
    title: "Services page", line: "Seven services, one block each.", src: "Jaldihire our services.png",
    pins: [
      { s: "l", y: 2, x: 40, t: "Explore Our Unique Services", d: "A Contact Sales button right in the hero." },
      { s: "r", y: 15.7, x: 72, t: "Job Advisory", d: "Text on one side, picture on the other." },
      { s: "l", y: 25.7, x: 25, t: "Profile Sourcing", d: "The layout flips every block." },
      { s: "r", y: 37.9, x: 75, t: "Employer Branding", d: "A pastel glow sets this one apart." },
      { s: "l", y: 47.5, x: 25, t: "Proactive BGV", d: "For better hiring." },
      { s: "r", y: 57.5, x: 72, t: "Interview Outsourcing", d: "The video call is the picture." },
      { s: "l", y: 68, x: 30, t: "Integrated ATS", d: "Designed for modern hiring needs." },
      { s: "r", y: 81, x: 72, t: "Candidate Engagement", d: "Key to higher acceptance and lower resignation." },
    ],
  },
  {
    title: "About us page", line: "Mission and vision, then a word from the founder.", src: "aboutus.jpg",
    pins: [
      { s: "l", y: 5, x: 50, t: "Our Mission and Vision", d: "Swift Solutions for Your Hiring Needs." },
      { s: "r", y: 14, x: 60, t: "Our Vision", d: "Four short ticks. No long paragraphs." },
      { s: "l", y: 32, x: 25, t: "Our Mission", d: "Same list style, on the opposite side." },
      { s: "r", y: 60, x: 70, t: "Founder and CEO", d: "A photo and a short message on navy." },
      { s: "l", y: 85, x: 40, t: "Contact form", d: "The same form closes every page." },
    ],
  },
  {
    title: "Pricing page", line: "Three plans side by side. Premium is the recommended one.", src: "Pricings.png",
    pins: [
      { s: "l", y: 6, x: 27, t: "Pick the price", d: "Need a custom package? Contact Sales is right there." },
      { s: "r", y: 21, x: 79, t: "Premium", d: "Dark header and a yellow button make it stand out." },
      { s: "l", y: 27, x: 15, t: "Feature column", d: "One list for all plans, so you compare row by row." },
      { s: "r", y: 52, x: 62, t: "Ticks and crosses", d: "You see where a plan stops giving more." },
      { s: "r", y: 72, x: 80, t: "Select Plan", d: "One last button after the table." },
    ],
  },
  {
    title: "Contact Sales page", line: "A demo request, with a promise next to it.", src: "Contact_sales.png",
    pins: [
      { s: "r", y: 11, x: 80, t: "Request a demo", d: "Company, name, email, role, phone, then a time and date." },
      { s: "l", y: 18, x: 25, t: "Book Your Demo Today", d: "A big headline on a navy card." },
      { s: "l", y: 40, x: 25, t: "A real interview screen", d: "Shows what the demo will look like." },
      { s: "r", y: 53, x: 79, t: "Submit", d: "One yellow button." },
    ],
  },
  {
    title: "Browse jobs", color: COLORS.applicant, line: "For applicants. Search, pick a job, and read it on the same screen.", src: "joblistingspage.jpg",
    pins: [
      { s: "l", y: 6, x: 30, t: "Search", d: "Title, skill, experience and location." },
      { s: "r", y: 21, x: 72, t: "Job header", d: "Apply Now and Save sit next to the job." },
      { s: "l", y: 45, x: 20, t: "Job cards", d: "Company, role, city, and three quick facts." },
      { s: "r", y: 62, x: 55, t: "Job description", d: "Roles and responsibilities, easy to scan." },
    ],
  },
];

const MOTION = [
  { title: "Applicant page", where: "Applicant site", note: "The whole page moves as you scroll.", file: "applicant-page-screen-recording.mp4", speed: 1.6 },
  { title: "Applicant login", where: "Applicant site", note: "Sign in, with motion around the form.", file: "applicant-login-page-animation.mp4" },
  { title: "Instant payment", where: "Interviewer page", note: "The Earn section.", file: "animation1.mp4" },
];

const learnings = [
  "Agree the flow first. It saves more time than polish later.",
  "When a design depends on motion, show the motion.",
];

const ScrollPlayVideo = ({ src, speed = 1 }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting ? el.play().catch(() => {}) : el.pause()),
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} src={src} loop muted playsInline
      onLoadedMetadata={(e) => { e.target.playbackRate = speed; }} />
  );
};

const Part = ({ n, title, sub }) => (
  <section className="jh-band jh-band-dark jh-part">
    <div className="jh-col">
      <p className="jh-part-kicker">Part {String(n).padStart(2, "0")} / {TOTAL}</p>
      <h2 className="jh-part-title">{title}</h2>
      <p className="jh-part-sub">{sub}</p>
    </div>
  </section>
);

const Board = ({ title, children, className = "" }) => (
  <div className={`jh-board ${className}`}>
    {title && <h3 className="jh-board-title">{title}</h3>}
    {children}
  </div>
);

const Pinned = ({ src, alt, pins }) => (
  <div className="jh-pinned">
    <img src={img(src)} alt={alt} loading="lazy" />
    <div className="jh-pins">
      {pins.map((p) => (
        <div key={p.t} className={`jh-pin jh-pin-${p.s}`} style={{ top: `${p.y}%`, "--x": `${p.x}%` }}>
          <span className="jh-pin-line" />
          <div className="jh-pin-card"><h4>{p.t}</h4><p>{p.d}</p></div>
        </div>
      ))}
    </div>
  </div>
);

const JaldihireDetail = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="jh-page">
      {/* HERO */}
      <section className="jh-cover">
        <Link to="/work" className="jh-cover-back">← Back to Work</Link>
        <h1 className="jh-cover-title">Jaldi<span>Hire</span></h1>
        <div className="jh-cover-stage">
          <img src={img("Halfhomepage.png")} alt="JaldiHire website design on a laptop" />
        </div>
        <p className="jh-cover-sub">One website for <b>employers</b>, <b>applicants</b> and <b>interviewers</b>.</p>
      </section>

      <section className="jh-strip">
        {meta.map((m) => (
          <div key={m.label} className="jh-strip-item"><small>{m.label}</small><span>{m.value}</span></div>
        ))}
      </section>

      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <Board title="The team">
            <ul className="jh-team">
              {team.map((t) => (
                <li key={t.name}><strong>{t.name}</strong><span>{t.role}</span><p>{t.work}</p></li>
              ))}
            </ul>
          </Board>
        </div>
      </section>

      {/* 01 PROBLEM */}
      <Part n={1} title="The problem" sub="A hiring platform needed a website to show it to the world." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <Board title="The brief from Anvesh" className="jh-board-accent">
            <p className="jh-problem">
              JaldiHire needs a website that shows its platform to employers, applicants and interviewers. Each one
              must see what is in it for them, and where to click next.
            </p>
          </Board>
          <div className="jh-grid jh-grid-3">
            {needs.map((n) => (
              <div key={n.text} className="jh-need-card">
                <span className="jh-dot" style={{ background: n.color }} />
                <h4>{n.text}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 USERS */}
      <Part n={2} title="The users" sub="Three kinds of visitors, one website." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col">
          {personas.map((p, i) => (
            <article key={p.key} className="jh-pf" style={{ "--aud": p.color }}>
              <p className="jh-pf-kicker">User persona {i + 1} of {personas.length}</p>
              <h3 className="jh-pf-title">Meet <em>{p.name}</em></h3>
              <p className="jh-pf-sub">A made-up person, built from the brief and how the platform works. Not from interviews.</p>
              <div className="jh-pf-grid">
                <div className="jh-pf-card jh-pf-who">
                  <div className="jh-pf-photo">
                    <img src={img(p.photo)} alt={p.name} onError={(e) => { e.currentTarget.style.display = "none"; }} />
                  </div>
                  <h4>{p.name}, {p.age}</h4>
                  <p className="jh-pf-line">{p.line}</p>
                  <span className="jh-pf-chip">{p.key}</span>
                  <p className="jh-pf-quote">“{p.quote}”</p>
                  <div className="jh-pf-worry"><small>Biggest worry</small><span>{p.worry}</span></div>
                </div>
                <div className="jh-pf-card jh-pf-goals"><small>Goals</small><ul>{p.goals.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div className="jh-pf-card jh-pf-pains"><small>Worries and pain</small><ul>{p.pains.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div className="jh-pf-card jh-pf-wide"><small>What they need from the site</small><ul>{p.needs.map((x) => <li key={x}>{x}</li>)}</ul></div>
                <div className="jh-pf-card jh-pf-wide">
                  <small>Path on the website</small>
                  <div className="jh-pf-path">
                    {p.path.map((x, k) => (<span key={x} className="jh-pf-step">{k > 0 && <i aria-hidden="true">→</i>}<b>{x}</b></span>))}
                  </div>
                </div>
                <div className="jh-pf-card jh-pf-wide jh-pf-designed"><small>What I designed for this person</small><ul>{p.designed.map((x) => <li key={x}>{x}</li>)}</ul></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 LOOK */}
      <Part n={3} title="Look and feel" sub="The yellow comes from the logo. I put it on deep navy so it stands out." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <div className="jh-logo-board"><img src={img("jaldi-hire-logo.png")} alt="JaldiHire logo" /></div>
          <div className="jh-palette">
            {palette.map((c) => (
              <div key={c.name} className="jh-chip" style={{ background: c.bg, color: c.fg }}>
                <h3>{c.name}</h3><p>{c.hex}</p><small>{c.use}</small>
              </div>
            ))}
          </div>
          <Board title="Typography">
            <div className="jh-type">
              <div className="jh-type-hero">
                <span className="jh-type-aa">Aa</span>
                <span className="jh-type-name">Poppins</span>
                <span className="jh-type-sub">Used for every word on the website</span>
              </div>
              <div>
                {weights.map((t) => (
                  <div key={t.name} className="jh-type-row">
                    <span className="jh-type-row-name">{t.name}</span>
                    <span className="jh-type-row-size">{t.w}</span>
                    <span style={{ fontSize: "20px", fontWeight: t.w }}>{t.sample}</span>
                  </div>
                ))}
              </div>
            </div>
          </Board>
        </div>
      </section>

      {/* 04 SCREENS */}
      <Part n={4} title="The screens" sub="Every page, shown full." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col">
          {SCREENS.map((s) => (
            <div key={s.title} className="jh-screen-block">
              <h3 className="jh-screen-name">
                {s.color && <span className="jh-dot" style={{ background: s.color }} />}
                {s.title}
              </h3>
              <p className="jh-screen-line">{s.line}</p>
              <Pinned src={s.src} alt={`${s.title} design`} pins={s.pins} />
            </div>
          ))}
        </div>
      </section>

      {/* 05 MOTION */}
      <Part n={5} title="In motion" sub="Some pages only make sense moving. So here they are moving." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col">
          {MOTION.map((m) => (
            <div key={m.title} className="jh-stage-video">
              <span className="jh-motion-where">{m.where}</span>
              <h3 className="jh-screen-name">{m.title}</h3>
              <p className="jh-screen-line">{m.note}</p>
              <div className="jh-stage-frame"><ScrollPlayVideo src={img(m.file)} speed={m.speed} /></div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 NOW */}
      <Part n={6} title="Working on it now" sub="Right now I am on the JaldiHire application, the SaaS platform behind this website." />
      <section className="jh-band jh-band-dark">
        <div className="jh-col">
          <div className="jh-now">
            <span className="jh-now-badge"><i /> Working on it now</span>
            <h3 className="jh-now-title">Redesigning the <em>entire application</em></h3>
            <p className="jh-now-text">
              The platform was built by developers first, without a UI/UX designer. I am auditing the experience,
              building the design system, and then I will redesign all of it.
            </p>

            <div className="jh-road">
              {roadmap.map((s) => (
                <div key={s.title} className={`jh-road-card${s.on ? " is-on" : ""}`}>
                  <span className="jh-road-node" />
                  <div className="jh-road-top"><b>{s.n}</b><span>{s.tag}</span></div>
                  <h4>{s.title}</h4>
                  <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>
                </div>
              ))}
            </div>

            <div className="jh-now-nda">
              <svg viewBox="0 0 64 64" aria-hidden="true">
                <path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#F6B643" strokeWidth="6" strokeLinecap="round" />
                <rect x="12" y="28" width="40" height="30" rx="7" fill="#F6B643" />
              </svg>
              <p>The screens are under NDA. I will add them here once the application is released.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <Board title="What I learned">
            <ul className="jh-list">{learnings.map((l) => <li key={l}>{l}</li>)}</ul>
          </Board>
          <div className="jh-actions">
            <a href="https://www.jaldihire.com" target="_blank" rel="noreferrer" className="jh-btn jh-btn-primary">View live website ↗</a>
            <Link to="/work" className="jh-btn jh-btn-ghost">← Back to Work</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JaldihireDetail;