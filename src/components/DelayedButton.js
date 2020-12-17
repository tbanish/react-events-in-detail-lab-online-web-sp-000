// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
  constructor(props) {
    super()
    this.delay = props.delay
    this.onDelayedClick = props.onDelayedClick
  }

  handleClick = (event) => {
    event.persist()
    const trigger = () => (this.onDelayedClick(event))
    setTimeout(trigger, this.delay)
  }



  render() {
    return <button onClick={this.handleClick}>Delayed Button</button>
  }
}
