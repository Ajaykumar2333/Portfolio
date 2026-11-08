import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./JaldihireDetail.css";

/* ═══════════════════════════════════════════════════════════
   JaldiHire: website design case study
   Overview, Empathize, Define, Ideate, Prototype, Motion,
   Test, Final solution, NDA.

   • The web application is under NDA and is never shown.
   • Missing screens and videos show a placeholder. Add the file
     name below (files go in /public/assets) to replace it.
   • Lines marked  // EDIT  are drafted. Check them.
═══════════════════════════════════════════════════════════ */

const HERO_IMAGE = "Halfhomepage.png";

const EXTRAS = {
  logo: null,        // e.g. "jaldihire-logo.png"
  wireframes: [],    // e.g. ["wireframe-home.png"]
  components: null,  // e.g. "website-components.png"
  mobile: [],        // e.g. ["mobile-home.png", "mobile-employer.png"]
};

const SCREENS = [
  { title: "Homepage", note: "One section for each user.", src: "JHHomepage.png" },
  { title: "Employer page", note: "Hire Now", color: "#F16232", src: "Employer.jpg" },
  { title: "Applicant page", note: "Apply Now", color: "#22C55E", src: "Applicant.jpg" },
  { title: "Interviewer page", note: "Earn Now", color: "#F6B643", src: "interviewer.jpg" },
  { title: "Services page", note: "Seven services.", src: "Services with content.jpg" },
  { title: "About us page", note: "Mission and vision.", src: "aboutus.jpg" },
  { title: "Pricing page", note: "Three plans, Premium recommended.", src: null },
  { title: "Employer sign up and login", note: "Short form, on the website.", src: null },
  { title: "Interviewer sign up and login", note: "Five fields, on the website.", src: null },
];

const MOTION = [
  { title: "Employer section", where: "Homepage", file: null },
  { title: "Interviewer section", where: "Homepage", file: null },
  { title: "Applicant section", where: "Homepage", file: null },
  { title: "Scroll interactions", where: "Applicant page", note: "The whole page runs on interactions as you scroll.", file: "applicant-page-screen-recording.mp4", speed: 1.6 },
  { title: "Earn section", where: "Interviewer page", file: null },
];

/* ── Content ── */

const glance = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Brief from", value: "Anvesh, my manager" },
  { label: "Started", value: "January 2024" },
  { label: "Scope", value: "The full website" },
  { label: "Tool", value: "Figma" },
  { label: "Live", value: "jaldihire.com", href: "https://jaldihire.com" },
];

const pagesDesigned = [
  "Homepage", "Employer", "Applicant", "Interviewer", "Services",
  "About us", "Pricing", "Employer sign up", "Interviewer sign up",
];

const audiences = [
  { key: "Employer", color: "#F16232", text: "Needs people for open positions. Wants to see how JaldiHire helps and how to start." },
  { key: "Applicant", color: "#22C55E", text: "Needs a job. Wants better pay and a stronger profile." },
  { key: "Interviewer", color: "#F6B643", text: "Wants to earn by interviewing. Needs to know it is flexible and pays fast." },
];

const goals = [
  "An easy flow for all three users",
  "Each user sees their own features",
  "A brand that feels rich",
];

const featureMap = [
  { key: "Employer", color: "#F16232", action: "Hire Now", features: ["In-Built ATS", "Interview Outsourcing", "BGV Screening", "Candidate Engagement", "Payroll"] },
  { key: "Interviewer", color: "#F6B643", action: "Earn Now", features: ["Work Remote", "Flexible Schedules", "Instant Payment"] },
  { key: "Applicant", color: "#22C55E", action: "Apply Now", features: ["Get Higher CTC", "Profile Branding", "Better Work-Life Balance"] },
];

const sitemap = {
  root: "Homepage",
  children: [
    { name: "Employer", color: "#F16232", sub: "Pricing, sign up, login" },
    { name: "Applicant", color: "#22C55E", sub: "Then the applicant site" },
    { name: "Interviewer", color: "#F6B643", sub: "Sign up, login" },
    { name: "Services" },
    { name: "About us" },
  ],
};

