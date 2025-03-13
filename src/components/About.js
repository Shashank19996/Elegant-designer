import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
      className="about-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 variants={childVariants}>About Us</motion.h1>
          <motion.p variants={childVariants}>
            Learn more about our company and our passion for interior design.
          </motion.p>
        </div>
      </div>

      <div className="about-container container">
        <motion.div 
          className="about-section"
          variants={childVariants}
        >
          <div className="about-content">
            <h2>Our Story</h2>
            <p>Elegant Designer was founded in 2010 with a simple mission: to transform spaces into beautiful, functional environments that enhance the lives of our clients. What began as a small design studio has grown into a full-service interior design firm with a reputation for excellence.</p>
            <p>Our team of skilled designers brings together diverse backgrounds, perspectives, and expertise to create unique designs tailored to each client's specific needs and preferences.</p>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" alt="Our studio" />
          </div>
        </motion.div>

        <motion.div 
          className="values-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our Values</h2>
          <div className="values-grid">
            <motion.div 
              className="value-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h3>Client-Focused Approach</h3>
              <p>We listen carefully to our clients' needs and preferences, ensuring that the final design reflects their personality and lifestyle.</p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3>Creativity & Innovation</h3>
              <p>We push the boundaries of design, constantly seeking new solutions and fresh perspectives to create unique spaces.</p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h3>Quality & Attention to Detail</h3>
              <p>From the initial concept to the final installation, we pay meticulous attention to every detail, ensuring exceptional quality throughout.</p>
            </motion.div>
            
            <motion.div 
              className="value-item"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <h3>Sustainability</h3>
              <p>We are committed to incorporating sustainable practices and materials into our designs whenever possible.</p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="team-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our Team</h2>
          <div className="team-grid">
            <motion.div 
              className="team-member"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-title">Founder & Principal Designer</p>
              <p>With over 20 years of experience, Sarah leads the team with her vision and expertise in luxury interiors.</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" alt="David Chen" />
              </div>
              <h3>David Chen</h3>
              <p className="member-title">Commercial Design Director</p>
              <p>David specializes in creating innovative commercial spaces that balance aesthetics and functionality.</p>
            </motion.div>
            
            <motion.div 
              className="team-member"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80" alt="Emily Rodriguez" />
              </div>
              <h3>Emily Rodriguez</h3>
              <p className="member-title">Interior Stylist</p>
              <p>Emily has an eye for details and excels at adding the finishing touches that make spaces truly special.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
