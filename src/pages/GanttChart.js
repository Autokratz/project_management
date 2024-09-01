import React from 'react';
import './GanttChart.css'; // We'll create this CSS file for styling

const GanttChart = () => {
  return (
    <div className="gantt-container">
      <h1>Gantt Chart</h1>
      <div className="gantt-image-container">
        <img src={`${process.env.PUBLIC_URL}/gantt_chart_ai.png`} alt="Gantt Chart" className="gantt-image" />
      </div>
      <p className="gantt-description">
        This Gantt chart provides a visual representation of the project schedule, showing the start and finish dates of the various tasks and milestones.
      </p>
    </div>
  );
};

export default GanttChart;
