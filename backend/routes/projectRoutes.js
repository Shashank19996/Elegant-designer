const express = require('express');
const router = express.Router();
const {
  getProjects,
  getProjectById,
  getProjectsByCategory,
  getFeaturedProjects
} = require('../controllers/projectController');

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', getProjects);

// @route   GET /api/projects/featured
// @desc    Get featured projects
// @access  Public
router.get('/featured', getFeaturedProjects);

// @route   GET /api/projects/category/:category
// @desc    Get projects by category
// @access  Public
router.get('/category/:category', getProjectsByCategory);

// @route   GET /api/projects/:id
// @desc    Get project by ID
// @access  Public
router.get('/:id', getProjectById);

module.exports = router;
