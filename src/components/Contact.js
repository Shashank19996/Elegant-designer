import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: ''
  });

  const { name, email, phone, message } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to our backend
      const response = await fetch('http://localhost:9000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      setSubmitStatus({
        success: data.success,
        message: data.message || 'Your message has been sent successfully!'
      });
      
      if (data.success) {
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }
      
      setIsSubmitting(false);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again.'
      });
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' }
    }
  };

  const childVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="contact-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 variants={childVariants}>Contact Us</motion.h1>
          <motion.p variants={childVariants}>
            Get in touch with our team to bring your design vision to life.
          </motion.p>
        </div>
      </div>

      <div className="contact-container container">
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            variants={childVariants}
          >
            <h2>Get In Touch</h2>
            <p>We'd love to hear from you. Whether you have a question about our services, pricing, or just want to chat about your project, we're here to help.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h3>Visit Us</h3>
                  <p>123 Design Street, Creative District<br />New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>
                  <h3>Email Us</h3>
                  <p>info@elegantdesigner.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <span className="contact-icon">🕒</span>
                <div>
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm<br />Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            variants={childVariants}
          >
            <h2>Send a Message</h2>
            
            {submitStatus.message && (
              <div className={`form-alert ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2>Find Us</h2>
          <div className="map">
            {/* In a real implementation, this would be a Google Maps embed */}
            <img 
              src="https://i.imgur.com/l8XgH0F.png" 
              alt="Map location" 
              className="map-placeholder" 
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
