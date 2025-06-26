import React from 'react';
import { FaGraduationCap, FaSchool, FaArrowUp } from 'react-icons/fa';
import './Education.scss';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Application",
      institution: "Parul University, Vadodara",
      grade: "Grade: 7.86",
      period: "Jul 2022 - Apr 2025",
      icon: <FaGraduationCap className="education-icon" />,
    },
    {
      id: 2,
      degree: "Higher Secondary School",
      institution: "Shree VidhyAarambh School, Rajkot",
      grade: "12th Grade",
      period: "Jul 2020 - May 2022",
      icon: <FaSchool className="education-icon" />,
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "Shree VidhyAarambh School, Rajkot",
      grade: "10th Grade",
      period: "Jul 2018 - May 2020",
      icon: <FaSchool className="education-icon" />,
    }
  ];

  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div 
            key={edu.id} 
            className="education-card"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="card-content">
              <div className="card-icon">{edu.icon}</div>
              <h3 className="education-degree">{edu.degree}</h3>
              <h4 className="education-institution">{edu.institution}</h4>
              <p className="education-grade">{edu.grade}</p>
              <p className="education-period">{edu.period}</p>
            </div>
            <div className="card-arrow">
              <FaArrowUp className="arrow-icon" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;