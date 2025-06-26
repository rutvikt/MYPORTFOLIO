import React from 'react';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';
import './Education.scss';

const Education = () => {
  const educationData = [
    {
      id: 1,
      institution: "Parul University, Vadodara",
      degree: "Bachelor of Computer Application",
      period: "Jul 2022 - Apr 2025",
      grade: "7.86 GPA",
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      institution: "Shree VidhyAarambh School, Rajkot",
      degree: "Higher Secondary (12th Grade)",
      period: "Jul 2020 - May 2022",
      grade: "85%",
      icon: <FaSchool />,
    },
    {
      id: 3,
      institution: "Shree VidhyAarambh School, Rajkot",
      degree: "Secondary School (10th Grade)",
      period: "Jul 2018 - May 2020",
      grade: "90%",
      icon: <FaSchool />,
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">Education</h2>
        
        <div className="education-cards">
          {educationData.map((edu, index) => (
            <div 
              key={edu.id} 
              className="education-card"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="card-icon">{edu.icon}</div>
              
              <div className="card-main">
                <div className="card-left">
                  <h3 className="institution">{edu.institution}</h3>
                  <p className="degree">{edu.degree}</p>
                  <p className="period">{edu.period}</p>
                </div>
                
                <div className="card-right">
                  <span className="grade">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;