const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Create new contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      message
    });

    // Send email notification
    // Note: In production, you would use real SMTP credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'elegantdesigner990@gmail.com',
        pass: process.env.EMAIL_PASSWORD // Password should be stored in environment variables
      }
    });

    // Email content
    const mailOptions = {
      from: 'elegantdesigner990@gmail.com',
      to: 'elegantdesigner990@gmail.com',
      subject: 'New Contact Form Submission - Elegant Designer',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      data: contact,
      message: 'Your message has been sent successfully!'
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again.'
    });
  }
};
