import React, { Component } from 'react';
import albumData from './../data/albums';
import PlayerBar from './PlayerBar';

class Album extends Component {
  constructor(props){
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album : album,
      currentSong: album.songs[0],
      currentTime: 0,
      duration: album.songs[0].duration,
      isPlaying: false
    };

    this.audioElement = document.createElement('audio');
    this.audioElement.src = album.songs[0].audioSrc;
    };

    componentDidMount() {
      this.eventListeners = {
        timeupdate: e => {
          this.setState({ currentTime: this.audioElement.currentTime });
        },
        durationchange: e => {
          this.setState({ duration: this.audioElement.duration });
        }
      };
      this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
      this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    }

    componentWillUnmount() {
     this.audioElement.src = null;
     this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
     this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    }

    setSong(song) {
     this.audioElement.src = song.audioSrc;
     this.setState({ currentSong: song });
    }

    play() {
      this.audioElement.play();
      this.setState({ isPlaying: true });
    }

    pause() {
      this.audioElement.pause();
      this.setState({ isPlaying: false });
    }

    handleSongClick(song) {
       const isSameSong = this.state.currentSong === song;

       if (this.state.isPlaying && isSameSong) {
           this.pause();
         } else {
           if (!isSameSong) { this.setSong(song); }
           this.play();
       }
      }

    handlePrevClick() {
    const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
    const newIndex = Math.max(0, currentIndex - 1);
    const newSong = this.state.album.songs[newIndex];
    this.setSong(newSong);
    this.play(newSong);
    }

    handleNextClick() {
      const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
      const numberOfSongs = this.state.album.songs.length - 1
      const newIndex = Math.min(numberOfSongs, currentIndex + 1);
      const newSong = this.state.album.songs[newIndex];
      this.setSong(newSong);
      this.play(newSong);
    }

    handleTimeChange(e) {
     const newTime = this.audioElement.duration * e.target.value;
     this.audioElement.currentTime = newTime;
     this.setState({ currentTime: newTime });
    }

    handleVolumeChange(e) {
      const newVolume = e.target.value;
      this.audioElement.volume = newVolume;
      this.setState({currentVolume: newVolume});
    }

    formatTime(seconds) {
      if (isNaN(seconds)) return "-:--";

      let date = new Date(null);
      date.setSeconds(seconds);
      return date.toISOString().substr(14,5);
    }


  render() {
    return(
      <section className= 'album'>
        <div className= "container">
          <div className= "row">
              <img src={this.state.album.albumCover} className= "col-6 album-cover-art" alt="album art" />
            <div className="col-6 album-info">
              <div className="album-details">
                <h1 id="album-title">{this.state.album.title}</h1>
                <h2 className="artist">{this.state.album.artist}</h2>
                <div id="release-info">{this.state.album.releaseInfo}</div>
              </div>
              <table className="col-12">
                <tbody>
                  {
                    this.state.album.songs.map( (song, index)  =>
                      <tr className="song" key={index} onClick={() => this.handleSongClick(song)}>
                        {/* <td className="song-number">{index + 1}</td> */}
                        <td className="ion-ios-play"></td>
                        {/* <td className="ion-ios-pause"></td> */}
                        <td className="song-title">{song.title}</td>
                        <td className="song-duration">{this.formatTime(song.duration)} </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <PlayerBar
           isPlaying={this.state.isPlaying}
           currentSong={this.state.currentSong}
           currentTime={this.audioElement.currentTime}
           duration={this.audioElement.duration}
           currentVolume={this.state.currentVolume}
           handleSongClick={() => this.handleSongClick(this.state.currentSong)}
           handlePrevClick={() => this.handlePrevClick()}
           handleNextClick={() => this.handleNextClick()}
           handleTimeChange={(e) => this.handleTimeChange(e)}
           handleVolumeChange={(e) => this.handleVolumeChange(e)}
           formatTime={(seconds) => this.formatTime(seconds)}
         />
      </section>
    )
  }
}

export default Album;
