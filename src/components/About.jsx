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
            I'm a results-driven Java Developer & Software Engineer with 4+ years of experience
            specializing in enterprise application development, microservices architecture, and
            full-stack development in the insurance and healthcare sectors.
          </p>
          <p className="about-description">
            Adept at designing and implementing scalable Java-based solutions and optimizing
            cloud-based infrastructures using AWS, Kubernetes, and Docker. Strong expertise
            in CI/CD, API development, and Agile methodologies to ensure robust, high-performance
            software solutions.
          </p>
          <p className="about-description">
            Currently working at Humana Inc. in California, with previous experience at TCS
            in India. Certified in Microsoft Azure Fundamentals (AZ-900) and AWS Certified
            Solutions Architect Associate. Holder of a Master's degree in Information Systems
            from Northwest Missouri State University.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-item">
              <span className="highlight-number">4+</span>
              <span className="highlight-label">Years Experience</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">2</span>
              <span className="highlight-label">AWS Certifications</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-number">3+</span>
              <span className="highlight-label">Companies</span>
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

