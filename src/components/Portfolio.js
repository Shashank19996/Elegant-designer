import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Renovation",
      category: "residential",
      description: "Complete interior transformation of a 4,500 sq ft Mediterranean villa with custom furnishings and unique art pieces.",
      image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: Private Homeowner",
        "Location: Malibu, CA",
        "Size: 4,500 sq ft",
        "Duration: 8 months",
        "Scope: Full interior design, custom furniture, lighting design, art curation"
      ]
    },
    {
      id: 2,
      title: "Modern Office Space",
      category: "commercial",
      description: "A minimalist approach for a tech startup's headquarters with flexible workspaces and collaborative zones.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: TechNova Inc.",
        "Location: San Francisco, CA",
        "Size: 12,000 sq ft",
        "Duration: 5 months",
        "Scope: Space planning, furniture selection, acoustic solutions, branding integration"
      ]
    },
    {
      id: 3,
      title: "Boutique Hotel Lobby",
      category: "hospitality",
      description: "Elegant redesign of a boutique hotel lobby featuring local artisans and sustainable materials.",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: The Meridian Hotel",
        "Location: Charleston, SC",
        "Size: 3,200 sq ft",
        "Duration: 4 months",
        "Scope: Concept design, material selection, custom millwork, lighting design"
      ]
    },
    {
      id: 4,
      title: "Urban Apartment Redesign",
      category: "residential",
      description: "Space-efficient redesign of a compact urban apartment with multi-functional furniture and smart storage solutions.",
      image: "https://images.unsplash.com/photo-1613252210020-b2f2ee859b6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: Private Homeowner",
        "Location: New York, NY",
        "Size: 850 sq ft",
        "Duration: 3 months",
        "Scope: Space planning, custom storage solutions, furniture selection, color consultation"
      ]
    },
    {
      id: 5,
      title: "Upscale Restaurant",
      category: "hospitality",
      description: "Sophisticated dining experience with custom lighting, bespoke furnishings, and an intimate atmosphere.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: Sapore Restaurant Group",
        "Location: Chicago, IL",
        "Size: 2,800 sq ft",
        "Duration: 6 months",
        "Scope: Concept development, custom furniture, lighting design, acoustic treatment"
      ]
    },
    {
      id: 6,
      title: "Corporate Headquarters",
      category: "commercial",
      description: "Modern, brand-aligned headquarters for a financial services company emphasizing professionalism and employee wellbeing.",
      image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
      details: [
        "Client: Global Financial Partners",
        "Location: Boston, MA",
        "Size: 25,000 sq ft",
        "Duration: 10 months",
        "Scope: Space planning, furniture procurement, environmental branding, wellness spaces"
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      transition: { ease: 'easeInOut' }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className="portfolio-page"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="page-header">
        <div className="container">
          <motion.h1 variants={itemVariants}>Our Portfolio</motion.h1>
          <motion.p variants={itemVariants}>
            Explore our diverse range of successful interior design projects.
          </motion.p>
        </div>
      </div>

      <div className="portfolio-container container">
        <motion.div 
          className="filter-buttons"
          variants={itemVariants}
        >
          <button 
            className={filter === 'all' ? 'active' : ''} 
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={filter === 'residential' ? 'active' : ''} 
            onClick={() => setFilter('residential')}
          >
            Residential
          </button>
          <button 
            className={filter === 'commercial' ? 'active' : ''} 
            onClick={() => setFilter('commercial')}
          >
            Commercial
          </button>
          <button 
            className={filter === 'hospitality' ? 'active' : ''} 
            onClick={() => setFilter('hospitality')}
          >
            Hospitality
          </button>
        </motion.div>

        <motion.div 
          className="projects-grid"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div 
                className="project-item"
                key={project.id}
                layoutId={`project-container-${project.id}`}
                variants={itemVariants}
                onClick={() => setSelectedId(project.id)}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.div 
                  className="project-image"
                  layoutId={`project-image-${project.id}`}
                >
                  <img src={project.image} alt={project.title} />
                </motion.div>
                <motion.div 
                  className="project-content"
                  layoutId={`project-content-${project.id}`}
                >
                  <h3>{project.title}</h3>
                  <p className="project-category">{project.category.toUpperCase()}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              className="project-modal"
              layoutId={`project-container-${selectedId}`}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button 
                className="close-button"
                onClick={() => setSelectedId(null)}
              >
                &times;
              </motion.button>
              
              {projects.filter(p => p.id === selectedId).map((project) => (
                <div className="project-detail" key={project.id}>
                  <motion.div 
                    className="project-detail-image"
                    layoutId={`project-image-${project.id}`}
                  >
                    <img src={project.image} alt={project.title} />
                  </motion.div>
                  
                  <motion.div 
                    className="project-detail-content"
                    layoutId={`project-content-${project.id}`}
                  >
                    <h2>{project.title}</h2>
                    <p className="project-category">{project.category.toUpperCase()}</p>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-specs">
                      <h4>Project Details:</h4>
                      <ul>
                        {project.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;
