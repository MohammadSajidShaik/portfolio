import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">01.</span> About Me
        </h2>
        <div className="title-line"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            I'm a passionate Full Stack Developer with expertise in building
            modern web applications. I love creating seamless user experiences
            and robust backend systems that solve real-world problems.
          </p>
          <p className="about-description">
            My journey in web development started with a curiosity about how
            websites work, and it has evolved into a career focused on creating
            innovative solutions using cutting-edge technologies.
          </p>
          <p className="about-description">
            When I'm not coding, I enjoy exploring new technologies, contributing
            to open-source projects, and continuously learning to stay ahead in
            this ever-evolving field.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">50+</span>
              <span className="highlight-label">Projects Completed</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">20+</span>
              <span className="highlight-label">Happy Clients</span>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-wrapper">
            <div className="image-placeholder">
              <span>Your Photo</span>
            </div>
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

