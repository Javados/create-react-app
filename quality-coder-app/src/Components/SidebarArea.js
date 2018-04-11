import React, { Component } from 'react';

function SidebarArea(props) {
  return (
    <div className="appsidebar">
      <div className="appsidebar-timer">
        <p>Осталось времени:</p>
        <p className="timedata">20:17</p>
      </div>
      <div className="appsidebar-points">
        <p>Набрано баллов:</p>
        <p className="pointsdata">17 QK</p>
      </div>
      <div className="appsidebar-points">
        <p>Осталось вопросов:</p>
        <p className="pointsdata">23 шт</p>
      </div>
      <div className="appsidebar-nextbutton">
        <button className="skip-btn"> Не знаю +1 QK </button>
      </div>
    </div>
  );
}

export default SidebarArea;
