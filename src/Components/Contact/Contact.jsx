import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './Contact.scss';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Let's Connect</h2>
          <div className="underline"></div>
        </div>
        
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="contact-info">
          <div className="info-box">
            <div className="info-content">
              <div className="icon-left">
                <FaEnvelope className="icon" />
              </div>
              <div className="text-content">
                <h3>Email Me At</h3>
                <a href="mailto:rutviktadhani01@gmail.com">rutviktadhani01@gmail.com</a>
              </div>
            </div>
          </div>
          
          <div className="info-box">
            <div className="info-content">
              <div className="icon-left">
                <FaMapMarkerAlt className="icon" />
              </div>
              <div className="text-content">
                <h3>Based In</h3>
                <p>Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="social-section">
          <h4>Follow Me On</h4>
          <div className="social-icons">
            <a href="#" className="social-icon linkedin">
              <FaLinkedin />
            </a>
            <a href="#" className="social-icon twitter">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon github">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;