import React, { useState, useEffect } from 'react';
import './Home.scss';


const Home = () => {
  const [professionIndex, setProfessionIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const professions = ['Web Developer', 'React Developer'];
  
  useEffect(() => {
    let timeout;
    const currentProfession = professions[professionIndex];
    
    if (isTyping) {
      if (displayText.length < currentProfession.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentProfession.substring(0, displayText.length + 1));
        }, 100); // Typing speed
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end of word
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50); // Deleting speed
      } else {
        setProfessionIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [professionIndex, displayText, isTyping]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <section className="hero" id="home">
      
      <div className="hero__content">
        <div className="hero__greeting">
          <span>Hello, my name is</span>
          <div className="hero__underline"></div>
        </div>
        <h1 className="hero__title">Rutvik Tadhani</h1>
        
        <div className="hero__profession">
          A passionate{' '}
          <span className="hero__typing-text">
            {displayText}
            <span className="hero__cursor">|</span>
          </span>
        </div>

        <p className="hero__description">
          I create responsive, high-performance web applications with clean code
          and modern technologies. Focused on delivering exceptional user experiences.
        </p>

        <div className="hero__buttons">
          <button 
            className="hero__button hero__button--contact"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
          <button 
            className="hero__button hero__button--about"
            onClick={() => scrollToSection('about')}
          >
            About Me
            <div className="hero__arrow-container">
              <svg
                className="hero__arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default Home;