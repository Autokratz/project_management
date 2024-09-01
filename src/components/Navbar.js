import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/gantt-chart">Gantt Chart</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact Us</Link></li> {/* Add the new link */}
      </ul>
    </nav>
  );
};

export default Navbar;
