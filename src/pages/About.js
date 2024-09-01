import React from 'react';
import './About.css'; // We'll create this CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Project</h1>
      <div className="about-content">
        <p>
          This project aims to develop an AI-based personal tutor to help kids with their homework. The AI tutor will leverage advanced machine learning algorithms to provide personalized assistance, making learning more engaging and effective. The project is planned to last 12 months, with a total budget of $500,000. Key milestones include project initialization, design, development, testing, deployment, training, and project closure.
        </p>
        <p>
          Our team consists of experienced professionals in AI, software development, education, and project management. We are committed to delivering a high-quality product that meets the needs of students and educators alike.
        </p>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Company: AI Education Solutions</p>
        <p>Location: Sydney, Australia</p>
        <p>Contact Number: 0466 799 234</p>
      </div>
    </div>
  );
};

export default About;
