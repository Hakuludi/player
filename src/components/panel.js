import React, { Component } from 'react';
import '../App.css';


class Panel extends Component {
  constructor() {
    super();
    this.state = {
      volume: 100,
      p: 'fa fa-play',
      vr: 0,
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
  }

  play(){
    var song = document.getElementById('song');
    if ( this.state.p === 'fa fa-pause' ) {
      this.setState({ p: 'fa fa-play' });
      song.pause();
    } else {
      this.setState({ p: 'fa fa-pause' });
      song.play();
    }
    this.forceUpdate();
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
    var width = document.getElementById('progressBar').parentNode.clientWidth;
    var song  = document.getElementById('song');
    this.setState({ vr: this.state.vr + 1 });
    if(!document.getElementById('progressBar').setAttribute("style", "width: " + this.state.vr / 3 + "px;"));
    document.getElementById('progressBar').style.width = this.state.vr / 3;
    console.log(song.currentTime, ' - ', width);
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
    this.setState({ url: e.target.children[0].defaultValue })
    this.forceUpdate();
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
        <audio id="song" src={this.state.url} onTimeUpdate={this.stime} onEnded={this.reset}></audio>
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
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song" >
            <input className="none" defaultValue="https://cs1-44v4.vk-cdn.net/p11/522d27894cd86f.mp3?extra=sV8ZY-PwvdFXD5MPRXCRP6HNQxLrcliwO7nuimdXHS-JY3obTvwgSRbdfH1R8I1V7TxUZMyyYt7as3edUHxOKw1Umlbna0zBhPXobbKYyF2zlDZ-A4XZ3X9hgtHfJQfMY_MHfzsUIdvc"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
          <div className="song">
            <input className="none" defaultValue="https://cs1-35v4.vk-cdn.net/p4/e1096b7ec19e42.mp3?extra=-j21XaNMkXNF-kDGfld0_N3jqwPgSlUy5EEW09uEYL3xU61k-kOrAnhJPKLMfiiJqzr0l5kj1SNaVb1Gqpxw7tdPXjx-jIwW8gstPCe0mzwuhudq-qC6FmLYjpSMr_rw8SqFmrVUJ9PS"></input>
            <span className="name">Wfldsjl  klasdfljlasdjfl falsdjfl34534</span>
            <i className=" status fa fa-play" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    )
  }
}

export {Panel};
