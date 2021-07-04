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

  }
}

// タイトル描画メソッド
class Title extends Component {
  static contextType;

  // 描画メソッド
  render(){

  }
}

// メッセージ表示コンポーネント
class Message extends Component {
  static contextType;

  // 描画メソッド
  render(){

  }
}

export default App;