import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import StartScreen from './componets/StartScreen';
import QuizScreen from './componets/QuizScreen';
import ResultsScreen from './componets/ResultsScreen';

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [screen, setScreen] = useState('start'); // 'start', 'quiz', 'results'

  // Fetch quiz questions when the quiz starts
  const fetchQuestions = async () => {
    try {
      const response = await axios.get('https://opentdb.com/api.php?amount=5&type=multiple');
      const fetchedQuestions = response.data.results.map((question) => ({
        question: question.question,
        answers: [...question.incorrect_answers, question.correct_answer].sort(),
      }));
      setQuestions(fetchedQuestions);
      setCorrectAnswers(response.data.results.map((q) => q.correct_answer));
      setSelectedAnswers([]);
      setScreen('quiz'); // Move to quiz screen
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  // Handle when answers are submitted
  const submitQuiz = (selected) => {
    setSelectedAnswers(selected);
    setScreen('results'); // Move to results screen
  };

  // Restart quiz
  const handlePlayAgain = () => {
    setScreen('start');
  };

  return (
    <div className='quiz-app'>
      {screen === 'start' && <StartScreen startQuiz={fetchQuestions} />}
      {screen === 'quiz' && (
        <QuizScreen
          questions={questions}
          submitQuiz={submitQuiz}
        />
      )}
      {screen === 'results' && (
        <ResultsScreen
          questions={questions}
          selectedAnswers={selectedAnswers}
          correctAnswers={correctAnswers}
          playAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}