/* User flows. kind: page | action | end | nda */
const flows = [
  {
    who: "Employer",
    color: "#F16232",
    spine: [
      { kind: "page", label: "Homepage", sub: "Hire Now" },
      { kind: "page", label: "Employer page" },
    ],
    branches: [
      [{ kind: "action", label: "Request a Demo" }, { kind: "end", label: "Demo booked" }],
      [{ kind: "action", label: "Pricing" }, { kind: "page", label: "Sign up", sub: "Company, GST, plan" }, { kind: "end", label: "Account created" }],
      [{ kind: "action", label: "Login" }, { kind: "nda", label: "Application" }],
    ],
  },
  {
    who: "Applicant",
    color: "#22C55E",
    spine: [
      { kind: "page", label: "Homepage", sub: "Apply Now" },
      { kind: "page", label: "Applicant page" },
    ],
    branches: [
      [{ kind: "action", label: "Discover Jobs" }, { kind: "page", label: "Job search" }],
      [{ kind: "action", label: "Create Account" }, { kind: "page", label: "Register", sub: "Profile steps" }, { kind: "end", label: "Profile created" }],
    ],
  },
  {
    who: "Interviewer",
    color: "#F6B643",
    spine: [
      { kind: "page", label: "Homepage", sub: "Earn Now" },
      { kind: "page", label: "Interviewer page" },
    ],
    branches: [
      [{ kind: "action", label: "Become an Interviewer" }, { kind: "page", label: "Sign up", sub: "Five fields" }, { kind: "end", label: "Profile reviewed" }],
      [{ kind: "action", label: "Login" }, { kind: "nda", label: "Application" }],
    ],
  },
];

const wireSections = [
  { label: "Navigation and Contact Sales", h: 28 },
  { label: "Hero: the three users", h: 72, tiles: 3 },
  { label: "The four forces behind JaldiHire", h: 44, tiles: 4 },
  { label: "Employer section: Hire Now", h: 50 },
  { label: "Interviewer section: Earn Now", h: 50 },
  { label: "Applicant section: Apply Now", h: 50 },
  { label: "Clients and feedback", h: 40 },
  { label: "Case studies", h: 40 },
  { label: "Contact form: I'm interested in…", h: 40 },
  { label: "Footer", h: 28 },
];

const wireNotes = [
  { title: "Hero shows all three users", text: "Visitors see who JaldiHire is for before anything else." },
  { title: "One section per user", text: "The feature list, split by user, with the same layout each time." },
  { title: "Proof, then contact", text: "Clients and feedback sit right before the contact form." },
];

const typeScale = [
  { name: "H1 – Hero", size: "48–56px / 700", sample: "360° Hiring Solution", sampleSize: "34px", weight: 700 },
  { name: "H2 – Section", size: "32–36px / 600", sample: "Boost Your Hiring Speed", sampleSize: "26px", weight: 600 },
  { name: "H3 – Card title", size: "18–20px / 600", sample: "Achieve your hiring targets", sampleSize: "19px", weight: 600 },
  { name: "Body", size: "14–16px / 400", sample: "Get access to pre-screened profiles.", sampleSize: "15px", weight: 400 },
  { name: "Button / Label", size: "14–15px / 600", sample: "Contact Sales", sampleSize: "14px", weight: 600 },
];

/* WCAG contrast ratios, calculated. */
const contrast = [
  { pair: "Navy text on white", ratio: "14.1 : 1", pass: true },
  { pair: "Navy text on gradient (yellow end)", ratio: "11.1 : 1", pass: true },
  { pair: "Navy text on gradient (orange end)", ratio: "7.9 : 1", pass: true },
  { pair: "White text on navy", ratio: "14.1 : 1", pass: true },
  { pair: "White text on gradient", ratio: "1.8 : 1", pass: false },
];

const remaining = [
  "Usability tests with real employers, applicants and interviewers",
  "How many visitors reach their page and click the main action",
];

const decisions = [
  {
    where: "Flow first",
    need: "Three users, one website.",
    decision: "Agreed the flow with Anvesh before designing.",
    reason: "Every screen after that had a clear job.",
  },
  {
    where: "One section per user",
    need: "Each user needs their own features.",
    decision: "Hire Now, Earn Now and Apply Now sections.",
    reason: "No one has to hunt for their benefits.",
  },
  {
    where: "Logo colour on dark",
    need: "A rich, recognisable brand.",
    decision: "Yellow-orange from the logo, on dark navy.",
    reason: "It stands out, and white bands rest the eye.",
  },
];

