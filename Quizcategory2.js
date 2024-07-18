
import React, { useEffect } from 'react';
import './quizcategory.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import string from './string.webp';
import array from './array3.svg';
import ll from './linkedlist1.png'
import stack from './stack.jpeg';
import tree from './tree.jpeg'
import queue from './queue.webp'
import graph from './graph.png'
import node from './mongo.gif';
import react from './logo512.png';
import php from './ele-running.gif';
import redux from './redux1.jpg';
import PHP from './php2.jpg';
import nodeJS from './nodeJS.gif';
import greedy from './greedy.gif';
import sort from './sorting.png';
import dp from './dp.png';

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
        <Link to="/topic/string" state={{ topic: 'String', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={string} alt="HTML Quiz" />
            <h2 style={{color: 'black'}}>String</h2>
          </div>
        </Link>
        <Link to="/topic/linkedlist" state={{ topic: 'Linked List', emailid }} style={{ textDecoration: 'none' }}>
          <div className="quiz-card">
            <img src={ll} alt="CSS Quiz" />
            <h2 style={{color: 'black'}}>Linked List</h2>
          </div>
        </Link>
        <Link to="/topic/array" state={{ topic: 'Array', emailid }} style={{ textDecoration: 'none' }}>
        <div className="quiz-card">
          <img src={array} alt="CSS Quiz" />
          <h2 style={{color: 'black'}}>Array</h2>
        </div>
      </Link>
        <Link to="/topic/stack" state={{ topic: 'Stack', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={stack} alt="JavaScript Quiz" />
            <h2 style={{color: 'black'}}>Stack</h2>
          </div>
        </Link>
        <Link to="/topic/queue" state={{ topic: 'Queue', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={queue} alt="React Quiz" />
            <h2 style={{color: 'black'}}>Queue</h2>
          </div>
        </Link>
        <Link to="/topic/tree" state={{ topic: 'Tree', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={tree} alt="Node.js Quiz" />
            <h2 style={{color: 'black'}}>Tree</h2>
          </div>
        </Link>
        <Link to="/topic/graph" state={{ topic: 'Graph', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={graph} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Graph</h2>
          </div>
        </Link>
        <Link to="/topic/searchingal" state={{ topic: 'Tree', emailid }} style={{ textDecoration: 'none' , color: 'black'}}>
          <div className="quiz-card">
            <img src={PHP} alt="redux Quiz" />
            <h2 style={{color: 'black'}} className='php'>Searching Algorithm</h2>
          </div>
        </Link>
        <Link to="/topic/greedyal" state={{ topic: 'Greedy Algorithm', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={greedy} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Greedy Algorithm</h2>
          </div>
        </Link>
        <Link to="/topic/sortingal" state={{ topic: 'Sorting Algorithm', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={sort} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Sorting Algorithm</h2>
          </div>
        </Link>
        <Link to="/topic/dynamicpro" state={{ topic: 'Dynamic Programming', emailid }} style={{ textDecoration: 'none', color: 'black' }}>
          <div className="quiz-card">
            <img src={dp} alt="NodeJS Quiz" />
            <h2 style={{color: 'black'}} className='php'>Dynamic Programming</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Quizcategory;
