import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

let data = {title:'React-Context',
message:'this is sample message.'}

const SampleContext = React.createContext(data)

// アプリメインクラス
class App extends Component {
  // 描画メソッド
  render(){
    return <div>
      <h1 className="bg-primary text-while display-4">React</h1>
      <div className="container">
        <Title />
        <Message />
      </div>
    </div>

  }
}

// タイトル描画メソッド
class Title extends Component {
  static contextType = SampleContext;

  // 描画メソッド
  render(){
    return <div className="card p-2 my-3">
      <h2>{this.context.title}</h2>
    </div>
  }
}

// メッセージ表示コンポーネント
class Message extends Component {
  static contextType = SampleContext;

  // 描画メソッド
  render(){
    return <div className="alert alert-primary">
      <p>{this.context.message}</p>
    </div>
  }
}

export default App;