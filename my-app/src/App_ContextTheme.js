import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

  // テーマ
  let theme = {
    light:{
      styles: {
        backgroundColor:"#f0f9ff",
        color:"#00f",
      },
    head: "bg-primary text-white display-4 mb-4",
    alert: "alert alert-primary my-3",
    text: "text-primary m-3",
    foot: "py-4",
  },
    dark:{
      styles: {
        backgroundColor:"#336",
        color:"#eef",
      },
    head: "bg-secondary text-white display-4 mb-4",
    alert: "alert alert-dark my-3",
    text: "text-light m-3",
    foot: "py-4",
    },
  }

const ThemeContext = React.createContext(theme.dark)

// アプリメインクラス
class App extends Component {
  static contextType = ThemeContext

  // 描画メソッド

  render(){
    return <div style={this.context.styles}>
      <h1 className={this.context.head}>React</h1>
      <div className="container">
        <Title value="container"/>
        <Message value="This is Content sample."/>
        <Message value="※これはテーマのサンプルです"/>
        <div className={this.context.foot}></div>
      </div>
    </div>

  }
}

// タイトル描画メソッド
class Title extends Component {
  static contextType = ThemeContext

  // 描画メソッド
  render(){
    return <div className={this.context.alert}>
      <h2 style={this.context.styles}>{this.props.value}</h2>
    </div>
  }
}

// メッセージ表示コンポーネント
class Message extends Component {
  static contextType = ThemeContext

  // 描画メソッド
  render(){
    return <div style={this.context.styles}>
      <h2 className={this.context.text}>{this.props.value}</h2>
    </div>
  }
}

export default App;