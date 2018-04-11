import React, { Component } from 'react';
import SidebarArea from './SidebarArea.js';
import QuestionArea from './QuestionArea.js';

function ContentComponent(props) {
  return (
    <div className="content-area">
      <SidebarArea />
      <QuestionArea />
    </div>
  );
}

export default ContentComponent;
