import React from 'react';
import './Resources.css'; // We'll create this CSS file for styling

const Resources = () => {
  return (
    <div className="resources-container">
      <h1>Project Resources</h1>
      <div className="resources-section">
        <h2>Project Initialization</h2>
        <ul>
          <li>Project Manager</li>
          <li>Stakeholders</li>
          <li>Business Analyst</li>
          <li>Product Manager</li>
          <li>Education Experts</li>
        </ul>
        <p>Budget: $22,000</p>
      </div>

      <div className="resources-section">
        <h2>Design Phase</h2>
        <ul>
          <li>Solution Architect</li>
          <li>AI Specialist</li>
          <li>Data Scientist</li>
          <li>UI/UX Designer</li>
          <li>Database Administrator</li>
          <li>Educational Experts</li>
        </ul>
        <p>Budget: $67,000</p>
      </div>

      <div className="resources-section">
        <h2>Development Phase</h2>
        <ul>
          <li>AI Specialist</li>
          <li>Data Scientist</li>
          <li>Backend Developers</li>
          <li>Frontend Developers</li>
          <li>Database Administrator</li>
          <li>UI/UX Designer</li>
        </ul>
        <p>Budget: $205,000</p>
      </div>

      <div className="resources-section">
        <h2>Testing Phase</h2>
        <ul>
          <li>QA Engineers</li>
          <li>Developers</li>
          <li>Selected Users</li>
        </ul>
        <p>Budget: $45,000</p>
      </div>

      <div className="resources-section">
        <h2>Deployment Phase</h2>
        <ul>
          <li>DevOps Engineers</li>
          <li>System Administrators</li>
          <li>Support Team</li>
        </ul>
        <p>Budget: $30,000</p>
      </div>

      <div className="resources-section">
        <h2>Training & Documentation</h2>
        <ul>
          <li>Trainers</li>
          <li>Educational Experts</li>
          <li>Technical Writers</li>
          <li>Developers</li>
        </ul>
        <p>Budget: $25,000</p>
      </div>

      <div className="resources-section">
        <h2>Project Closure</h2>
        <ul>
          <li>Project Manager</li>
          <li>Stakeholders</li>
          <li>Business Analyst</li>
        </ul>
        <p>Budget: $15,000</p>
      </div>
    </div>
  );
};

export default Resources;
