import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

  // テーマ
  function AlertMessage(props) {
    const data = ["Hello", "Welcome...", "Good-bye?"]

    const actionAlert = () => {
      const re = data[Math.floor(Math.random() * data.length)]
      props.setAlert("message: " + re + " .")
    }

    return(<div className="alert alert-primary h5 text-primary">
      <h5>{props.alert}</h5>
      <button onClick={actionAlert} className="btn btn-primary">
        Click me!!
      </button>
    </div>)


  }
  // テーマ
  function CardMessage(props) {
    const [count, setCount] = useState(0)

    const actionCard = () => {
      setCount(count + 1)
      props.setCard("card Counter: " + count + " count.")
    }
    
    return(<div className="card p-3 border-dark text-center">
      <h5>{props.card}</h5>
      <button onClick={actionCard} className="btn btn-primary">
        Click me!!
      </button>
    </div>)

  }
  // テーマ
  function App() {
    const [alert, setAlert] = useState("This is alert message!!")
    const [card, setCard] = useState("This is card message!!")

    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4>Hook Sample</h4>
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <p>{alert}</p>
        <p>{card}</p>
      </div>
    </div>)

  }

export default App;