
import React, { useEffect } from 'react';
import './quizcategory.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import html from './html-5.gif';
import css from './css3.gif';
import js from './javascript.gif';
import node from './mongo.gif';
import react from './logo512.png';
import php from './ele-running.gif';
import redux from './redux1.jpg';
import PHP from './php2.jpg';
import nodeJS from './nodeJS.gif';

const Quizcategory = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { emailid } = location.state || {};

  useEffect(() => {
    if (!emailid) {
      navigate('/login');
    }
  }, [emailid, navigate]);

  // If emailid is not available, don't render the component
  if (!emailid) {
    return null; // or return a loading indicator or message
  }

  return (
    <div className="quiz-category-container">
      <h1 style={{ fontSize: '2.5em', color: 'black', margin: 0, fontFamily: 'Lobster, cursive' }}>Quiz Category</h1>
      <div className="quiz-category">
        <Link to="/topic/html" state={{ topic: 'html', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={html} alt="HTML Quiz" />
            <h2 style={{color: 'black'}}>HTML</h2>
          </div>
        </Link>
        <Link to="/topic/css" state={{ topic: 'css', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={css} alt="CSS Quiz" />
            <h2 style={{color: 'black'}}>CSS</h2>
          </div>
        </Link>
        <Link to="/topic/js" state={{ topic: 'javascript', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={js} alt="JavaScript Quiz" />
            <h2 style={{color: 'black'}}>JavaScript</h2>
          </div>
        </Link>
        <Link to="/topic/react" state={{ topic: 'react', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={react} alt="React Quiz" />
            <h2 style={{color: 'black'}}>ReactJS</h2>
          </div>
        </Link>
        <Link to="/topic/node" state={{ topic: 'mongodb', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={node} alt="Node.js Quiz" />
            <h2 style={{color: 'black'}}>MongoDB</h2>
          </div>
        </Link>
        <Link to="/topic/redux" state={{ topic: 'redux', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={redux} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Redux</h2>
          </div>
        </Link>
        <Link to="/topic/php" state={{ topic: 'php', emailid }} style={{ textDecoration: 'none' , color: 'black'}}>
          <div className="quiz-card">
            <img src={PHP} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Php</h2>
          </div>
        </Link>
        <Link to="/topic/nodejs" state={{ topic: 'nodejs', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={nodeJS} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>NodeJS</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Quizcategory;
