const Contact = () => (
  <section className="contact" id="contact">
    <div className="section-inner">
      <p className="section-label">Get in touch</p>
      <h2>Let's work together</h2>
      {/* TODO: Update this intro text */}
      <p className="intro">
        Open to freelance projects, full-time roles, and creative collaborations.
        Drop me a line and let's talk.
      </p>
      <div className="contact-links">
        <div className="contact-link">
          <strong>Email</strong>
          {/* TODO: Replace with your actual email address */}
          <a href="mailto:hello@nicolastebbing.com">hello@nicolastebbing.com</a>
        </div>
        <div className="contact-link">
          <strong>LinkedIn</strong>
          {/* TODO: Replace with your actual LinkedIn profile URL */}
          <a
            href="https://www.linkedin.com/in/nicolastebbing"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/nicolastebbing
          </a>
        </div>
        <div className="contact-link">
          <strong>Instagram</strong>
          <a
            href="https://www.instagram.com/pics_by_nics/"
            target="_blank"
            rel="noreferrer"
          >
            @pics_by_nics
          </a>
        </div>
        <div className="contact-link">
          <strong>Location</strong>
          {/* TODO: Update location */}
          <span>Berlin, Germany — open to remote</span>
        </div>
      </div>
      {/* TODO: Optionally replace the email link below with a contact form */}
      <a href="mailto:hello@nicolastebbing.com" className="btn btn-primary">
        Say hello →
      </a>
    </div>
  </section>
);

export default Contact;
