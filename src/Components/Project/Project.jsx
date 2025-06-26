import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Project.scss';

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      type: "e-Commerce Application",
      title: "SMART CART",
      description: "Online store for selling apparel & footwear with secure payment integration.",
      tech: ["React", "Node", "JavaScript", "SASS", "MongoDB"],
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      type: "Blog Platform",
      title: "BLOGGER'S HUB",
      description: "Full-featured blogging platform with user authentication and rich text editor.",
      tech: ["MongoDB", "Express", "React", "Node"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      type: "Weather Application",
      title: "WEATHERLY",
      description: "Real-time weather forecasting app with interactive maps and location tracking.",
      tech: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      image: "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      type: "Online Book Store",
      title: "BOOKWORM",
      description: "Digital bookstore with search, filters, and recommendation system.",
      tech: ["React", "Redux", "Firebase", "Stripe API"],
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      github: "#",
      demo: "#"
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio & Previous Projects</h2>
          <p>I have built various different projects to fit different aspects of the client's business.</p>
        </div>

        <div className="slider-wrapper">
          <div className="slider-container">
            {projects.map((project, index) => (
              <div 
                className={`slide ${currentSlide === index ? 'active' : ''}`}
                key={project.id}
              >
                <div className={`project-content ${index % 2 === 0 ? 'left-image' : 'right-image'}`}>
                  {index % 2 === 0 ? (
                    <>
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                      <div className="project-info">
                        <span className="project-type">{project.type}</span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          <span>Built with:</span>
                          <div className="tech-tags">
                            {project.tech.map(tech => (
                              <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                        <div className="project-links">
                          <a href={project.github} className="code-link">
                            <FiGithub /> View Code
                          </a>
                          <a href={project.demo} className="live-link">
                            <FiExternalLink /> Live Demo
                          </a>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="project-info">
                        <span className="project-type">{project.type}</span>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          <span>Built with:</span>
                          <div className="tech-tags">
                            {project.tech.map(tech => (
                              <span key={tech} className="tech-tag">{tech}</span>
                            ))}
                          </div>
                        </div>
                        <div className="project-links">
                          <a href={project.github} className="code-link">
                            <FiGithub /> View Code
                          </a>
                          <a href={project.demo} className="live-link">
                            <FiExternalLink /> Live Demo
                          </a>
                        </div>
                      </div>
                      <div className="project-image">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="slider-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;