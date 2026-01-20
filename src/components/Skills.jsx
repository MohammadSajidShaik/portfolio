import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaAws,
  FaDocker,
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
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', icon: <FaJava />, level: 95 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'Python', icon: <FaPython />, level: 85 },
        { name: 'C#', icon: <SiJavascript />, level: 80 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Spring Boot', icon: <SiSpring />, level: 95 },
        { name: 'Hibernate', icon: <SiSpring />, level: 90 },
        { name: 'React.js', icon: <FaReact />, level: 85 },
        { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
        { name: 'Angular', icon: <FaReact />, level: 80 },
        { name: 'Express.js', icon: <SiExpress />, level: 80 },
        { name: 'Apache Kafka', icon: <SiApachekafka />, level: 85 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 90 },
        { name: 'Azure', icon: <FaAws />, level: 85 },
        { name: 'Kubernetes', icon: <SiKubernetes />, level: 85 },
        { name: 'Docker', icon: <FaDocker />, level: 85 },
        { name: 'Jenkins', icon: <FaDocker />, level: 80 },
        { name: 'Terraform', icon: <FaDocker />, level: 75 },
        { name: 'Git', icon: <FaGitAlt />, level: 90 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 90 },
        { name: 'MySQL', icon: <SiPostgresql />, level: 85 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
        { name: 'SQL Server', icon: <SiPostgresql />, level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">03.</span> Skills & Technologies
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-header">
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

