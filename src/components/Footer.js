const Footer = () => (
  <footer className="site-footer">
    <div className="section-inner">
      <p>© {new Date().getFullYear()} Nicola Kate Stebbing. All rights reserved.</p>
      <ul className="social-links">
        {/* TODO: Update or add social links to match your active profiles */}
        <li>
          <a href="https://www.instagram.com/pics_by_nics/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nicolastebbing"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/gittibeauty/" target="_blank" rel="noreferrer">
            Gitti
          </a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
