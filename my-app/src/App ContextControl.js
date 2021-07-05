import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  input = ''

  // コンストラクタ
  constructor(props){
    super(props)
    this.state = {
      title: 'input title',
      message: 'message',
      max: 10 
    }

    // イベント
    this.doCheck = this.doCheck.bind(this)
  }

  // 変更
  doCheck(event){
    alert(event.target.value + 
      "は長すぎます。（最大" + this.state.max + "文字")
  }

  // ボタンイベント
  // ボタンイベント
  render(){
    return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="subtitle">{this.state.title}</h4>
        <Message maxlength={this.state.max} onCheck={this.doCheck} />
      </div>
    </div>
  }
}


class Message extends Component {
  li = {
    fontSize:"14px",
    fontWeight:"bold",
    color:"#090",
  }
  // コンストラクタ
  constructor(props){
    super(props)
    // イベント
    this.doChange = this.doChange.bind(this)
  }

  // 変更
  doChange(event){
    if(event.target.value.length > this.props.maxlength){
      this.props.onCheck(event)
      event.target.value =
       event.target.value.substr(0, this.props.maxlength)
    }
  }

  render(){
    return <div className="form-group">
      <label>input:</label>
      <input type="text" className="form-control"
        onChange={this.doChange} />
    </div>
  }
}

export default App;