import React, { Component } from 'react';
import './App.css';
import Top from './components/top'
// import {Songs} from './components/songs'
import {Panel} from './components/panel'


class App extends Component {
  constructor() {
    super();
    this.state = {
      sour: 'https://psv4.userapi.com/c4212/u6296769/audios/b448428b6da3.mp3?extra=48Z-u2vXtjO6_j6h6DUO5Xl77_5YHZ-wsDCsFckaC273UppGSf_n1VHnxiWrG52LfddPYNdHPwCb41tZIZnzBUjyzYYQdrGbUnvGTk8tTrSE2DKNb3UaWeq0R3DcKDl8cmW-R0bMiiGy'
    }
    this.play = this.play.bind(this);
  }

  play(e) {
    this.setState({ sour: 'https://psv4.userapi.coms/c4212/u6296769/audios/b448428b6da3.mp3?extra=48Z-u2vXtjO6_j6h6DUO5Xl77_5YHZ-wsDCsFckaC273UppGSf_n1VHnxiWrG52LfddPYNdHPwCb41tZIZnzBUjyzYYQdrGbUnvGTk8tTrSE2DKNb3UaWeq0R3DcKDl8cmW-R0bMiiGy'})
    console.log(this.refs)
    // this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <Top />
        <Panel sour={this.state.sour}/>
      </div>
    );
  }
}

export default App;
