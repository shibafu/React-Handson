import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rect from './Rect';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App title="Reactへようこそ！" message="ないしょのプログラムだよ"/> */}
    <Rect   x = "200"  y = "200"  width = "200"  height = "200"  color = "cyan"  radius = "100"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
