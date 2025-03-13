import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    }
  };

  const serviceCardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="home-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            variants={childVariants}
          >
            Welcome to Elegant Designer
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            variants={childVariants}
          >
            Transforming spaces into works of art
          </motion.p>
          <motion.div variants={childVariants}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="featured-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2 className="section-title">Our Expertise</h2>
          <div className="services-grid">
            <motion.div 
              className="service-card"
              variants={serviceCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Residential Design</h3>
              <p>Create a home that reflects your personality and meets your lifestyle needs.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              variants={serviceCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>Commercial Spaces</h3>
              <p>Design workspaces that inspire productivity and impress clients.</p>
            </motion.div>
            
            <motion.div 
              className="service-card"
              variants={serviceCardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3>3D Visualization</h3>
              <p>See your space before construction begins with realistic 3D renderings.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="about-preview"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <div className="about-content">
            <motion.div 
              className="about-text"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h2>Why Choose Us</h2>
              <p>At Elegant Designer, we believe that beautiful spaces enhance life. Our dedicated team of interior designers brings creativity, expertise, and attention to detail to every project.</p>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="image-container"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h2>Ready to Transform Your Space?</h2>
          <p>Let's bring your vision to life with our expert interior design services.</p>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Home;
