import React from 'react';

 function StartScreen({ startQuiz }) {
  return (
    <div className="start-screen">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
}

export default StartScreen;
