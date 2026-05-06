const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="section-inner">
        <div className="hero-text">
          <p className="eyebrow">Content Marketing &amp; Brand Storytelling</p>
          <h1>
            Nicola Kate<br />Stebbing
          </h1>
          {/* TODO: Update this tagline to reflect your personal brand and specialisms */}
          <p className="tagline">
            I turn brand stories into content that connects, converts, and lasts.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get in Touch</a>
          </div>
        </div>
        <div className="hero-image">
          {/*
            TODO: Replace this placeholder with a portrait photo.
            Recommended: high-quality JPEG or WebP, 800 × 1000 px minimum.
            Import it at the top of this file:
              import heroPhoto from '../assets/hero-portrait.jpg';
            Then replace the div below with:
              <img src={heroPhoto} alt="Nicola Kate Stebbing" />
          */}
          <div className="img-placeholder">
            Portrait photo<br />
            <small>800 × 1000 px · JPG or WebP</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
