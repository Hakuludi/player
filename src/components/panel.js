import React, { Component } from 'react';
import '../App.css';


class Panel extends Component {
  constructor() {
    super();
    this.state = {
      volume: 100,
      p: 'fa fa-play',
      vr: 0,
      url: '',
      last: ''
    }

    this.play       = this.play.bind(this);
    this.volumeDown = this.volumeDown.bind(this);
    this.volumeUp   = this.volumeUp.bind(this);
    this.stime      = this.stime.bind(this);
    this.reset      = this.reset.bind(this);
    this.stop       = this.stop.bind(this);
    this.mute       = this.mute.bind(this);
    this.toPlay     = this.toPlay.bind(this);
  }

  play(set){
    var song = document.getElementById('song');
    if ( this.state.p === 'fa fa-pause' ) {
      console.debug(song.src , location.origin + this.state.last)
      if(song.src === location.origin + this.state.last) return false;
      this.setState({ p: 'fa fa-play' });
      song.pause();
    } else {
      console.debug(song.src , location.origin + this.state.last)
      if(song.src === location.origin + this.state.last) return false;
      this.setState({ p: 'fa fa-pause' });
      song.play();
    }
    // this.forceUpdate();
  }

  volumeDown() {
    if (this.state.volume === 0) return false;
    document.getElementById('song').volume -= 0.1;
    this.setState({ volume: Math.round(document.getElementById('song').volume * 100) });
    this.forceUpdate();
  }

  volumeUp() {
    if (this.state.volume === 100) return false;
    document.getElementById('song').volume += 0.1;
    this.setState({ volume: Math.round(document.getElementById('song').volume * 100)});
    this.forceUpdate();
  }

  stime() {
    var width       = document.getElementById('progressBar').parentNode.clientWidth;
    var song        = document.getElementById('song');
    var position    = width * ((( song.currentTime * 100 ) / song.duration ) / 100 );
    var progressBar = document.getElementById('progressBar');
    progressBar.setAttribute("style", "width: " + position + "px;");
    // console.log(position, ' - ', width);
  }

  reset() {
    this.setState({ vr: 0 });
  }

  stop() {
    var terge = document.getElementById('song');
    if ( terge.currentTime > 0 ) {
      terge.pause();
      this.setState({ p: 'fa fa-play' });
      terge.currentTime = 0;
      this.reset();
    }
  }

  mute() {
    var ps = document.getElementById('song');
    if(ps.muted === true) {
      ps.muted = false;
      return;
    }
    ps.muted = true;
  }

  toPlay(e) {
    this.reset()
    this.setState({ last: this.state.url, url: e.target.children[0].defaultValue })
    // this.forceUpdate();
    this.play()
  }

  componentDidMount() {
    var allsongs = document.getElementsByClassName('song')
    for(let i = 0; i < allsongs.length; i++){
      allsongs[i].addEventListener('click', this.toPlay)
    }
  }

  render() {
    return(
      <div className="panel">
        <button><i className="fa fa-backward" aria-hidden="true"></i></button>
        <button onClick={this.play}><i className={this.state.p} aria-hidden="true" ></i></button>
        <button onClick={this.stop}><i className="fa fa-stop" aria-hidden="true"></i></button>
        <button><i className="fa fa-forward" aria-hidden="true"></i></button>
        <audio id="song" autoPlay="true" src={this.state.url} onTimeUpdate={this.stime} onEnded={this.reset}></audio>
        <button onClick={this.volumeDown}><i className="fa fa-volume-down" aria-hidden="true"></i></button>
        <span>  {this.state.volume}% </span>
        <button onClick={this.volumeUp}><i className="fa fa-volume-up" aria-hidden="true"></i></button>
        <button onClick={this.mute}><i className="fa fa-volume-off" aria-hidden="true"></i></button>
        <div className="progress_width">
          <div id="progressBar"></div>
        </div>
        <span className="title" >Playlist</span>
        <div className="playlist">
          <div className="song">
            <input className="none" defaultValue="/1.mp3"></input>
            <span className="name">Song 1</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="/2.mp3"></input>
            <span className="name">Song 2</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export {Panel};
