import React, { Component } from 'react';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props){
    super(props);


    const album = albumData.find( album => {
      return album.slug === this.props.match.parms.slug
    });

    const song-row = this.state.album.songs.map(song, index) =>
      const song-details = {};
      song-details[song[i]] = number;
      song-details[song.title] = song.title;
      song-details[song.duration] = duration/60;
      return song-row;



    this.state = {
      album : album
    };
  }

  render() {
    return(
      <section className='album'>
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover} />
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody>
            <tr>
              <td className="song-number">{album.songs.index}</td>
              <td className="song-title">{album.songs.title}</td>
              <td className="song-duration">{album.songs.duration}</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
}

export default Album;
