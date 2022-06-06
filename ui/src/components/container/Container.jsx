import React, { Component } from 'react'
import Board from '../board/Board'
import "./Container.css"

export default class Container extends Component {
    constructor(props){
        super(props)
        this.state = {
            color:"#00000",
            size:"5"
        }
      
    }
    changeSize(params){
        this.setState({
            size:params.target.value
        })
    }

    changeColor(params) {
        this.setState({
            color:params.target.value
        })
    }
    render() {
    return (
      <div className='container'>
          <div className='tool-section'>
          <div className='color-picker-container'>
              Select Brush color : &nbsp;
              <input type="color" value={this.state.color} onChange={this.changeColor.bind(this)}/>
          </div><br/>
          <div className='brushsize-container'>
             Select Brush Size : &nbsp;
              <select value={this.state.size} onChange={this.changeSize.bind(this)} >
                  <option >5</option>
                  <option >10</option>
                  <option >15</option>
                  <option >20</option>
                  <option >25</option>
                  <option >30</option>
              </select>
          </div>
          </div>
          <div className='board-container'>
              <Board color={this.state.color} size={this.state.size}></Board>
          </div>
      </div>
    )
  }
}
