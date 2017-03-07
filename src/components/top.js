import React, { Component } from 'react';
import '../App.css';


class Top extends Component {
  reload(){
    location.reload()
  }

  render() {
    return(
      <div className="top">
        <p className="header" onClick={this.reload.bind(this)} >SimpleMP3Player</p>
      </div>
    )
  }
}

export default Top;
