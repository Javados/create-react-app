import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const appRoot = document.getElementById('app_root');

ReactDOM.render(<App />, appRoot);
registerServiceWorker();
