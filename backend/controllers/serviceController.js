const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};

// @desc    Get service by ID
// @route   GET /api/services/:id
// @access  Public
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }

    res.status(200).json({
      success: true,
      data: service
    });
  } catch (error) {
    console.error('Get service by ID error:', error);
    
    // Check if error is a cast error (invalid ID)
    if (error.name === 'CastError') {
      return res.status(404).json({
        success: false,
        message: 'Service not found'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};

// @desc    Get featured services
// @route   GET /api/services/featured
// @access  Public
exports.getFeaturedServices = async (req, res) => {
  try {
    const services = await Service.find({ featured: true }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: services.length,
      data: services
    });
  } catch (error) {
    console.error('Get featured services error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};
