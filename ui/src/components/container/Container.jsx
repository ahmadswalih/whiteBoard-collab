import React, { Component } from 'react'
import Board from '../board/Board'
import "./Container.css"

export default class Container extends Component {
    constructor(props){
        super(props)
    }
 
    render() {
    return (
      <div className='container'>
          <div className='color-picker-container'>
              <input type="color" />
          </div>
          <div className='board-container'>
              <Board></Board>
          </div>
      </div>
    )
  }
}
