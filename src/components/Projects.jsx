import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-1',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      tags: ['React', 'Firebase', 'TypeScript'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-2',
    },
    {
      id: 3,
      title: 'REST API Service',
      description:
        'A scalable REST API with authentication, rate limiting, and comprehensive documentation. Built with Express and PostgreSQL.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-3',
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description:
        'A responsive dashboard for managing social media accounts with analytics, scheduling, and engagement tracking.',
      tags: ['Next.js', 'Tailwind CSS', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-4',
    },
    {
      id: 5,
      title: 'Microservices Architecture',
      description:
        'A microservices-based application with service discovery, API gateway, and container orchestration using Docker and Kubernetes.',
      tags: ['Node.js', 'Docker', 'Kubernetes', 'Redis'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-5',
    },
    {
      id: 6,
      title: 'Real-time Chat Application',
      description:
        'A real-time messaging application with WebSocket support, file sharing, and group chat functionality.',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      image: 'project-6',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
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

