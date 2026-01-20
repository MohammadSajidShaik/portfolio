import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-greeting fade-in">Hello, I'm</p>
            <h1 className="hero-name fade-in-up">
              <span className="gradient-text batman-text">SAJID SHAIK</span>
              <span className="hero-subtitle batman-glow batman-signal">THE DARK KNIGHT DEVELOPER</span>
            </h1>
            <p className="hero-description fade-in-up batman-description">
              In the shadows of enterprise systems, I emerge as a Java Developer & Software Engineer.
              With 4+ years of experience in the darkness of complex architectures, I craft
              scalable solutions that protect and serve the digital realm of insurance and healthcare.
              <br /><br />
              <span className="batman-motto">"I am vengeance. I am justice. I am the code that runs in the night."</span>
            </p>
            <div className="hero-buttons fade-in-up">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
            <div className="hero-social fade-in">
              <a
                href="https://github.com/MohammadSajidShaik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shaik-mohammad-sajid"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:sajid9md@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-illustration">
              <div className="floating-shape shape-1"></div>
              <div className="floating-shape shape-2"></div>
              <div className="floating-shape shape-3"></div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToSection('about')}>
          <FaArrowDown />
        </div>
      </div>
    </section>
  )
}

export default Hero

