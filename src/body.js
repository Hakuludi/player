import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router';

class Bod extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0
    }
    this.count = this.count.bind(this);

  }

  count(e) {
    console.log(e.target)
    this.setState({ counter: this.state.counter + Math.round(1000870000064660 * Math.random(52)) })
  }

  render () {
    return (
      <div>
        <Link to="/back">
          <h1>Smash them</h1>
        </Link>
        <button className="counter" onClick={this.count}>
          Count clicks
        </button>
        <br />
        <p><input type="text" value={this.state.counter}></input></p>
      </div>
    )
  }
}

export default Bod;
