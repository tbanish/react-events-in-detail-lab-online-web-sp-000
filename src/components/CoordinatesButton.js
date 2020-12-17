// Code CoordinatesButton Component Here
import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  constructor(prop) {
    super()
    this.onReceiveCoordinates = prop.onReceiveCoordinates
  }

  handleClick = (event) => {
    let x = event.clientX
    let y = event.clientY
    let array = [x, y]
    this.onReceiveCoordinates(array)
  }

  render() {
    return <button onClick={this.handleClick}>Coordinate Button</button>
  }
}
