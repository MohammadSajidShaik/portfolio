import React from 'react'
import profileImage from '../assets/IMG_6072 2.jpg'
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
          <p className="about-description batman-intro">
            In the shadowed corridors of enterprise systems, I emerge as a Java Developer & Software Engineer.
            Armed with 4+ years of relentless experience, I specialize in enterprise application development,
            microservices architecture, and full-stack development in the critical sectors of insurance and healthcare.
          </p>
          <p className="about-description batman-skills">
            Master of scalable Java-based solutions, I wield AWS, Kubernetes, and Docker to optimize cloud infrastructures.
            My expertise in CI/CD pipelines, REST APIs, and Agile methodologies ensures that every solution I craft
            stands as an unbreakable fortress against system failures and performance bottlenecks.
          </p>
          <p className="about-description batman-background">
            Currently serving justice at Humana Inc. in California, I previously fought crime at TCS in India.
            Certified in Microsoft Azure Fundamentals (AZ-900) and AWS Solutions Architect Associate,
            I hold a Master's degree in Information Systems from Northwest Missouri State University.
            <br /><br />
            <span className="batman-quote">"The night is darkest just before the dawn. And I promise you, the dawn is coming."</span>
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
            <img
              src={profileImage}
              alt="Sajid Shaik - The Dark Knight Developer"
              className="profile-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="image-placeholder" style={{ display: 'none' }}>
              <span>🦇</span>
            </div>
            <div className="image-border"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

