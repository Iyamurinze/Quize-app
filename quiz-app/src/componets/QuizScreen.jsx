import React, { useState } from 'react';

 function QuizScreen({ quizData, handleSubmitQuiz }) {
  const [userAnswers, setUserAnswers] = useState([]);
  
  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = answer;
    setUserAnswers(newAnswers);
  };

  const checkAnswers = () => {
    if (userAnswers.length === quizData.length) {
      handleSubmitQuiz(userAnswers);  // Use handleSubmitQuiz instead of submitQuiz
    } else {
      alert('Please answer all questions.');
    }
  };

  return (
    <div className="quiz">
      {quizData.map((question, index) => (
        <div key={index} className="question">
          <h3>{question.question}</h3>
          {question.incorrect_answers.concat(question.correct_answer).map((answer) => (
            <button
              key={answer}
              className={userAnswers[index] === answer ? 'selected' : ''}
              onClick={() => handleAnswerChange(index, answer)}
            >
              {answer}
            </button>
          ))}
        </div>
      ))}
      <button onClick={checkAnswers} className="submit-answer">Check answers</button>
    </div>
  );
}

export default QuizScreen;