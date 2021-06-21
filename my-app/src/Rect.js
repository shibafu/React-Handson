import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class Rect extends React.Component {
    x = 0
    y = 0
    width = 0
    height = 0
    color = "White"
    radius = 0
    style = {}
  constructor(props){
    super(props)
    this.x = props.x
    this.y =  props.y 
    this.width = props.width 
    this.height = props.height
    this.color = props.color
    this.radius = props.radius
    this.style = {
        backgroundColor:this.color,
        position:"absolute",
        left:this.x + "px",
        top:this.y + "px",
        width:this.width + "px",
        height:this.height + "px",
        borderRadius:this.radius + "px",
    }

  }
  render() {
    return <div className="App">
      <div style={this.style}>aaa</div>
    </div>
  }
}

export default Rect;
