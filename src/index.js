import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppToDemoFragment from './AppToDemoFragment';
import AppToDemoConditionalRendering from './AppToDemoConditionalRendering';
import AppToDemoUseStateAndUseEffect from './AppToDemoUseStateAndUseEffect';
import AppToDemoUseReducer from './AppToDemoUseReducer';
import AppToDemoDataLoadUsingUseEffectAndUseState from './AppToDemoDataLoadUsingUseEffectAndUseState';
import {BrowserRouter as Router} from "react-router-dom";
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.Fragment>
      <Router>
        <App/>
      </Router>
      <AppToDemoFragment/>
      <AppToDemoConditionalRendering isAdmin = {true}/>
      <AppToDemoUseStateAndUseEffect isAdmin = {true}/>
      <AppToDemoUseReducer isAdmin = {true}/>
      <AppToDemoDataLoadUsingUseEffectAndUseState login={"barunkumar04"} isAdmin={true}/>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
