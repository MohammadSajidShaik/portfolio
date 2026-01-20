import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    setStatus('success')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(''), 3000)
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'sajid9md@gmail.com',
      link: 'mailto:sajid9md@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+1 (660) 528-5231',
      link: 'tel:+16605285231',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'SF Bay Area, California',
      link: null,
    },
  ]

  return (
    <section id="contact" className="contact">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-number">04.</span> Get In Touch
        </h2>
        <div className="title-line"></div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-intro">
            I'm always open to discussing new projects, innovative solutions in healthcare
            and insurance technology, or opportunities to leverage my expertise in Java,
            Spring Boot, and cloud technologies. Feel free to reach out!
          </p>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-item">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-text">
                  <h4 className="contact-item-title">{info.title}</h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="contact-item-content"
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="contact-item-content">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="form-input form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            Send Message
          </button>

          {status === 'success' && (
            <p className="form-status success">
              Thank you! Your message has been sent successfully.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact

