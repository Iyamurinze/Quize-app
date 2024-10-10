import React from 'react';

function StartScreen({ startQuiz }) {
  return (
    <div className="start-screen">
      <h1>Welcome to the Quiz</h1>
      <button className="start-button" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;
