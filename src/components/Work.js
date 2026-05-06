/*
  TODO: Fill in each project object below with your real work.
  For each project:
    - Update `tag`, `title`, and `desc` with your own copy.
    - Add an image: place your image in src/assets/, import it at the top of
      this file (e.g. import workGitti from '../assets/work-gitti.jpg'), and
      set imageSrc to the imported variable.
    - Set `link` to a live URL or remove the link if not applicable.

  Recommended image size: 1200 × 675 px (16:9), JPG or WebP.
*/

const projects = [
  {
    tag: 'Social Media',
    title: 'Gitti — Organic Social Strategy',
    desc:
      'TODO: Describe the campaign, channels, and results. E.g. "Grew Instagram following by X% in 6 months through a blend of UGC, editorial content, and educational reels."',
    imageSrc: null,
    imageAlt: 'Gitti social media campaign — 1200 × 675 px',
    link: 'https://www.instagram.com/gittibeauty/',
  },
  {
    tag: 'Email Marketing',
    title: 'TODO: Campaign or Brand Name',
    desc:
      'TODO: Describe the email campaign — goals, approach, and results such as open rate or click-through rate.',
    imageSrc: null,
    imageAlt: 'Email campaign screenshot — 1200 × 675 px',
    link: null,
  },
  {
    tag: 'Brand Content',
    title: 'TODO: Campaign or Brand Name',
    desc:
      'TODO: Describe a brand content project — format (video, editorial, UGC), your role, and measurable impact.',
    imageSrc: null,
    imageAlt: 'Brand content project — 1200 × 675 px',
    link: null,
  },
  {
    tag: 'Copywriting',
    title: 'TODO: Campaign or Brand Name',
    desc:
      'TODO: Highlight a copywriting project — landing page, ad copy, product descriptions, or similar.',
    imageSrc: null,
    imageAlt: 'Copywriting project — 1200 × 675 px',
    link: null,
  },
  {
    tag: 'Content Strategy',
    title: 'TODO: Campaign or Brand Name',
    desc:
      'TODO: Describe a strategy project — audience research, content pillars, editorial calendar, and so on.',
    imageSrc: null,
    imageAlt: 'Content strategy project — 1200 × 675 px',
    link: null,
  },
  {
    tag: 'Art Direction & Visuals',
    title: 'TODO: Campaign or Brand Name',
    desc:
      'TODO: Showcase visual content, art direction, photography, or UGC curation work.',
    imageSrc: null,
    imageAlt: 'Visual content project — 1200 × 675 px',
    link: null,
  },
];

const WorkCard = ({ tag, title, desc, imageSrc, imageAlt, link }) => (
  <article className="work-card">
    {imageSrc ? (
      <img src={imageSrc} alt={imageAlt} />
    ) : (
      <div className="img-placeholder">
        {imageAlt}
      </div>
    )}
    <div className="work-card-body">
      <p className="work-card-tag">{tag}</p>
      <h3 className="work-card-title">{title}</h3>
      <p className="work-card-desc">{desc}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="work-card-link"
        >
          View project ↗
        </a>
      )}
    </div>
  </article>
);

const Work = () => (
  <section className="work" id="work">
    <div className="section-inner">
      <p className="section-label">Selected work</p>
      <h2 className="section-title">Projects &amp; campaigns</h2>
      <div className="work-grid">
        {projects.map((project, i) => (
          <WorkCard key={i} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Work;
