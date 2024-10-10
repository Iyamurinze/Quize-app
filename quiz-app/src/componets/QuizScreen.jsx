import React, { useState } from 'react';

function QuizScreen({ questions, submitQuiz }) {
  const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null));

  // Handle answer selection
  const handleAnswerClick = (answer, index) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[index] = answer;
    setSelectedAnswers(updatedAnswers);
  };

  // Submit quiz when the user is done
  const handleSubmit = () => {
    submitQuiz(selectedAnswers);
  };

  return (
    <div className="quiz-screen">
      <h2>Answer the following questions:</h2>
      <ul className="question-list">
        {questions.map((question, index) => (
          <li key={index} className="question-item">
            <h3>{` ${question.question}`}</h3>
            <div className="answers">
              {question.answers.map((answer, idx) => (
                <button
                  key={idx}
                  className={`answer-button ${selectedAnswers[index] === answer ? 'selected' : ''}`}
                  onClick={() => handleAnswerClick(answer, index)}
                >
                  {answer}
                </button>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <button className="submit-button" onClick={handleSubmit}>
        Check answers
      </button>
    </div>
  );
}
export default QuizScreen;