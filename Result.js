import React, { useState, useEffect } from 'react';
import questionsData from './questions.json';
import { useLocation, Link } from 'react-router-dom';
import goldbadge from './goldbadge.jpg';
import silverbadge from './silverbadge.jpg';
import bronzebadge from './bronzebadge.jpg';

const Result = () => {
  const { totalScore, topic, emailid } = useLocation().state;

  // Find the questions data for the given topic
  const topicQuestions = questionsData.find(item => item.category === topic);

  // State for reward message and motivational quote
  const [rewardMessage, setRewardMessage] = useState('');
  const [motivationalQuote, setMotivationalQuote] = useState('');

  // Array of motivational quotes
  // Array of motivational quotes
const motivationalQuotes = [
  "Believe you can and you're halfway there.",
  "Don't watch the clock; do what it does. Keep going.",
  "The only way to achieve the impossible is to believe it is possible.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Dream it. Wish it. Do it.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "You are capable of amazing things.",
  "The best way to predict the future is to create it.",
  "It always seems impossible until it’s done.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Hardships often prepare ordinary people for an extraordinary destiny.",
  "Believe in yourself, take on your challenges, dig deep within yourself to conquer fears.",
  "Your limitation—it’s only your imagination.",
  "Push yourself, because no one else is going to do it for you.",
  "Great things never come from comfort zones.",
  "Dream it. Believe it. Build it.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Don’t wait for opportunity. Create it.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Don’t stop when you’re tired. Stop when you’re done."
];


  // Function to get a random quote
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
    return motivationalQuotes[randomIndex];
  };

  useEffect(() => {
    if (totalScore > 10) {
      setRewardMessage('Congratulations! You scored more than 10! You win a gold badge!');
    } else if (totalScore > 5) {
      setRewardMessage('Great job! You scored more than 5! You win a silver badge!');
    } else if (totalScore > 2) {
      setRewardMessage('Good effort! You scored more than 2! You win a bronze badge!');
    }

    // Set a random motivational quote
    setMotivationalQuote(getRandomQuote());
  }, [totalScore]);

  return (
    <div className='res'>
      <div className="result-container">
        <style>
          {`
            .result-container {
              width: 90%;
              max-width: 800px;
              margin: 0 auto;
              padding: 40px;
              border-radius: 20px;
              background-image: url('./categorybk.jpg');
              background-size: cover;
              background-position: center;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              font-family: 'Segoe UI', sans-serif;
              text-align: center;
              color: #333;
            }
            .result-container h1 {
              font-size: 2.5em;
              margin-bottom: 20px;
            }
            .result-container p {
              font-size: 1.2em;
              margin-bottom: 10px;
            }
            .result-container table {
              width: 100%;
              border-collapse: collapse;
              margin-top: 40px;
            }
            .result-container th, .result-container td {
              border: 1px solid #dee2e6;
              padding: 15px;
              text-align: left;
            }
            .result-container th {
              background-color: #e9ecef;
              font-weight: bold;
              text-transform: uppercase;
            }
            .back-link {
              display: inline-block;
              margin-top: 40px;
              font-size: 1.2em;
              text-align: center;
              text-decoration: none;
              color: #fff;
              background-color: #007bff;
              border: 2px solid #007bff;
              padding: 12px 30px;
              border-radius: 8px;
              transition: background-color 0.3s ease, color 0.3s ease;
            }
            .back-link:hover {
              background-color: #0056b3;
              color: #fff;
            }
            .reward-message {
              font-size: 1.5em;
              color: #28a745;
              margin-top: 20px;
            }
            .reward-image {
              margin-top: 20px;
              width: 100px;
              height: 100px;
            }
            .motivational-quote {
              font-size: 1.2em;
              color: #6c757d;
              margin-top: 20px;
            }
          `}
        </style>
        <h1>Quiz Result</h1>
        <p>Topic: {topic}</p>
        <p>Total Score: {totalScore}</p>
        {rewardMessage && <p className="reward-message">{rewardMessage}</p>}
        {totalScore > 10 && <img src={goldbadge} alt="Gold Badge" className="reward-image" />}
        {totalScore > 5 && totalScore <= 10 && <img src={silverbadge} alt="Silver Badge" className="reward-image" />}
        {totalScore > 2 && totalScore <= 5 && <img src={bronzebadge} alt="Bronze Badge" className="reward-image" />}
        {motivationalQuote && <p className="motivational-quote">{motivationalQuote}</p>}
        <table>
          <thead>
            <tr>
              <th>Question</th>
              <th>Correct Answer</th>
            </tr>
          </thead>
          <tbody>
            {topicQuestions &&
              topicQuestions.questionArray.map((question, index) => (
                <tr key={index}>
                  <td>{question.questions}</td>
                  <td>{question.correctAnswer}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link to="/category1" state={{ emailid }} className="back-link">Attempt More Quizzes</Link>
      </div>
    </div>
  );
};

export default Result;
