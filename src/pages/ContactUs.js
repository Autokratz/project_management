import React from 'react';
import './ContactUs.css'; // Ensure you have the CSS file for styling

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please fill out our contact form:</p>
      <div className="google-form-link">
        <a href="https://forms.gle/your-google-form-link" target="_blank" rel="noopener noreferrer">
          Contact Form
        </a>
      </div>
      <div className="google-form-link">
        <a href="https://docs.google.com/spreadsheets/d/1VolKKqfGVRTFGNngNlj3mrCnAK06fJa6bsOpZq8bzRc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
          Review Forms
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
