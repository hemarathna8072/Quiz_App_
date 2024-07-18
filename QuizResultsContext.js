import React, { createContext, useContext, useState } from 'react';

// Create a context for quiz results
const QuizResultsContext = createContext();

// Custom hook to use quiz results context
export const useQuizResults = () => useContext(QuizResultsContext);

// Provider component to wrap your application
export const QuizResultsProvider = ({ children }) => {
  const [quizResults, setQuizResults] = useState([]);

  return (
    <QuizResultsContext.Provider value={{ quizResults, setQuizResults }}>
      {children}
    </QuizResultsContext.Provider>
  );
};
