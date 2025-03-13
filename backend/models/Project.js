const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a project title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  category: {
    type: String,
    required: [true, 'Please provide a project category'],
    enum: ['residential', 'commercial', 'hospitality']
  },
  description: {
    type: String,
    required: [true, 'Please provide a project description'],
    trim: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters']
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  details: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
