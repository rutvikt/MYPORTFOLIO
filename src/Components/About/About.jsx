import React from 'react';
import './About.scss';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About <span className="highlight-me">ME</span></h2>
          <div className="underline"></div>
        </div>
        
        <div className="about-content">
          <p className="about-paragraph">
            Hi, I'm <span className="highlight">Rutvik Tadhani</span>, a passionate <span className="highlight">React Developer</span> with a growing interest in <span className="highlight">full-stack development</span>. I specialize in building dynamic, responsive, and modern web applications using <span className="highlight">React.js</span> on the front end. I'm also gaining hands-on experience in backend development using <span className="highlight">Node.js, Express, and MongoDB</span>, allowing me to contribute across the entire web stack.
          </p>
          
          <p className="about-paragraph">
            I completed my <span className="highlight">Bachelor of Computer Applications (BCA)</span> from <span className="highlight">Parul University</span>, graduating with a <span className="highlight">7.86 CGPA</span>. My academic journey, combined with self-learning and practical projects, has helped me build a solid foundation in web technologies and real-world problem-solving.
          </p>
          
          <p className="about-paragraph">
            I'm constantly learning and improving, currently exploring advanced concepts in <span className="highlight">backend systems</span> and <span className="highlight">full-stack project development</span>. My goal is to become a <span className="highlight">well-rounded developer</span> who can deliver <span className="highlight">end-to-end digital solutions</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;