const learnings = [
  "Agree the flow first. It saves more time than polish later.",
  "When a design depends on motion, show the motion.",
];

const team = [
  { name: "Anvesh", role: "Manager", work: "Gave the brief and approved the flow" },
  { name: "Me", role: "UI/UX Designer", work: "The whole website. Application: Recruiter and Employer parts" },
  { name: "Surya", role: "UI/UX Designer", work: "Application: Advisor, Admin and Interviewer parts" }, // EDIT job title
];

const lockedScreens = [
  { name: "Employer", owner: "Me" },
  { name: "Recruiter", owner: "Me" },
  { name: "Advisor", owner: "Surya" },
  { name: "Admin", owner: "Surya" },
  { name: "Interviewer", owner: "Surya" },
];

/* ── Pieces ── */

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
    <video ref={ref} src={src} className="jh-video" loop muted playsInline
      onLoadedMetadata={(e) => { e.target.playbackRate = speed; }} />
  );
};

const Frame = ({ src, alt, label, tall }) =>
  src ? (
    <div className="jh-screen-frame"><img src={src} alt={alt} loading="lazy" /></div>
  ) : (
    <div className={`jh-ph${tall ? " jh-ph-tall" : ""}`} role="img" aria-label={`${label} (coming soon)`}>
      <span className="jh-ph-icon" aria-hidden="true" />
      <span className="jh-ph-label">{label}</span>
      <span className="jh-ph-hint">Coming soon</span>
    </div>
  );

const FrameRow = ({ files, alt, label, img }) => {
  const list = files.length ? files : [null];
  return (
    <div className={`jh-img-row jh-img-row-${Math.min(list.length, 3)}`}>
      {list.map((f, i) => <Frame key={f || i} src={f ? img(f) : null} alt={alt} label={label} />)}
    </div>
  );
};

const SectionHead = ({ num, name, statement }) => (
  <header className="jh-sec-head">
    <p className="jh-sec-label"><span>{num}</span> {name}</p>
    <h2 className="jh-statement">{statement}</h2>
  </header>
);

const Board = ({ title, children, className = "" }) => (
  <div className={`jh-board ${className}`}>
    {title && <h3 className="jh-board-title">{title}</h3>}
    {children}
  </div>
);

const Screen = ({ title, note, color, src, img }) => (
  <article className="jh-board jh-screen">
    <header className="jh-screen-head">
      <div className="jh-screen-title">
        {color && <span className="jh-dot" style={{ background: color }} />}
        <h3>{title}</h3>
      </div>
      {note && <p>{note}</p>}
    </header>
    <Frame src={src ? img(src) : null} alt={`${title} design`} label={title} tall />
  </article>
);

const FlowNode = ({ n }) => (
  <div className={`jh-fnode jh-fnode-${n.kind}`}>
    <strong>{n.label}</strong>
    {n.sub && <small>{n.sub}</small>}
    {n.kind === "nda" && <small>Under NDA</small>}
  </div>
);

const FlowRow = ({ nodes }) => (
  <div className="jh-frow">
    {nodes.map((n, i) => (
      <div key={n.label + i} className="jh-fitem">
        {i > 0 && <span className="jh-farrow" aria-hidden="true" />}
        <FlowNode n={n} />
      </div>
    ))}
  </div>
);

