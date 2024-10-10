import React from 'react';

function ResultScreen({ score, userAnswers, quizData, tryAgain }) {
    return (
      <div className="result">
        <h1>Your Score: {score}/5</h1>
        <p>Here are the correct answers:</p>
        {quizData.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <p>Your answer: {userAnswers[index]}</p>
            <p>Correct answer: {question.correct_answer}</p>
          </div>
        ))}
        <button onClick={tryAgain}>Try Again</button>
      </div>
    );
  }
export default ResultsScreen;