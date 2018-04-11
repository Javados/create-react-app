import React, { Component } from 'react';
import HeaderComponent from './Components/HeaderComponent.js';
import ContentComponent from './Components/ContentComponent.js';
import FooterComponent from './Components/FooterComponent.js';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderComponent name="Test - Quality Coder" />
        <ContentComponent />
        <FooterComponent actualdate="2018" />
      </div>
    );
  }
}

export default App;
