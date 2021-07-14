import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import AlertMessage from './App';
import Rect from './Rect';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  {/*<AlertMessage /> */} 
    <App /> 
    {/*<Rect   x = "200"  y = "200"  width = "200"  height = "200"  color = "#6ff9"  radius = "25"/> */}
    {/*<Rect   x = "300"  y = "300"  width = "200"  height = "200"  color = "#f6f9"  radius = "75"/> */}
    {/*<Rect   x = "400"  y = "400"  width = "200"  height = "200"  color = "#6669"  radius = "100"/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
