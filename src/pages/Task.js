import React from 'react';
import './Task.css'; // We'll create this CSS file for styling

const Task = () => {
  return (
    <div className="task-container">
      <h1>Project Breakdown</h1>
      <div className="task-chart">
        <div className="task-section">
          <h2>1. Project Initialization (Month 1)</h2>
          <div className="task-item">
            <h3>Task 1.1: Project Kickoff Meeting</h3>
            <p>Duration: 1 week</p>
            <p>Resources: Project Manager, Stakeholders</p>
            <p>Budget: $5,000</p>
          </div>
          <div className="task-item">
            <h3>Task 1.2: Requirements Gathering & Analysis</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: Business Analyst, Product Manager, Education Experts</p>
            <p>Budget: $10,000</p>
          </div>
          <div className="task-item">
            <h3>Task 1.3: Define Project Scope & Objectives</h3>
            <p>Duration: 1 week</p>
            <p>Resources: Project Manager, Business Analyst</p>
            <p>Budget: $7,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>2. Design Phase (Months 2-3)</h2>
          <div className="task-item">
            <h3>Task 2.1: System Architecture Design</h3>
            <p>Duration: 3 weeks</p>
            <p>Resources: Solution Architect, AI Specialist</p>
            <p>Budget: $15,000</p>
          </div>
          <div className="task-item">
            <h3>Task 2.2: AI Model Design</h3>
            <p>Duration: 4 weeks</p>
            <p>Resources: Data Scientist, AI Specialist, Educational Experts</p>
            <p>Budget: $30,000</p>
          </div>
          <div className="task-item">
            <h3>Task 2.3: User Interface Design</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: UI/UX Designer, Educational Experts</p>
            <p>Budget: $12,000</p>
          </div>
          <div className="task-item">
            <h3>Task 2.4: Database Design</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: Database Administrator, Data Scientist</p>
            <p>Budget: $10,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>3. Development Phase (Months 4-7)</h2>
          <div className="task-item">
            <h3>Task 3.1: AI Model Development</h3>
            <p>Duration: 8 weeks</p>
            <p>Resources: AI Specialist, Data Scientist</p>
            <p>Budget: $80,000</p>
          </div>
          <div className="task-item">
            <h3>Task 3.2: Backend Development</h3>
            <p>Duration: 6 weeks</p>
            <p>Resources: Backend Developers, Database Administrator</p>
            <p>Budget: $50,000</p>
          </div>
          <div className="task-item">
            <h3>Task 3.3: Frontend Development</h3>
            <p>Duration: 6 weeks</p>
            <p>Resources: Frontend Developers, UI/UX Designer</p>
            <p>Budget: $40,000</p>
          </div>
          <div className="task-item">
            <h3>Task 3.4: Integration of AI Model with Backend</h3>
            <p>Duration: 4 weeks</p>
            <p>Resources: AI Specialist, Backend Developers</p>
            <p>Budget: $20,000</p>
          </div>
          <div className="task-item">
            <h3>Task 3.5: Database Implementation</h3>
            <p>Duration: 3 weeks</p>
            <p>Resources: Database Administrator, Backend Developers</p>
            <p>Budget: $15,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>4. Testing Phase (Months 8-9)</h2>
          <div className="task-item">
            <h3>Task 4.1: Unit Testing</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: QA Engineers, Developers</p>
            <p>Budget: $15,000</p>
          </div>
          <div className="task-item">
            <h3>Task 4.2: System Testing</h3>
            <p>Duration: 3 weeks</p>
            <p>Resources: QA Engineers, Developers</p>
            <p>Budget: $20,000</p>
          </div>
          <div className="task-item">
            <h3>Task 4.3: User Acceptance Testing</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: QA Engineers, Selected Users</p>
            <p>Budget: $10,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>5. Deployment Phase (Month 10)</h2>
          <div className="task-item">
            <h3>Task 5.1: Setup Production Environment</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: DevOps Engineers, System Administrators</p>
            <p>Budget: $15,000</p>
          </div>
          <div className="task-item">
            <h3>Task 5.2: Deploy AI Tutor to Production</h3>
            <p>Duration: 1 week</p>
            <p>Resources: DevOps Engineers, AI Specialist</p>
            <p>Budget: $10,000</p>
          </div>
          <div className="task-item">
            <h3>Task 5.3: Post-Deployment Monitoring</h3>
            <p>Duration: 1 week</p>
            <p>Resources: DevOps Engineers, Support Team</p>
            <p>Budget: $5,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>6. Training & Documentation (Month 11)</h2>
          <div className="task-item">
            <h3>Task 6.1: User Training</h3>
            <p>Duration: 3 weeks</p>
            <p>Resources: Trainers, Educational Experts</p>
            <p>Budget: $15,000</p>
          </div>
          <div className="task-item">
            <h3>Task 6.2: Documentation Preparation</h3>
            <p>Duration: 2 weeks</p>
            <p>Resources: Technical Writers, Developers</p>
            <p>Budget: $10,000</p>
          </div>
        </div>

        <div className="task-section">
          <h2>7. Project Closure (Month 12)</h2>
          <div className="task-item">
            <h3>Task 7.1: Final Project Review</h3>
            <p>Duration: 1 week</p>
            <p>Resources: Project Manager, Stakeholders</p>
            <p>Budget: $5,000</p>
          </div>
          <div className="task-item">
            <h3>Task 7.2: Lessons Learned & Documentation</h3>
            <p>Duration: 1 week</p>
            <p>Resources: Project Manager, Business Analyst</p>
            <p>Budget: $7,000</p>
          </div>
          <div className="task-item">
            <h3>Task 7.3: Project Closure Report</h3>
            <p>Duration: 1 week</p>
            <p>Resources: Project Manager</p>
            <p>Budget: $3,000</p>
          </div>
        </div>

        <div className="task-summary">
          <h2>Summary of Budget Allocation</h2>
          <p>Project Initialization: $22,000</p>
          <p>Design Phase: $67,000</p>
          <p>Development Phase: $205,000</p>
          <p>Testing Phase: $45,000</p>
          <p>Deployment Phase: $30,000</p>
          <p>Training & Documentation: $25,000</p>
          <p>Project Closure: $15,000</p>
          <p>Total Budget: $500,000</p>
        </div>
      </div>
    </div>
  );
};

export default Task;
