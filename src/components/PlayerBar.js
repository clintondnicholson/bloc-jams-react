import React, { Component } from 'react';

class PlayerBar extends Component {
  render () {
    return (
      <section className="player-bar">
        <input type="range"
               className="slider"
               value={(this.props.currentTime / this.props.duration) || 0}
               max="100"
               min="1"
               step="0.01"
               onChange={this.props.handleTimeChange}
        />
        <span className="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="ion-skip-backward"></span>
          </button>
          <button className="play-pause" onClick={this.props.handleSongClick} >
              <span className={this.props.isPlaying ? 'ion-pause' : 'ion-play'}></span>
           </button>
           <button id="next" onClick={this.props.handleNextClick}>
             <ion-icon name="skip-forward"></ion-icon>
           </button>
         </span>
         <span className="time-control">
           <span className="current-time">{this.props.formatTime(this.props.currentTime)}</span>
           <p>/</p>
           <span className="total-time">{this.props.formatTime(this.props.duration)}</span>
         </span>
         <span class="volume-control">
             <input
               type="range"
               className="seek-bar"
               defaultValue="this.props.currentVolume"
               max="1"
               min="0"
               step="0.01"
               onChange={this.props.handleVolumeChange}
             />
           <span className="icon ion-volume-high"></span>
         </span>
      </section>
    );
  }
}

export default PlayerBar;
