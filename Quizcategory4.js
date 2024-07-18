
import React, { useEffect } from 'react';
import './quizcategory.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import c from './C.gif';
import c1 from './C++.gif';
import java from './java.gif';
import python from './python.gif';
import r from './R.gif';
import bash from './bash.png';
import perl from './perl.webp';
import php from './ele-running.gif';
import go from './go.jpeg';
import ruby from './ruby.gif';
import dart from './dart.png';


import ai from './ai.jpg';
import medi from './medi.jpg';
import robo from './robo.jpg';
import bio from './bio.webp';
import iot from './iot.png';
const Quizcategory4 = () => {
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
        <Link to="/topic/string" state={{ topic: 'AI Technology', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={ai} alt="HTML Quiz" />
            <h2 style={{color: 'black'}}>Artificial intelligence</h2>
          </div>
        </Link>
        <Link to="/topic/linkedlist" state={{ topic: 'Health Technology', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={medi} alt="CSS Quiz" />
            <h2 style={{color: 'black'}}>Health technology</h2>
          </div>
        </Link>
        <Link to="/topic/array" state={{ topic: 'Robotics', emailid }} style={{ textDecoration: 'none' }}>
        <div className="quiz-card">
          <img src={robo} alt="CSS Quiz" />
          <h2 style={{color: 'black'}}>Robotics</h2>
        </div>
      </Link>
        <Link to="/topic/stack" state={{ topic: 'Biotechnology', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={bio} alt="JavaScript Quiz" />
            <h2 style={{color: 'black'}}>Biotechnology</h2>
          </div>
        </Link>
        <Link to="/topic/queue" state={{ topic: 'Internet Of Things', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={iot} alt="React Quiz" />
            <h2 style={{color: 'black'}}>Internet of things </h2>
          </div>
        </Link>
        <Link to="/topic/tree" state={{ topic: 'Aerospace Technology', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={r} alt="Node.js Quiz" />
            <h2 style={{color: 'black'}}>Aerospace Technology</h2>
          </div>
        </Link>
        <Link to="/topic/graph" state={{ topic: 'Manufacturing Technology', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={php} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Manufacturing Technology</h2>
          </div>
        </Link>
        <Link to="/topic/searchingal" state={{ topic: 'Communication Technology', emailid }} style={{ textDecoration: 'none' , color: 'black'}}>
          <div className="quiz-card">
            <img src={go} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Communication Technology</h2>
          </div>
        </Link>
       
      </div>
    </div>
  );
}

export default Quizcategory4;
