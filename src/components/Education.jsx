import React from 'react'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa'
import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'Master of Science in Information Systems',
      institution: 'Northwest Missouri State University',
      location: 'Missouri, USA',
      period: 'Aug 2023 - Dec 2024',
      gpa: '3.56',
      achievements: [
        'Specialized in advanced information systems and technology management',
        'Completed coursework in database systems, software engineering, and cloud computing',
        'Developed strong foundation in enterprise systems and IT project management',
        'Gained expertise in modern web development technologies and frameworks'
      ],
      projects: [
        {
          name: 'Cloud-Based Inventory Management System',
          description: 'Academic capstone project integrating Google Cloud Platform, SAP Business One, and modern web technologies for real-time inventory management.'
        }
      ]
    }
  ]

  return (
    <section id="education" className="education">
      <div className="section-header">
        <h2 className="section-title">
          Education
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="education-container">
        {education.map((edu, index) => (
          <div key={edu.id} className="education-card">
            <div className="education-header">
              <div className="education-main">
                <div className="education-degree">
                  <FaGraduationCap className="degree-icon" />
                  <h3 className="degree-title">{edu.degree}</h3>
                </div>
                <div className="education-institution">
                  <h4 className="institution-name">{edu.institution}</h4>
                  <div className="institution-meta">
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="education-gpa">
                <FaAward className="gpa-icon" />
                <div className="gpa-info">
                  <span className="gpa-label">GPA</span>
                  <span className="gpa-value">{edu.gpa}</span>
                </div>
              </div>
            </div>

            <div className="education-content">
              <div className="education-achievements">
                <h4 className="achievements-title">Key Achievements</h4>
                <ul className="achievements-list">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="education-projects">
                <h4 className="projects-title">Notable Projects</h4>
                {edu.projects.map((project, idx) => (
                  <div key={idx} className="project-item">
                    <h5 className="project-name">{project.name}</h5>
                    <p className="project-description">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education