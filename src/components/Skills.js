/*
  TODO: Edit the skills array below to match your actual expertise.
  Add, remove, or rename entries as needed.
*/

const skills = [
  {
    title: 'Content Strategy',
    desc: 'Editorial planning, content pillars, audience research, and channel strategy.',
  },
  {
    title: 'Social Media',
    desc: 'Organic growth on Instagram, TikTok, Pinterest, and LinkedIn.',
  },
  {
    title: 'Copywriting',
    desc: 'Brand voice, product descriptions, landing pages, ad copy, and email.',
  },
  {
    title: 'Email Marketing',
    desc: 'Campaign planning, segmentation, automation flows, and performance analysis.',
  },
  {
    title: 'SEO & Long-form',
    desc: 'Keyword research, editorial content, content audits, and organic traffic growth.',
  },
  {
    title: 'Art Direction',
    desc: 'Visual briefs, shoot direction, UGC curation, and brand aesthetics.',
  },
];

const Skills = () => (
  <section className="skills" id="skills">
    <div className="section-inner">
      <p className="section-label">What I do</p>
      <h2 className="section-title">Skills &amp; services</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
