import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
          <nav className="navbar navbar-expand-lg">
            <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/BlocJamsWhite.png") } className="logo" href="/" alt="BlocJAMSLogo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
                <a className="nav-item nav-link" href="/library">Library</a>
=======
          <nav class="navbar navbar-expand-lg">
            <img src="/Users/chapelmedia/Bloc/bloc-jams-react/public/assets/images/BlocJamsWhite.png" href="/" alt=""></img>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/library">Library</a>
>>>>>>> c129ddb088bf5f618118c2bd0ca90cb0b6fa5daf
              </div>
            </div>
          </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
