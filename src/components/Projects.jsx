import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Policy Management System',
      description:
        'Designed and developed a policy management system using Java, Spring Boot, and AWS, reducing manual errors by 25% and improving policy renewal automation for Humana Inc.',
      tags: ['Java', 'Spring Boot', 'AWS', 'React.js', 'HIPAA'],
      category: 'enterprise',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-1',
    },
    {
      id: 2,
      title: 'Patient Data Synchronization Module',
      description:
        'Implemented a patient data synchronization module using secure REST APIs, ensuring HIPAA-compliant real-time data exchange with external providers.',
      tags: ['Java', 'Spring Boot', 'REST APIs', 'HIPAA', 'AWS'],
      category: 'healthcare',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-2',
    },
    {
      id: 3,
      title: 'Customer Portal - Healthcare Benefits',
      description:
        'Developed a React.js-based customer portal, increasing user engagement by 10% by providing seamless access to health benefits, claims, and appointment scheduling.',
      tags: ['React.js', 'JavaScript', 'Spring Boot', 'AWS', 'Kafka'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-3',
    },
    {
      id: 4,
      title: 'Motor Insurance Claims Automation',
      description:
        'Developed a motor insurance claims automation system using Java, Spring Boot, and Hibernate, reducing claims processing time by 22% and increasing customer satisfaction.',
      tags: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Azure'],
      category: 'enterprise',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-4',
    },
    {
      id: 5,
      title: 'Cloud-Based Inventory Management System',
      description:
        'Designed and developed a cloud-based inventory management solution leveraging Google Cloud Platform, integrating with SAP Business One for real-time inventory tracking.',
      tags: ['React.js', 'Google Cloud', 'SAP B1', 'SQL Server', 'GCP'],
      category: 'academic',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-5',
    },
    {
      id: 6,
      title: 'Microservices Migration - Claims System',
      description:
        'Migrated a legacy claims management system to microservices architecture, improving scalability and performance under high-load conditions using Azure Functions.',
      tags: ['Microservices', 'Azure', 'Java', 'Spring Boot', 'Kafka'],
      category: 'enterprise',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-6',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'academic', label: 'Academic' },
    { id: 'frontend', label: 'Frontend' },
  ]

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter)

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">03.</span> Featured Projects
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`filter-btn ${filter === category.id ? 'active' : ''}`}
            onClick={() => setFilter(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="project-placeholder">
                <span>{project.title}</span>
              </div>
              <div className="project-overlay">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

