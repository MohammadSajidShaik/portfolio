import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Cloud-Based Inventory Management System',
      description:
        'Designed and developed a cloud-based inventory management solution leveraging Google Cloud Platform (GCP) services, including Cloud SQL and Cloud Dataflow, to support scalable and real-time inventory tracking. Integrated with SAP Business One (SAP B1) to synchronize inventory records and financial data, enhancing operational efficiency and cross-platform consistency. Utilized SQL Server for transactional data and SAP HANA DB for high-performance analytics and reporting. Built an interactive and responsive React.js front-end, enabling real-time monitoring and inventory control for warehouse managers and stakeholders.',
      tags: ['React.js', 'Google Cloud Platform', 'SAP Business One', 'SQL Server', 'SAP HANA DB', 'Cloud Dataflow'],
      category: 'academic',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-1',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-header">
        <h2 className="section-title">
          Academic Project
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
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

