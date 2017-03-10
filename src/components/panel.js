import React, { Component } from 'react';
import '../App.css';


class Panel extends Component {
  constructor() {
    super();
    this.state = {
      volume: 100,
      p: 'fa fa-play',
      vr: 0,
      e: '',
      url: ''
    }

    this.play       = this.play.bind(this);
    this.volumeDown = this.volumeDown.bind(this);
    this.volumeUp   = this.volumeUp.bind(this);
    this.stime      = this.stime.bind(this);
    this.reset      = this.reset.bind(this);
    this.stop       = this.stop.bind(this);
    this.mute       = this.mute.bind(this);
    this.toPlay     = this.toPlay.bind(this);
    this.backward   = this.backward.bind(this);
    this.forward    = this.forward.bind(this);
  }

  play(set){
    var song = document.getElementById('song');
    if ( this.state.p === 'fa fa-pause' ) {
      this.setState({ p: 'fa fa-play' });
      song.pause();
    } else {
      this.setState({ p: 'fa fa-pause' });
      song.play();
    }
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
    progressBar.setAttribute("style", "width: " + Math.round(position) + "px;");
    document.getElementById('pbar').title = song.currentTime
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
    console.log(e, '  f  ', this.state.e)
    this.setState({ e: e })
    var song = document.getElementById('song');
    this.reset()
    if(e != this.state.e) { this.stop(); };
    if(e == this.state.e) { this.play(); };

    this.stop()
    this.setState({ last: this.state.url, url: e.target.children[0].defaultValue })
    // this.forceUpdate();
    this.play()
  }

  componentDidMount() {
    var allsongs = document.getElementsByClassName('song')
    for(let i = 0; i < allsongs.length; i++){
      allsongs[i].addEventListener('click', this.toPlay)
    }
    this.setState({ url: allsongs[0].children[0].defaultValue });
    document.getElementById('song').play()
  }

  backward() {
    console.log('backward')
  }

  forward() {
    console.log('forward')
  }

  render() {
    return(
      <div className="panel">
        <button onClick={this.backward} className="notready"><i className="fa fa-backward" aria-hidden="true"></i></button>
        <button onClick={this.play}><i className={this.state.p} aria-hidden="true" ></i></button>
        <button onClick={this.stop}><i className="fa fa-stop" aria-hidden="true"></i></button>
        <button onClick={this.forward} className="notready"><i className="fa fa-forward" aria-hidden="true"></i></button>
        <audio id="song" src={this.state.url} onTimeUpdate={this.stime} onEnded={this.reset}></audio>
        <button onClick={this.volumeDown}><i className="fa fa-volume-down" aria-hidden="true"></i></button>
        <span>  {this.state.volume}% </span>
        <button onClick={this.volumeUp}><i className="fa fa-volume-up" aria-hidden="true"></i></button>
        <button onClick={this.mute}><i className="fa fa-volume-off" aria-hidden="true"></i></button>
        <div onMouseMove={(e)=>{console.log(e.pageX)}} id="pbar" className="progress_width">
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
