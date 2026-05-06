const About = () => {
  return (
    <section className="about" id="about">
      <div className="section-inner">
        <div className="about-image">
          {/*
            TODO: Replace this placeholder with a candid or lifestyle photo.
            Recommended: square crop, min 600 × 600 px, JPG or WebP.
            Import it at the top of this file:
              import aboutPhoto from '../assets/about-photo.jpg';
            Then replace the div below with:
              <img src={aboutPhoto} alt="Nicola Kate Stebbing" />
          */}
          <div className="img-placeholder">
            Lifestyle photo<br />
            <small>600 × 600 px · square crop</small>
          </div>
        </div>
        <div className="about-text">
          <p className="section-label">About me</p>
          {/* TODO: Update heading to reflect your personal brand voice */}
          <h2>Creative marketer with a nose for a story</h2>
          {/* TODO: Replace these paragraphs with your own bio */}
          <p>
            I'm a content manager and brand storyteller with experience leading content strategy
            for beauty and lifestyle brands. I specialise in building editorial frameworks that
            keep channels consistent, engaging, and commercially focused.
          </p>
          <p>
            Currently Content Manager at{' '}
            <a href="https://www.gitticonsciousbeauty.de/en" target="_blank" rel="noreferrer">
              Gitti
            </a>
            , where I oversee social media, email, and long-form content across English and German
            markets.
          </p>
          {/* TODO: Add one more paragraph — what makes you different? What are you passionate about? */}
          <p>
            When I'm not crafting copy, you'll find me hunting down ceramics markets, reading debut
            novels, and teaching Lenny the lemon tree some new tricks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
