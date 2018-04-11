import React, { Component } from 'react';

function FooterComponent(props) {
  return (
    <footer className="App-footer">
      <p>Copyright {props.actualdate} All Rights Reserved</p>
    </footer>
  );
}

export default FooterComponent;
