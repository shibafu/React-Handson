import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';

  // テーマ
  function useCounter() {
    const [num, setNum] = useState(0)
    
    const count = ()=>{
      setNum(num + 1)
    }

    return [num, count]
  }

  // テーマ
  function AlertMessage(props) {
    const [counter, plus] = useCounter()
    
    return <div className="alert alert-primary h5 text-center">
      <h4>count : {counter}</h4>
      <button onClick={plus} className="btn btn-primary">
        count
      </button>
    </div>
  
  }
  // テーマ
  function App() {

    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hook Sample</h4>
        <AlertMessage />
      </div>
    </div>)

  }

export default App;