const JaldihireDetail = () => {
  const img = (name) => `/assets/${name}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="jh-page">
      {/* HERO */}
      <section className="jh-band jh-band-dark jh-hero-band">
        <div className="jh-col">
          <Link to="/" className="jh-back">← Back to Work</Link>
          <div className="jh-hero">
            <span className="jh-hero-word" aria-hidden="true">JaldiHire</span>
            <img className="jh-hero-img" src={img(HERO_IMAGE)} alt="JaldiHire website design on a laptop" />
          </div>
        </div>
      </section>

      {/* 001 OVERVIEW */}
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <SectionHead
            num="001"
            name="Project overview"
            statement={
              <>
                JaldiHire connects employers who need people with applicants who need jobs.{" "}
                <mark>I designed its website</mark>{" "}
                <span>so each of the three users knows where to go.</span>
              </>
            }
          />

          <div className="jh-glance">
            {glance.map((g) => (
              <div key={g.label} className="jh-glance-item">
                <span>{g.label}</span>
                {g.href ? <a href={g.href} target="_blank" rel="noreferrer">{g.value} ↗</a> : <strong>{g.value}</strong>}
              </div>
            ))}
          </div>

          <div className="jh-grid jh-grid-2">
            <Board title="The project">
              <p className="jh-text">
                Anvesh, my manager, gave me this project in January 2024. I designed every page of the website in
                Figma, from the flow to the final screens and animations. I also worked on the web application with
                Surya. That part is under NDA, so it only appears at the end.
              </p>
            </Board>
            <Board title="Pages I designed">
              <div className="jh-pills">
                {pagesDesigned.map((p) => <span key={p} className="jh-pill">{p}</span>)}
              </div>
            </Board>
          </div>
        </div>
      </section>

      {/* 002 EMPATHIZE */}
      <section className="jh-band jh-band-light">
        <div className="jh-col jh-sec">
          <SectionHead
            num="002"
            name="Empathize"
            statement={
              <>
                Before designing, I asked Anvesh to explain the flow. <mark>Three users, three different goals.</mark>
              </>
            }
          />

          <Board title="How I started">
            <p className="jh-text">
              I asked for the full flow and the main feature list first. Once Anvesh confirmed both, I started on
              wireframes.
            </p>
          </Board>

          <div className="jh-grid jh-grid-3">
            {audiences.map((a) => (
              <div key={a.key} className="jh-persona" style={{ "--aud": a.color }}>
                <span className="jh-persona-bar" />
                <h4>{a.key}</h4>
                <p className="jh-persona-text">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 003 DEFINE */}
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <SectionHead
            num="003"
            name="Define"
            statement={
              <>
                One website, three users. <mark>Each should understand it quickly</mark>{" "}
                <span>and find their way without thinking.</span>
              </>
            }
          />

          <Board title="Problem statement" className="jh-board-accent">
            <p className="jh-problem">
              Employers, applicants and interviewers all land on the same website. Each one needs to see what
              JaldiHire offers them and where to click next.
            </p>
          </Board>

          <div className="jh-grid jh-grid-3">
            {goals.map((g, i) => (
              <div key={g} className="jh-goal-card">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <h4>{g}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 004 IDEATE */}
      <section className="jh-band jh-band-light">
        <div className="jh-col jh-sec">
          <SectionHead
            num="004"
            name="Ideate"
            statement={
              <>
                I split the feature list into <mark>one section per user</mark>{" "}
                <span>and planned the flow before any visuals.</span>
              </>
            }
          />

          <div className="jh-grid jh-grid-3">
            {featureMap.map((f) => (
              <div key={f.key} className="jh-feature" style={{ "--aud": f.color }}>
                <span className="jh-persona-bar" />
                <div className="jh-feature-head">
                  <h4>{f.key}</h4>
                  <span className="jh-feature-action">{f.action}</span>
                </div>
                <ul>{f.features.map((x) => <li key={x}>{x}</li>)}</ul>
              </div>
            ))}
          </div>

          <Board title="Sitemap">
            <div className="jh-sitemap" role="img" aria-label="Sitemap: the homepage links to Employer, Applicant, Interviewer, Services and About us">
              <div className="jh-sitemap-root">{sitemap.root}</div>
              <div className="jh-sitemap-children">
                {sitemap.children.map((c) => (
                  <div key={c.name} className="jh-sitemap-node">
                    <strong>
                      {c.color && <span className="jh-dot" style={{ background: c.color }} />}
                      {c.name}
                    </strong>
                    {c.sub && <small>{c.sub}</small>}
                  </div>
                ))}
              </div>
            </div>
          </Board>

          <Board title="User flows">
            <div className="jh-flows">
              {flows.map((f) => (
                <div key={f.who} className="jh-flow" style={{ "--aud": f.color }}>
                  <div className="jh-flow-who">
                    <span className="jh-dot" style={{ background: f.color }} />
                    {f.who}
                  </div>
                  <div className="jh-flow-body">
                    <FlowRow nodes={f.spine} />
                    <div className="jh-fbranches">
                      {f.branches.map((b, i) => (
                        <div key={i} className="jh-fbranch"><FlowRow nodes={b} /></div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="jh-legend">
              <span><i className="jh-lg jh-lg-page" /> Page</span>
              <span><i className="jh-lg jh-lg-action" /> Button</span>
              <span><i className="jh-lg jh-lg-end" /> Result</span>
              <span><i className="jh-lg jh-lg-nda" /> Application, under NDA</span>
            </div>
          </Board>

          <div className="jh-grid jh-grid-2 jh-wire-grid">
            <Board title="Homepage structure">
              <div className="jh-wire" role="img" aria-label="Wireframe of the homepage section order">
                {wireSections.map((w, i) => (
                  <div key={w.label} className="jh-wire-block" style={{ minHeight: w.h }}>
                    <span className="jh-wire-n">{i + 1}</span>
                    <span className="jh-wire-label">{w.label}</span>
                    {w.tiles && (
                      <div className="jh-wire-tiles" style={{ gridTemplateColumns: `repeat(${w.tiles}, 1fr)` }}>
                        {Array.from({ length: w.tiles }).map((_, t) => <i key={t} />)}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Board>
            <Board title="Why this order">
              <ol className="jh-notes">
                {wireNotes.map((n) => (
                  <li key={n.title}><h4>{n.title}</h4><p>{n.text}</p></li>
                ))}
              </ol>
            </Board>
          </div>

          <Board title="Wireframes">
            <FrameRow files={EXTRAS.wireframes} alt="Wireframe" label="Wireframes" img={img} />
          </Board>
        </div>
      </section>

      {/* 005 PROTOTYPE */}
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <SectionHead
            num="005"
            name="Prototype"
            statement={
              <>
                <mark>The yellow-orange comes from the logo.</mark>{" "}
                <span>I put it on dark navy so it stands out.</span>
              </>
            }
          />

          <div className="jh-grid jh-grid-3 jh-brand-grid">
            <Board title="Logo">
              <Frame src={EXTRAS.logo ? img(EXTRAS.logo) : null} alt="JaldiHire logo" label="Logo" />
            </Board>
            <div className="jh-swatch jh-swatch-gradient">
              <h3>Brand gradient</h3>
              <p className="jh-hex">#F5E84C → #F6B643</p>
              <p>Buttons and calls to action.</p>
            </div>
            <div className="jh-swatch jh-swatch-navy">
              <h3>Dark navy</h3>
              <p className="jh-hex">#072C50</p>
              <p>Navigation, hero and dark sections.</p>
            </div>
          </div>

          <Board title="Typography">
            <div className="jh-type">
              <div className="jh-type-hero">
                <span className="jh-type-aa">Aa</span>
                <span className="jh-type-name">Poppins</span>
                <span className="jh-type-sub">Used for every word on the website</span>
              </div>
              <div>
                {typeScale.map((t) => (
                  <div key={t.name} className="jh-type-row">
                    <span className="jh-type-row-name">{t.name}</span>
                    <span className="jh-type-row-size">{t.size}</span>
                    <span style={{ fontSize: t.sampleSize, fontWeight: t.weight }}>{t.sample}</span>
                  </div>
                ))}
              </div>
            </div>
          </Board>

          <div className="jh-grid jh-grid-2">
            <Board title="Components">
              <div className="jh-components">
                <span className="jh-btn-sample">Contact Sales</span>
                <span className="jh-btn-sample jh-btn-sample-ghost">Learn more</span>
                <span className="jh-chip-sample">★ In-Built ATS</span>
                <span className="jh-chip-sample">★ Work Remote</span>
              </div>
              <Frame src={EXTRAS.components ? img(EXTRAS.components) : null} alt="Website components" label="Component library" />
            </Board>
            <Board title="Responsive">
              <FrameRow files={EXTRAS.mobile} alt="Mobile layout" label="Mobile screens" img={img} />
            </Board>
          </div>
        </div>
      </section>

      {/* 006 MOTION */}
      <section className="jh-band jh-band-light">
        <div className="jh-col jh-sec">
          <SectionHead
            num="006"
            name="Motion"
            statement={
              <>
                <mark>Animation</mark> <span>brings each user's section to life.</span>
              </>
            }
          />

          <div className="jh-motion-grid">
            {MOTION.map((m) => (
              <article key={m.where + m.title} className="jh-board jh-motion-card">
                <header>
                  <span className="jh-motion-where">{m.where}</span>
                  <h3>{m.title}</h3>
                  {m.note && <p>{m.note}</p>}
                </header>
                {m.file ? (
                  <div className="jh-screen-frame"><ScrollPlayVideo src={img(m.file)} speed={m.speed} /></div>
                ) : (
                  <div className="jh-ph jh-ph-video" role="img" aria-label={`${m.where}, ${m.title} (recording coming soon)`}>
                    <span className="jh-ph-play" aria-hidden="true" />
                    <span className="jh-ph-hint">Recording coming soon</span>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 007 TEST */}
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <SectionHead
            num="007"
            name="Test"
            statement={
              <>
                I checked it myself, <mark>and listed what real users still need to test.</mark>
              </>
            }
          />

          <div className="jh-grid jh-grid-2">
            <Board title="Flow review">
              <p className="jh-text">
                Anvesh reviewed the flow and wireframes before I started the visual design.
              </p>
            </Board>
            <Board title="Still to test with users">
              <ul className="jh-list">{remaining.map((r) => <li key={r}>{r}</li>)}</ul>
            </Board>
          </div>

          <Board title="Colour contrast">
            <div className="jh-table-wrap">
              <table className="jh-table">
                <thead><tr><th>Pairing</th><th>Contrast</th><th>Result</th></tr></thead>
                <tbody>
                  {contrast.map((c) => (
                    <tr key={c.pair}>
                      <td>{c.pair}</td>
                      <td>{c.ratio}</td>
                      <td className={c.pass ? "jh-pass" : "jh-fail"}>{c.pass ? "Passes" : "Fails, so not used"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Board>
        </div>
      </section>

      {/* 008 FINAL */}
      <section className="jh-band jh-band-light">
        <div className="jh-col jh-sec">
          <SectionHead
            num="008"
            name="Final solution"
            statement={
              <>
                Every page of the website, <mark>one system.</mark>
              </>
            }
          />

          {SCREENS.map((s) => (
            <Screen key={s.title} title={s.title} note={s.note} color={s.color} src={s.src} img={img} />
          ))}

          <h3 className="jh-sub">Key decisions</h3>
          <div className="jh-decisions">
            {decisions.map((d) => (
              <div key={d.where} className="jh-decision">
                <h4>{d.where}</h4>
                <dl>
                  <div><dt>Need</dt><dd>{d.need}</dd></div>
                  <div><dt>Decision</dt><dd>{d.decision}</dd></div>
                  <div><dt>Reason</dt><dd>{d.reason}</dd></div>
                </dl>
              </div>
            ))}
          </div>

          <div className="jh-grid jh-grid-2">
            <Board title="Launch" className="jh-board-accent">
              <p className="jh-text">
                Handed to development and live at{" "}
                <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-inline-link">jaldihire.com</a>.
              </p>
            </Board>
            <Board title="What I learned">
              <ul className="jh-list">{learnings.map((l) => <li key={l}>{l}</li>)}</ul>
            </Board>
          </div>
        </div>
      </section>

      {/* NDA */}
      <section className="jh-band jh-band-dark">
        <div className="jh-col jh-sec">
          <SectionHead
            num="NDA"
            name="The web application"
            statement={
              <>
                I also designed parts of JaldiHire's web application. <mark>It is under NDA,</mark>{" "}
                <span>so no screens are shown.</span>
              </>
            }
          />

          <Board title="The team">
            <ul className="jh-team">
              {team.map((t) => (
                <li key={t.name}>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                  <p>{t.work}</p>
                </li>
              ))}
            </ul>
            <p className="jh-text jh-caption">
              Employers and interviewers sign up and log in on the website. Advisor, Admin and Recruiter log in
              separately inside the application.
            </p>
          </Board>

          <div className="jh-locked">
            {lockedScreens.map((l) => (
              <div key={l.name} className="jh-lock-card">
                <span className="jh-lock-icon" aria-hidden="true" />
                <h4>{l.name}</h4>
                <p>Under NDA</p>
                <span className="jh-lock-owner">Designed by {l.owner}</span>
              </div>
            ))}
          </div>

          <div className="jh-actions">
            <a href="https://jaldihire.com" target="_blank" rel="noreferrer" className="jh-btn jh-btn-primary">View live website ↗</a>
            <Link to="/" className="jh-btn jh-btn-ghost">All projects</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JaldihireDetail;