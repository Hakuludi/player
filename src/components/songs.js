import React, { Component } from 'react';
import '../App.css';
import {Panel} from './panel'


class Songs extends Component {

  render() {
    return(
      <div className="songs">
        <Panel/>
      </div>
    )
  }
}

export {Songs}
