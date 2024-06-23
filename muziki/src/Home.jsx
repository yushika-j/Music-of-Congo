import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import FerreGola from './assets/ferre gola.jpg';
import Franco from './assets/franco.jpg';
import PapaWemba from './assets/papawemba.jpg';
import Samba from './assets/samba.jpg';
import Werrason from './assets/werrason.jpg';
import './Home.css';

const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div className="body">
            <div className="marquee-container">
                <h1 className="marquee-text">
                    AFROBEAT—HIGHLIFE—JUJU—MAKOSSA—MBALAX—SOUKOUS—BENGA—TAARAB—KWAITO—FUJI—GENGE—ZOUK—COUPE DECALE—AFRO HOUSE—BONGO FLAVA—CHIMURENGA—AFRO POP—AFRICAN JAZZ—AFRO-SOUL—GOSPEL MUSIC—AFROBEAT—HIGHLIFE—JUJU—MAKOSSA—MBALAX—SOUKOUS—BENGA—TAARAB—KWAITO—FUJI—GENGE—ZOUK—COUPE DECALE—AFRO HOUSE—BONGO FLAVA—CHIMURENGA—AFRO POP—AFRICAN JAZZ—AFRO-SOUL—GOSPEL MUSIC
                </h1>
            </div>

            <div className="home-video-container julius-sans-one-regular">
                <div className="left">
                    WE HAVE SOME GOOD MUSIKI
                </div>
                <div className="right">
                    <Slider {...settings}>
                        <div>
                            <img src={Samba} alt="Samba" />
                        </div>
                        <div>
                            <img src={FerreGola} alt="Ferre Gola" />
                        </div>
                        <div>
                            <img src={Franco} alt="Franco" />
                        </div>
                        <div>
                            <img src={PapaWemba} alt="Papa Wemba" />
                        </div>
                        <div>
                            <img src={Werrason} alt="Werrason" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default Home;
