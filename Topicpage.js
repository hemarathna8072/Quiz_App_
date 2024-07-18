import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questionsData from './questions.json';
import './topicpage.css';

const Topicpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { topic, emailid } = location.state;
  const topicQuestions = questionsData.find(item => item.category === topic);

  const [selectedOptions, setSelectedOptions] = useState(
    new Array(topicQuestions ? topicQuestions.questionArray.length : 0).fill(null)
  );
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [optionStatuses, setOptionStatuses] = useState(
    new Array(topicQuestions ? topicQuestions.questionArray.length : 0).fill(null)
  );

  if (!topicQuestions) {
    return <div className="topic-container">No questions found for this topic</div>;
  }

  const saveScore = async (emailid, score, topic) => {
    try {
      const response = await fetch('http://localhost:8000/savescore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailid, score, topic })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'An error occurred while saving the score.');
      }

      const data = await response.json();
      console.log('Score Saved:', data);

    } catch (error) {
      console.error('Error Saving Score:', error.message);
    }
  };

  const handleFinishQuiz = () => {
    setFinished(true);
    calculateScore();
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    if (!finished && selectedOptions[questionIndex] === null) {
      const updatedSelectedOptions = [...selectedOptions];
      const updatedOptionStatuses = [...optionStatuses];

      updatedSelectedOptions[questionIndex] = optionIndex;

      if (topicQuestions.questionArray[questionIndex].options[optionIndex].isCorrect) {
        updatedOptionStatuses[questionIndex] = 'correct';
      } else {
        updatedOptionStatuses[questionIndex] = 'incorrect';
      }

      setSelectedOptions(updatedSelectedOptions);
      setOptionStatuses(updatedOptionStatuses);
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    selectedOptions.forEach((optionIndex, questionIndex) => {
      if (optionIndex !== null && topicQuestions.questionArray[questionIndex].options[optionIndex].isCorrect) {
        totalScore++;
      }
    });
    setScore(totalScore);
    navigateToResult(totalScore);
  };

  const navigateToResult = (totalScore) => {
    saveScore(emailid, totalScore, topic);  // Save the score before navigating
    navigate('/result', { state: { totalScore, topic, emailid } });
  };

  return (
    <div className='topic'>
      <div className="topic-container">
        <h1 className="topic-header">{topic}</h1>
        {topicQuestions.questionArray.map((question, questionIndex) => (
          <div key={questionIndex} className={`question ${finished ? 'finished' : ''}`}>
            <h3>{question.questions}</h3>
            <ul className="options">
              {question.options.map((option, optionIndex) => (
                <li
                  key={optionIndex}
                  onClick={() => handleOptionSelect(questionIndex, optionIndex)}
                  className={`option 
                              ${selectedOptions[questionIndex] === optionIndex ? 'selected' : ''}
                              ${optionStatuses[questionIndex] === 'correct' && selectedOptions[questionIndex] === optionIndex ? 'correct' : ''}
                              ${optionStatuses[questionIndex] === 'incorrect' && selectedOptions[questionIndex] === optionIndex ? 'incorrect' : ''}
                              `}
                >
                  {option.option}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="finish-button-container">
          {!finished && (
            <button onClick={handleFinishQuiz} className="finish-button">Finish Quiz</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topicpage;
