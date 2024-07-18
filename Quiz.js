import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questionsData from './questions.json';
import './quiz.css';

const Quiz = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const handleAnswerSelect = (questionIndex, option, correct) => {
    if (!answeredQuestions.includes(questionIndex)) {
      setSelectedAnswers(prevState => ({
        ...prevState,
        [questionIndex]: option
      }));
      setAnsweredQuestions(prevState => [...prevState, questionIndex]);
      setIsCorrect(correct);
    }
  };

  const renderOption = (questionIndex, option, correct) => {
    let className = '';
    if (answeredQuestions.includes(questionIndex)) {
      if (selectedAnswers[questionIndex] === option) {
        className = correct ? 'correct' : 'incorrect';
      }
    }
    return (
      <li 
        key={option} 
        onClick={() => handleAnswerSelect(questionIndex, option, correct)} 
        className={`${className} ${selectedAnswers[questionIndex] === option ? 'selected' : ''}`}
      >
        {option}
      </li>
    );
  };

  const handleFinishQuiz = () => {
    if (answeredQuestions.length === questions.length) {
      navigate('/result', { state: { selectedAnswers, questions } }); 
    } else {
      alert('Please answer all questions before finishing the quiz.');
    }
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>
      {questions.map((question, index) => (
        <div key={index} className="question">
          <h3>{question.question}</h3>
          <ul>
            {question.options.map((option, optionIndex) => renderOption(index, option.option, option.correct))}
          </ul>
        </div>
      ))}
      <button onClick={handleFinishQuiz}>Finish Quiz</button>
    </div>
  );
};

export default Quiz;