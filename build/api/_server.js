const express = require('express');
const cors = require('cors');
const app = express();

// Mock data
const mockProjects = [
  {
    _id: "1",
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
    ],
    featured: true
  },
  {
    _id: "2",
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
    ],
    featured: true
  }
];

const mockServices = [
  {
    _id: "1",
    title: "Residential Design",
    description: "We create personalized living spaces that reflect your unique style and meet functional needs. Our residential design services include space planning, furniture selection, color consultation, and custom solutions for every room.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: true
  },
  {
    _id: "2",
    title: "Commercial Design",
    description: "Our commercial design services create productive, inspiring workspaces that align with your brand identity. We focus on efficient space utilization, employee comfort, and creating impressive environments for clients and visitors.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: true
  }
];

app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.get('/api/projects', (req, res) => {
  res.json({
    success: true,
    count: mockProjects.length,
    data: mockProjects
  });
});

app.get('/api/projects/featured', (req, res) => {
  const featured = mockProjects.filter(project => project.featured);
  res.json({
    success: true,
    count: featured.length,
    data: featured
  });
});

app.get('/api/projects/:id', (req, res) => {
  const project = mockProjects.find(p => p._id === req.params.id);
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  res.json({
    success: true,
    data: project
  });
});

app.get('/api/services', (req, res) => {
  res.json({
    success: true,
    count: mockServices.length,
    data: mockServices
  });
});

app.get('/api/services/featured', (req, res) => {
  const featured = mockServices.filter(service => service.featured);
  res.json({
    success: true,
    count: featured.length,
    data: featured
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Just validate minimally and return success
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide name, email and message'
    });
  }
  
  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully!'
  });
});

module.exports = app;
