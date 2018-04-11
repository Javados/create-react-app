import React, { Component } from 'react';

function Quest3(props) {
  return (
    <p className="question-text">
      {' '}
      Относительно чего расчитуеться отступ сверху <br /> -{' '}
      <span className="question-code">top: 10%;</span> <br /> если в элемента
      задан <br /> -{' '}
      <span className="question-code"> position: absolute; </span>
    </p>
  );
}

export default Quest3;
