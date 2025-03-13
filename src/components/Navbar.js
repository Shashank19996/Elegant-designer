import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/">Elegant Designer</Link>
        </motion.div>
        
        <div className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <motion.ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <motion.li variants={linkVariants}>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          </motion.li>
          <motion.li variants={linkVariants}>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </motion.li>
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
