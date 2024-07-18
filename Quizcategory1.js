import React from 'react';
import './quizcategory1.css'; // Importing CSS file for styling
import { Link, useLocation } from 'react-router-dom';

const Quizcategory1 = () => {
  const location = useLocation();
  const { emailid } = location.state || {}; // Access emailid from location state

  return (
    <div className="quiz-container">
    <h1>Topics</h1>
    <div className='qq'>
      <div className="category-container">
        <Link to="/category" className="category-link" state={{ emailid }}>
          <h2>Mern Stack</h2>
        </Link>
      </div>
      <div className="category-container">
      <Link to="/category2" className="category-link" state={{ emailid }}>
        <h2>DSA</h2>
        {/* Add content related to DSA */}</Link>
      </div>
      <div className="category-container">
      <Link to="/category3" className="category-link" state={{ emailid }}>
        <h2>Programming Languages</h2>
        {/* Add content related to Programming Languages */}</Link>
      </div>
      <div className="category-container">
      <Link to="/category4" className="category-link" state={{ emailid }}>
        <h2>Technologies</h2>
        {/* Add content related to Technologies */}</Link>
      </div>
      </div>
    </div>
  );
};

export default Quizcategory1;
