import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      msg:"Hello Component",
      count:0,
    };
    this.msg = props.msg

    let timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        msg: "Count is Now [ " + this.state.count + " ] ",
    })
  }, 1000);
  }
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="subtitle">{this.title}</p>
        <p>{this.props.msg}</p>
        <p>{this.state.msg}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  }
}

export default App;
