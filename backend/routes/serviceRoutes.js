const express = require('express');
const router = express.Router();
const {
  getServices,
  getServiceById,
  getFeaturedServices
} = require('../controllers/serviceController');

// @route   GET /api/services
// @desc    Get all services
// @access  Public
router.get('/', getServices);

// @route   GET /api/services/featured
// @desc    Get featured services
// @access  Public
router.get('/featured', getFeaturedServices);

// @route   GET /api/services/:id
// @desc    Get service by ID
// @access  Public
router.get('/:id', getServiceById);

module.exports = router;
