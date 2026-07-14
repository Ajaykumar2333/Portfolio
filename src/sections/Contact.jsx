import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <div className="contact-glow" />

        <p className="contact-role">Ajay — UI/UX Designer</p>

        <h2 className="contact-title">
          Let's Work <span className="accent">Together</span>
        </h2>
        <p className="contact-desc">
          Have a project in mind? I'd love to hear from you.
        </p>

        <div className="contact-details">
          <a href="tel:+919346175460" className="contact-detail">
            <span className="detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.8 21 3 13.2 3 3.6c0-.6.4-1 1-1H7.4c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              </svg>
            </span>
            +91 93461 75460
          </a>
          <a href="mailto:vodlaajay113@gmail.com" className="contact-detail">
            <span className="detail-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6"/>
                <path d="M3.5 6.5L12 13l8.5-6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            vodlaajay113@gmail.com
          </a>
        </div>

        <a href="mailto:vodlaajay113@gmail.com" className="contact-btn">
          Let's Work Together
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Contact;