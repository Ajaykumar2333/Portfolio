import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="section-wrap">
        <div className="contact-card">
          <div className="contact-glow" />
          <p className="section-eyebrow" style={{ justifyContent: "center" }}>Get In Touch</p>
          <h2 className="contact-title">
            Let's build something <span className="accent">worth using</span>
          </h2>
          <p className="contact-desc">Open to new roles and collaborations.</p>

          <div className="contact-details">
            <a href="tel:+919346175460" className="contact-detail">+91 93461 75460</a>
            <a href="mailto:vodlaajay113@gmail.com" className="contact-detail">vodlaajay113@gmail.com</a>
          </div>

          <a href="mailto:vodlaajay113@gmail.com" className="contact-btn">
            Say Hello
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
