import React from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
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

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const serviceVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const services = [
    {
      id: 1,
      title: "Residential Design",
      description: "We create personalized living spaces that reflect your unique style and meet functional needs. Our residential design services include space planning, furniture selection, color consultation, and custom solutions for every room.",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 2,
      title: "Commercial Design",
      description: "Our commercial design services create productive, inspiring workspaces that align with your brand identity. We focus on efficient space utilization, employee comfort, and creating impressive environments for clients and visitors.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 3,
      title: "3D Visualization",
      description: "See your design come to life before implementation with our 3D visualization services. These photorealistic renderings help you visualize your space and make confident design decisions before any construction begins.",
      image: "https://images.unsplash.com/photo-1545043540-9321c7c25d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 4,
      title: "Space Planning",
      description: "Optimize your space for functionality and flow with our space planning expertise. We analyze traffic patterns, user requirements, and architectural constraints to create layouts that maximize square footage and enhance comfort.",
      image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 5,
      title: "Furniture Selection",
      description: "Find the perfect furniture pieces to complement your space. Our designers curate options that blend aesthetics with comfort and durability, considering your style preferences, space constraints, and budget requirements.",
      image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    },
    {
      id: 6,
      title: "Project Management",
      description: "Let us handle the coordination of your entire design project. Our project management services ensure that timelines are met, budgets are maintained, and all elements of your design vision are executed to perfection.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80"
    }
  ];

  return (
    <motion.div 
      className="services-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 variants={titleVariants}>Our Services</motion.h1>
          <motion.p variants={titleVariants}>
            Comprehensive interior design solutions tailored to your needs.
          </motion.p>
        </div>
      </div>

      <div className="services-container container">
        <div className="services-grid">
          {services.map((service) => (
            <motion.div 
              className="service-item"
              key={service.id}
              variants={serviceVariants}
              whileHover="hover"
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div 
        className="process-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <h2>Our Design Process</h2>
          
          <div className="process-steps">
            <motion.div 
              className="process-step"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>We begin with a thorough discussion of your vision, needs, and budget constraints.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="step-number">2</div>
              <h3>Concept Development</h3>
              <p>We create preliminary designs and mood boards to visualize the direction of your project.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="step-number">3</div>
              <h3>Design Development</h3>
              <p>Detailed plans are created, including 3D renderings, material selections, and specifications.</p>
            </motion.div>
            
            <motion.div 
              className="process-step"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="step-number">4</div>
              <h3>Implementation</h3>
              <p>We coordinate with contractors and suppliers to bring your design to life.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
