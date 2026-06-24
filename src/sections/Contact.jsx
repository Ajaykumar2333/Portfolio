import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-left">
          <p className="section-tag">Get In Touch</p>
          <h2 className="contact-title">
            Let's Work <span className="accent">Together</span>
          </h2>
          <p className="contact-desc">
            Have a project in mind? I'd love to hear from you.
          </p>
          <div className="contact-links">
            <a href="mailto:youremail@gmail.com" className="contact-link">📧 youremail@gmail.com</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="contact-link">💼 LinkedIn</a>
            <a href="https://behance.net/yourprofile" target="_blank" rel="noreferrer" className="contact-link">🎨 Behance</a>
          </div>
        </div>

        <div className="contact-right">
          {sent ? (
            <div className="contact-success">
              <span>✅</span>
              <p>Message sent! I'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell me about your project..." rows={5} value={form.message} onChange={handleChange} required />
              </div>
              <button type="submit" className="contact-btn">Send Message →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;