import React from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaBuilding } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Development Engineer',
      company: 'Humana Inc.',
      location: 'California',
      period: 'May 2024 - Current',
      achievements: [
        'Designed and developed a policy management system using Java, Spring Boot, and AWS, reducing manual errors by 25% and improving policy renewal automation',
        'Implemented a patient data synchronization module using secure REST APIs, ensuring HIPAA-compliant real-time data exchange with external providers',
        'Developed a React.js-based customer portal, increasing user engagement by 10% by providing seamless access to health benefits, claims, and appointment scheduling',
        'Integrated Apache Kafka for real-time stream processing, enhancing data pipeline scalability and improving processing performance by 12%',
        'Executed CI/CD pipelines with Jenkins and Docker, reducing deployment time and automating testing for seamless production rollouts'
      ]
    },
    {
      id: 2,
      title: 'Software Development Engineer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'India',
      period: 'Aug 2021 - Aug 2023',
      achievements: [
        'Developed a motor insurance claims automation system using Java, Spring Boot, and Hibernate, reducing claims processing time by 22% and increasing customer satisfaction',
        'Integrated third-party telematics data into underwriting systems using Azure Data Factory and Azure Functions, enabling dynamic pricing models that increased policy sales by 8%',
        'Implemented secure API gateways for policyholder data, improving data security compliance and reducing unauthorized access incidents by 20%',
        'Migrated a legacy claims management system to microservices architecture, improving scalability and performance under high-load conditions'
      ]
    },
    {
      id: 3,
      title: 'Junior Software Developer',
      company: 'Tata Consultancy Services (TCS)',
      location: 'India',
      period: 'Jul 2020 - Jul 2021',
      achievements: [
        'Contributed to the development of a secure document storage system using Node.js and AWS S3, improving data accessibility and security',
        'Developed Java-based backend services using Spring MVC and JSP, enhancing security and accessibility of client-facing applications',
        'Led migration efforts from monolithic to modular architectures, leveraging C# and .NET technologies to improve scalability'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">04.</span> The Dark Knight Chronicles
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-card">
            <div className="experience-header">
              <div className="experience-role">
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">
                  <FaBuilding className="company-icon" />
                  <span>{exp.company}</span>
                </div>
              </div>
              <div className="experience-meta">
                <div className="experience-location">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{exp.location}</span>
                </div>
                <div className="experience-period">
                  <FaCalendarAlt className="period-icon" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </div>

            <div className="experience-achievements">
              <ul className="achievements-list">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience