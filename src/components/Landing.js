import React from 'react';

const Landing = () => (
  <section className="library">
      <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/austin-neill-247234-unsplash.jpg") } className="landingpic img-responsive d-none d-lg-block" height="auto" width="100%" alt="blocJams Background"/>
        <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/austin-neill-247234-unsplash.jpg") } className="container-fluid d-block d-md-none" height="100%" alt="blocJams Background"/>
        <h1 className="display-1 d-none d-lg-block">TURN<br />THE<br />MUSIC<br />UP!</h1>

    <section className="selling-points">
      <div className="container">
        <div className="row">
          <div className="point col-12 col-md-4 p-3 p-md-5">
            <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/BlocJams-05.png") } width="200px" height="200px" alt="choose your music icon"/>
            <h2 className="point-title">Choose your music!</h2>
            <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
          </div>
          <div className="point col-12 col-md-4 p-3 p-md-5">
            <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/no-ads-05.png") } width="200px" height="200px" alt="ad free icon"/>
             <h2 className="point-title">Unlimited, steaming, ad-free</h2>
             <p className="point-description">No arbitrary limits. No distractions.</p>
          </div>
          <div className="point col-12 col-md-4 p-3 p-md-5">
            <img src={ require("/Users/chapelmedia/Bloc/bloc-jams-react/src/mobile-friendly-05.png") } width="200px" height="200px" alt="mobile enabled icon"/>
            <h2 className="point-title">Mobile enabled</h2>
            <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
          </div>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;
