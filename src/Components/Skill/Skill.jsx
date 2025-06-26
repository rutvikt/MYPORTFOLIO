import React from 'react';
import './Skill.scss';
import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiExpress, SiMongodb } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc'; // Correct import for VS Code icon

const Skill = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'SASS', icon: <FaSass />, color: '#CC6699' },
    { name: 'VS Code', icon: <VscCode />, color: '#007ACC' }, // Using VscCode icon
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Express', icon: <SiExpress />, color: '#000000' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
  ];

  return (
    <section className="skill-section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Experience</h2>
          <div className="underline"></div>
        </div>

        <div className="skill-content">
          <p className="expertise-line">
            The main area of expertise is front end development (client side of the web).
          </p>
          <p className="skill-description">
            HTML, CSS, JS, building small and medium web applications with React, 
            custom plugins, features, animations, and coding interactive layouts.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={index}>
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <div className="skill-name">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;