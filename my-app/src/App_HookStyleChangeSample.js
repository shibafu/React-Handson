import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

  // テーマ
  function App(){
    // カウントステートをセット
    const [count, setCount] = useState(0)
    const clickCountButtonFunc = () =>{
      setCount(count + 1)
    }
    // フラグステートをセット
    const [flag, setFlag] = useState(false)
    const clickFlagButtonFunc = (e) =>{
      if(flag){
        setFlag(false)
      }
      else {
        setFlag(true)
      }
    }

    return (
      <div>
        <h1 className="bg-primary text-white display-4 ">React</h1>
        <div className="container">
          <h4 className="my-3">Hooks sample</h4>
          {/* フラグステート */}
          {flag ? 
          <div className="alert alert-primary text-center ">
            <p className="h5 mb-3">click: {count} times!</p>
            <div><button className="btn btn-primary" onClick={clickCountButtonFunc} >クリック！</button></div>
          </div>
        :
        <div className="card p-3 border-primary text-left ">
        <div className="card p-3 border-primary text-left ">
          <p className="h5 mb-3">click: {count} times!</p>
          <div><button className="btn btn-primary" onClick={clickCountButtonFunc} >クリック！</button></div>
        </div>
        }
        {/* ボタンステート */}
          <div className="alert alert-primary text-center">
            <p className="h5 mb-3 text-left text-primary">Change Form Style!</p>
            <div><button className="btn btn-primary" onClick={clickFlagButtonFunc} >クリック！</button></div>
          </div>
        </div>
      </div>


    )

  }

export default App;