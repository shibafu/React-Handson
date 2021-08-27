import logo from './logo.svg';
import './App.css';
import React, { Component, useState, useEffect } from 'react';

  // テーマ
  function AlertMessage(props) {
    const data = props.data
    const msg = JSON.stringify(data)

    return(<div className="alert alert-primary h5 text-primary">
      <hr />
        <h5>{props.msg}</h5>
    </div>)


  }
  // テーマ
  function App() {
    // state
    const [val, setVal] = useState(0)
    const [msg, setMsg] = useState('set a Number')
    const [msg, setMsg] = useState('set a Number')

    // フックメソッド
    const doChange = (event) => {
      setVal(event.target.value)
    }

    useEffect(() =>{
      let total = 0
      for (let i = 0;i <= val;i++){
        total += i
      }
      setMsg("total: " + total + ".")
    })

    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4 className="my-3">Hook Sample</h4>
        <AlertMessage msg={msg} />
          <div className="form-group">
            <label>Input:</label>
            <input type="number" className="form-control"
              onChange={doChange} />
          </div>
      </div>
    </div>)

  }

export default App;