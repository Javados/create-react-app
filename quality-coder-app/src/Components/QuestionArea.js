import React, { Component } from 'react';
import QuestionQuestTittle from './QuestionQuestTittle.js';
import CheckAnswer from './CheckAnswer.js';
import Quest1 from './QuestComponents/Quest1.js';
import Quest2 from './QuestComponents/Quest2.js';

function QuestionArea(props) {
  return (
    <div className="appquestions">
      <div className="appquestions-question">
        <div className="appquestions-question-tableboard">
          <QuestionQuestTittle questnum="2" questthem="CSS" questdiff="Basic" />
          <Quest2 />
        </div>
      </div>
      <div className="appquestions-answers">
        <div className="appquestions-answers-buttons">
          <button className="answer-btn" onClick={CheckAnswer}>
            {' '}
            static{' '}
          </button>
          <button className="answer-btn" onClick={CheckAnswer}>
            {' '}
            relative{' '}
          </button>
          <button className="answer-btn" onClick={CheckAnswer}>
            {' '}
            absolute{' '}
          </button>
          <button className="answer-btn" onClick={CheckAnswer}>
            {' '}
            Никакое из перечисленных{' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionArea;
