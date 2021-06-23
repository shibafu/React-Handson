import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  // コンストラクタ
  constructor(props){
    super(props)
    this.state = {
      msg:"Hello Component",
      count:0,
      button_msg:"Hello Component",
      button_count:0
    };
    this.msg = props.msg

    let timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        msg: "Count is Now [ " + this.state.count + " ] "
    })

    // イベントリスナーを紐づけ
    this.doAction = this.doAction.bind(this)
  }, 1000);
  }
  // ボタンイベント
  doAction(event){
    this.setState({
      button_count:this.state.button_count + 1,
      button_msg: "ButtonCount is Now [ " + this.state.button_count + " ] "
    })
  }

  // レンダリングメソッド
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="subtitle">{this.title}</p>
        <p>{this.state.msg}</p>
        <p>{this.state.button_msg}</p>
        <button onClick={this.doAction}> ぼたん</button>
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
