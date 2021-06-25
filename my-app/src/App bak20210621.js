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
      button_count:0,
      flg:false
    };
    this.msg = props.msg

  // イベントリスナーを紐づけ
  this.doAction = this.doAction.bind(this)
  this.doDisplayChange = this.doDisplayChange.bind(this)
  }

  // コンストラクター終了時に実行されるメソッド
    componentDidMount(){
      // 常駐イベント
      let timer = setInterval(() => {
        this.setState({
          count:this.state.count + 1,
          msg:"Timer is Now [ " + this.state.count + " ] "
          });
        }, 1000);
      }

  // ボタンイベント
  doAction(event){
    this.setState({
      button_count:this.state.button_count + 1,
      button_msg: "ButtonCount is Now [ " + this.state.button_count + " ] "
    })
  }

  // 表示切替
  doDisplayChange(event){
    if (this.state.flg) {
      this.setState({
        flg:false
      })
    } else {
      this.setState({
        flg:true
      })
    }
  }

  // レンダリングメソッド
  render() {
    return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="subtitle">{this.title}</p>
        {/*<p>{this.state.msg}</p>
        <p>{this.state.button_msg}</p>
  <button onClick={this.doAction}> ぼたん</button>*/}
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

        <button onClick={this.doDisplayChange}> 表示カウンター切り替えボタン</button>

        {this.state.flg ? 
        <div className="alert alert-primary text-right">
          <p>{this.state.msg}</p>
        </div>
        :
        <div className="alert alert-secondary text-left">
          <p>{this.state.button_msg}</p>
          <button onClick={this.doAction}> ぼたん</button>
        </div>
      }
        <p></p>
        <p></p>

      </header>
    </div>
  }

  
}

export default App;
