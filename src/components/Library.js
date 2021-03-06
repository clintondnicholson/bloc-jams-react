import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: albumData
    };
  }

  render() {
    return (
      <div className="container">
        <section className='library row'>
          {
            this.state.albums.map( (album, index) =>
              <Link to={`/album/${album.slug}`} className="col-sm-6" key={index}>
                <img src={album.albumCover} alt={album.title} />
                <div className="album-title">{album.title}</div>
                <div className="album-artist">{album.artist}</div>
              </Link>
            )
          }
        </section>
    </div>
    );
  }
}

export default Library;
