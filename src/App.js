import React, { Component } from 'react';
import './App.css';
import Top from './components/top'
// import {Songs} from './components/songs'
import {Panel} from './components/panel'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Top />
        <div className="songs">
          <Panel />
        </div>
      </div>
    );
  }
}

export default App;
