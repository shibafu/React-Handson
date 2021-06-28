import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  data = [
    "This is list sample.",
    "コレはリストのサンプルです",
    "配列をリストに変換します"
  ]

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
  }

  // ボタンイベント
  render(){
    return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show List</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }
}

  // リスト内部クラス
  class List extends Component {
    number = 1

    render(){
    let data = this.props.data;

    return (<div>
      <h1 className="h5 text-center">{this.props.title}</h1>
        <ul classNamenpm="list-group">
          {data.map((item, key) =>
            <li className="list-group-item" key={key}>
              <Item number={key + 1} value={item} />
            </li>
          )}
        </ul>
      </div>
    )
    }
  }
  // リスト要素クラス
  class Item extends Component {
    itm = {}

    num = {
      fontWeight:"bold",
      color:"red"
    }
    render(){
    return (<p>
      <span style={this.num}>
        [{this.props.value}]&nbsp;
      </span>
      {this.props.value}
    </p>
    )
    }
}

export default App;
