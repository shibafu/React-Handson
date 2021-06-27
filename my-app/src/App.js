import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  data = []

  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }
  // コンストラクタ
  constructor(props){
    super(props)
    this.state = {
      list:this.area
    }
  // イベントリスナーを紐づけ
  this.doAction = this.doAction.bind(this)
  }

  // ボタンイベント
  doAction(event){
    let x = e.pageX
    let y = e.pageY
    this.data.push({x:x, y:y})

    this.setState({
      list:this.data
    })
  }

  // 表示切替
  draw(d){
    let s = {
      poisition:"absolute",
      left:(d.x - 25) + "px",
      top:(d.y - 25) + "px",
      width:"50px",
      height:"50px",
      backgroundColor:"#66f3",
    }
    return <div srtyle={s}></div>
  }

  // レンダリングメソッド
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <p className="subtitle">draw reactangle.</p>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((value)=>this.draw(value))}
      </div>
    </div>
  }

  
}

export default App;
