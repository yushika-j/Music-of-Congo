import React from 'react';
import './App.css';
import FerreGola from './assets/ferre gola.jpg';
import Franco from './assets/franco.jpg';
import PapaWemba from './assets/papawemba.jpg';
import Samba from './assets/samba.jpg';
import Werrason from './assets/werrason.jpg';

function App() {
  return (
    <div>
      <ul className="nav-bar">
        <li><a href="home.html">Home</a></li>
        <li><a href="explore.html">Explore</a></li> {/* will contain songs/albums */}
        <li><a href="login.html">Log In</a></li>
        <li><a href="about.html">About</a></li>
      </ul>

      <div className='gallery'>
        <img src={FerreGola} alt="Ferre Gola" />
      </div>

      <div className='gallery'>
        <img src={Franco} alt="Franco" />
      </div>

      <div className='gallery'>
        <img src={PapaWemba} alt="Papa Wemba" />
      </div>

      <div className='gallery'>
        <img src={Samba} alt="Samba" />
      </div>

      <div className='gallery'>
        <img src={Werrason} alt="Werrason" />
      </div>
    </div>
  )
}

export default App;