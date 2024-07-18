import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Quiz from './Quiz';
import Homepage from './Homepage';
import Result from './Result';
import Quizcategory from './Quizcategory';
import Topicpage from './Topicpage'; // Import the TopicPage component
import Admin from './Admin'
import Quizcategory1 from './Quizcategory1';
import Quizcategory2 from './Quizcategory2';
import Quizcategory3 from './Quizcategory3';
import Quizcategory4 from './Quizcategory4';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/category" element={<Quizcategory />} />
          <Route path="/category1" element={<Quizcategory1 />} />
          <Route path="/category2" element={<Quizcategory2 />} />
          <Route path="/category3" element={<Quizcategory3 />} />
          <Route path="/category4" element={<Quizcategory4 />} />
          <Route path="/topic/html" element={<Topicpage />} /> {/* Route for TopicPage */}
          <Route path="/topic/css" element={<Topicpage />} />
          <Route path="/topic/js" element={<Topicpage />} />
          <Route path="/topic/react" element={<Topicpage />} />
          <Route path="/topic/node" element={<Topicpage />} />
          <Route path="/topic/nodejs" element={<Topicpage />} />
          <Route path="/topic/redux" element={<Topicpage />} />
          <Route path="/topic/php" element={<Topicpage />} />
          <Route path="/topic/string" element={<Topicpage />} />
          <Route path="/topic/array" element={<Topicpage />} />
          <Route path="/topic/linkedlist" element={<Topicpage />} />
          <Route path="/topic/stack" element={<Topicpage />} />
          <Route path="/topic/queue" element={<Topicpage />} />
          <Route path="/topic/graph" element={<Topicpage />} />
          <Route path="/topic/tree" element={<Topicpage />} />
          <Route path="/topic/greedyal" element={<Topicpage />} />
          <Route path="/topic/searchingal" element={<Topicpage />} />
          <Route path="/topic/sortingal" element={<Topicpage />} />
          <Route path="/topic/dynamicpro" element={<Topicpage />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
