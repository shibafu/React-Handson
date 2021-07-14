import logo from './logo.svg';
import './App.css';
import React, { Component, useState } from 'react';

  // テーマ
  function AlertMessage() {
    return (<div className="alert alert-primary h5 text-primary">
      this is Alert Message
    </div>)

  }
  // テーマ
  function CardMessage() {
    return (<div className="card p-3 h5 border-primary text-center">
      this is Alert Message
    </div>)

  }
  // テーマ
  function App() {
    return (<div>
      <h1 className="bg-primary text-white display-4 ">React</h1>
      <div className="container">
        <h4>Component Sample</h4>
        <CardMessage />
        <AlertMessage />
      </div>
    </div>)

  }

export default App;