import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className='aboutContainer'>
      <h1 className='bigTitle tac-one-regular'>Musiki</h1>
      <div className='aboutText kode-mono-400'>
        <p className='aboutT1'>Celebrating Congo's vibrant musical heritage and future, sharing diverse and authentic  music. Musiki is dedicated to bringing you the best of Congolese music, free from western norms</p>
        <div className="contact-section">
        <p className='aboutT2'>Contact us!</p>
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub Logo"
          width="40"
          height="40"
          className="github-logo"
        />
      </div>
      </div>
    </div>
  );
};

export default About;
