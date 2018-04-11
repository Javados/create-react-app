import React, { Component } from 'react';

function QuestionQuestTittle(props) {
  return (
    <p className="question-numb">
      Вопрос № {props.questnum} - Тема {props.questthem} - Сложность ({props.questdiff})
    </p>
  );
}

export default QuestionQuestTittle;
