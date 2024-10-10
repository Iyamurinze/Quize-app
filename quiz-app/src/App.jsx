import React, { useState, useEffect } from 'react';
import './App.css';
import StartScreen from './componets/StartScreen';
import QuizScreen from './componets/QuizScreen';
import ResultScreen from './componets/ResultsScreen';
import axios from 'axios';

function App() {
  const [quizData, setQuizData] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentScreen, setCurrentScreen] = useState('start'); // Can be 'start', 'quiz', or 'result'
  const [score, setScore] = useState(0);

  // Fetch questions when starting the quiz
  const fetchQuizData = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple');
      setQuizData(response.data.results);
      setCurrentScreen('quiz');
      setUserAnswers([]); // Reset user answers
    } catch (error) {
      console.error('Error fetching quiz data', error);
    }
  };

  // Handle checking answers and moving to result screen
  const handleSubmitQuiz = (answers) => {
    let correctAnswers = 0;
    quizData.forEach((question, index) => {
      if (answers[index] === question.correct_answer) {
        correctAnswers++;
      }
    });
    setScore(correctAnswers);
    setUserAnswers(answers);
    setCurrentScreen('result');
  };

  // Reset the quiz and go back to the start screen
  const handleRestartQuiz = () => {
    setCurrentScreen('start');
    setScore(0);
    setQuizData([]); // Optionally clear quiz data before fetching again
  };

  return (
    <div className="App">
      {currentScreen === 'start' && <StartScreen startQuiz={fetchQuizData} />}
      {currentScreen === 'quiz' && <QuizScreen quizData={quizData} handleSubmitQuiz={handleSubmitQuiz} />}
      {currentScreen === 'result' && <ResultScreen score={score} userAnswers={userAnswers} quizData={quizData} tryAgain={handleRestartQuiz} />}
    </div>
  );
}

export default App;
