import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker,
  FaDatabase,
  FaCode,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSpring,
  SiApachekafka,
  SiKubernetes,
  SiJenkins,
  SiTerraform,
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skills = [
    { name: 'Java', icon: <FaJava />, color: '#ED8B00' },
    { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'C#', icon: <FaCode />, color: '#239120' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Spring Boot', icon: <SiSpring />, color: '#6DB33F' },
    { name: 'Hibernate', icon: <SiSpring />, color: '#59666C' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'Angular', icon: <FaReact />, color: '#DD0031' },
    { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
    { name: 'Apache Kafka', icon: <SiApachekafka />, color: '#000000' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Azure', icon: <FaAws />, color: '#0078D4' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#623CE4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'MySQL', icon: <SiPostgresql />, color: '#4479A1' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'SQL Server', icon: <FaDatabase />, color: '#CC2927' },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">
          Arsenal & Gadgets
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="skills-container">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon-wrapper">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
              </div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

