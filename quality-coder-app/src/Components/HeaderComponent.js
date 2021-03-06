import React, { Component } from 'react';
import logo from '../logo.svg';

function HeaderComponent(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.name}</h1>
    </header>
  );
}

export default HeaderComponent;
