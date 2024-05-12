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
      <ul className="nav-bar julius-sans-one-regular">
        <div className="nav-logo">MUZIKI</div>
        <div className="nav-navigation kumbh-sans-300">
          <li><a href="home.html">HOME</a></li>
          <li><a href="explore.html">EXPLORE</a></li> {/* will contain songs/albums */}
          <li><a href="login.html">LOG IN</a></li>
          <li><a href="about.html">ABOUT</a></li>
        </div>
      </ul>

      <div className="marquee-container julius-sans-one-regular">
        <h1 className="marquee-text">AFROBEAT — HIGHLIFE — JUJU — MAKOSSA — MBALAX — SOUKOUS — BENGA — TAARAB — KWAITO — FUJI — GENGE — ZOUK — COUPE DECALE — AFRO HOUSE — BONGO FLAVA — CHIMURENGA — AFRO POP — AFRICAN JAZZ — AFRO-SOUL — GOSPEL MUSIC — AFROBEAT — HIGHLIFE — JUJU — MAKOSSA — MBALAX — SOUKOUS — BENGA — TAARAB — KWAITO — FUJI — GENGE — ZOUK — COUPE DECALE — AFRO HOUSE — BONGO FLAVA — CHIMURENGA — AFRO POP — AFRICAN JAZZ — AFRO-SOUL — GOSPEL MUSIC — AFROBEAT — HIGHLIFE — JUJU — MAKOSSA — MBALAX — SOUKOUS — BENGA — TAARAB — KWAITO — FUJI — GENGE — ZOUK — COUPE DECALE — AFRO HOUSE — BONGO FLAVA — CHIMURENGA — AFRO POP — AFRICAN JAZZ — AFRO-SOUL — GOSPEL MUSIC — AFROBEAT — HIGHLIFE — JUJU — MAKOSSA — MBALAX — SOUKOUS — BENGA — TAARAB — KWAITO — FUJI — GENGE — ZOUK — COUPE DECALE — AFRO HOUSE — BONGO FLAVA — CHIMURENGA — AFRO POP — AFRICAN JAZZ — AFRO-SOUL — GOSPEL MUSIC
        </h1>
      </div>

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