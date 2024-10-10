import React from 'react';

function ResultsScreen({ questions, selectedAnswers, correctAnswers, playAgain }) {
    if (!questions || questions.length === 0) return <p>Loading results...</p>;
  
    return (
      <div className="results-screen">
        <h1>Quiz Results</h1>
        <ul className="results-list">
          {questions.map((question, index) => (
            <li key={index} className="results-question">
              <h3>{`${index + 1}. ${question.question}`}</h3>
              <div className="answers">
                {question.answers.map((answer, idx) => {
                  const isCorrect = answer === correctAnswers[index];
                  const isSelected = answer === selectedAnswers[index];
                  const className = isCorrect
                    ? 'answer-button correct'
                    : isSelected
                    ? 'answer-button incorrect'
                    : 'answer-button';
  
                  return (
                    <button key={idx} className={className} disabled>
                      {answer}
                    </button>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
        <p>
          You scored {selectedAnswers.filter((answer, i) => answer === correctAnswers[i]).length}/
          {questions.length} correct answers.
        </p>
        <button className="play-again-button" onClick={playAgain}>
          Play again
        </button>
      </div>
    );
  }
export default ResultsScreen;