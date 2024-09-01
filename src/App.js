import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import GanttChart from './pages/GanttChart';
import Task from './pages/Task';
import Resources from './pages/Resources';
import About from './pages/About';
import ContactUs from './pages/ContactUs'; // Import the new Contact Us page
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/gantt-chart" />} />
          <Route path="/gantt-chart" element={<GanttChart />} />
          <Route path="/tasks" element={<Task />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
