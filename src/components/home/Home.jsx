import React from 'react';
import './Home.css';
import Avatar from "../../assets/Avatar-moi.svg";
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                <img src={Avatar} alt="" className='home__img' width='120' />
                <h1 className="home__name">Moruchon Rémy</h1>
                <span className="home__education">Je suis un Developpeur Web</span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contactez Moi</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home