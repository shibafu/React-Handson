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
      message: 'message'
    }

    // イベント
    this.doChange = this.doChange.bind(this)
    this.doSubmit = this.doSubmit.bind(this)
  }

  // 変更
  doChange(event){
    this.input = event.target.value
  }

  // 送信
  doSubmit(event){
    
    this.setState({
      title: 'send form',
      message: 'Hello, '  + this.input + '!!'
    })
    event.preventDefault()
  }

  // ボタンイベント
  render(){
    return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <h4 className="subtitle">{this.state.title}</h4>
        <p className="card h5 p-3">{this.state.message}</p>
        <form onSubmit={this.doSubmit}>
          <div className="form-group">
            <label className="form-group">Message:</label>
            <input type="text" className="form-control" onChange={this.doChange} required pattern="[A-Za-z0-9]+" defaultValue="input your name!"/>
          </div>
            <input type="submit" className="btn btn-primary" value="Click" defaultValue="aaa"/>
        </form>
      </div>
    </div>
  }
}

export default App;
