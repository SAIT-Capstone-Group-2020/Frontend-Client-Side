// import node_modules
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import local scripts
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider } from './components/hoc/Store';
// css
import './index.css';

// Replace the div with the id=root with web app
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Router forceRefresh basename="/#">
        <App />
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
