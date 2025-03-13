const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load models
const Project = require('./models/Project');
const Service = require('./models/Service');

// Load env vars
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/elegant-designer');

// Sample project data
const projects = [
  {
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
  },
  {
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
    ],
    featured: false
  },
  {
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
    ],
    featured: false
  },
  {
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
    ],
    featured: true
  },
  {
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
    ],
    featured: false
  }
];

// Sample service data
const services = [
  {
    title: "Residential Design",
    description: "We create personalized living spaces that reflect your unique style and meet functional needs. Our residential design services include space planning, furniture selection, color consultation, and custom solutions for every room.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: true
  },
  {
    title: "Commercial Design",
    description: "Our commercial design services create productive, inspiring workspaces that align with your brand identity. We focus on efficient space utilization, employee comfort, and creating impressive environments for clients and visitors.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: true
  },
  {
    title: "3D Visualization",
    description: "See your design come to life before implementation with our 3D visualization services. These photorealistic renderings help you visualize your space and make confident design decisions before any construction begins.",
    image: "https://images.unsplash.com/photo-1545043540-9321c7c25d8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: false
  },
  {
    title: "Space Planning",
    description: "Optimize your space for functionality and flow with our space planning expertise. We analyze traffic patterns, user requirements, and architectural constraints to create layouts that maximize square footage and enhance comfort.",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: false
  },
  {
    title: "Furniture Selection",
    description: "Find the perfect furniture pieces to complement your space. Our designers curate options that blend aesthetics with comfort and durability, considering your style preferences, space constraints, and budget requirements.",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: true
  },
  {
    title: "Project Management",
    description: "Let us handle the coordination of your entire design project. Our project management services ensure that timelines are met, budgets are maintained, and all elements of your design vision are executed to perfection.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1800&q=80",
    featured: false
  }
];

// Import data into DB
const importData = async () => {
  try {
    // Clear existing data
    await Project.deleteMany();
    await Service.deleteMany();

    // Import sample data
    await Project.insertMany(projects);
    await Service.insertMany(services);

    console.log('Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

// Delete all data from DB
const deleteData = async () => {
  try {
    await Project.deleteMany();
    await Service.deleteMany();

    console.log('Data deleted successfully');
    process.exit();
  } catch (error) {
    console.error('Error deleting data:', error);
    process.exit(1);
  }
};

// Determine which operation to run based on command line args
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
} else {
  console.log('Please use -i to import data or -d to delete data');
  process.exit();
}
