import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

  // テーマ
  function AlertMessage(props) {
    return (<div className="alert alert-primary h5 text-primary">
      {props.message}
    </div>)

  }
  // テーマ
  function CardMessage(props) {
    return (<div className="card p-3 h5 border-primary text-center">
      {props.message}
    </div>)

  }
  // テーマ
  function App() {
    const [msg, setMessage] = useState("This is State Message!!ヾ(｡>﹏<｡)ﾉﾞ✧*。 ")

    const doAction = () => {
      let res = window.prompt('type your name')
      setMessage("Hello!! " + res + "!!")
    }


    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4>Component Sample</h4>
        <CardMessage message={msg} />
        <AlertMessage message={msg} />
        <button onClick={doAction} className="btn btn-primary">Click Me !!</button>
      </div>
    </div>)

  }

export default App;