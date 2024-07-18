
import React, { useEffect } from 'react';
import './quizcategory.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import c from './C.gif';
import c1 from './C++.gif';
import java from './java.gif';
import python from './python.gif';
import r from './R.gif';
import bash from './bash1.png';
import perl from './perl.webp';
import php from './ele-running.gif';
import go from './go.jpeg';
import ruby from './ruby.gif';
import dart from './dart.png';
import scala from './scala.avif';



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
        <Link to="/topic/string" state={{ topic: 'C Programming', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={c} alt="HTML Quiz" />
            <h2 style={{color: 'black'}}>C</h2>
          </div>
        </Link>
        <Link to="/topic/linkedlist" state={{ topic: 'Java Programming', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={java} alt="CSS Quiz" />
            <h2 style={{color: 'black'}}>Java</h2>
          </div>
        </Link>
        <Link to="/topic/array" state={{ topic: 'C++ Programming', emailid }} style={{ textDecoration: 'none' }}>
        <div className="quiz-card">
          <img src={c1} alt="CSS Quiz" />
          <h2 style={{color: 'black'}}>C++</h2>
        </div>
      </Link>
        <Link to="/topic/stack" state={{ topic: 'Python Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={python} alt="JavaScript Quiz" />
            <h2 style={{color: 'black'}}>Python</h2>
          </div>
        </Link>
        <Link to="/topic/queue" state={{ topic: 'R Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={r} alt="React Quiz" />
            <h2 style={{color: 'black'}}>R</h2>
          </div>
        </Link>
        <Link to="/topic/tree" state={{ topic: 'Tree', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={scala} alt="Node.js Quiz" />
            <h2 style={{color: 'black'}}>Scala</h2>
          </div>
        </Link>
        <Link to="/topic/graph" state={{ topic: 'PHP Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={php} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>PHP</h2>
          </div>
        </Link>
        <Link to="/topic/searchingal" state={{ topic: 'Go Programming', emailid }} style={{ textDecoration: 'none' , color: 'black'}}>
          <div className="quiz-card">
            <img src={go} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Go</h2>
          </div>
        </Link>
        <Link to="/topic/greedyal" state={{ topic: 'Ruby Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={ruby} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Ruby</h2>
          </div>
        </Link>
        <Link to="/topic/sortingal" state={{ topic: 'Perl Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={perl} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Perl</h2>
          </div>
        </Link>
        <Link to="/topic/dynamicpro" state={{ topic: 'Bash Scripting', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={bash} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Bash</h2>
          </div>
        </Link>
        <Link to="/topic/dynamicpro" state={{ topic: 'Dart Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={dart} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Dart</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Quizcategory;
