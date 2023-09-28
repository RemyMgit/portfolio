import React from 'react';
import './About.css';
import Avatar from "../../assets/Avatar-moi.svg";
import CV from '../../assets/CV_Remy.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(CV, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">A propos de moi</h2>

            <div className="about__container grid">
                <img src={Avatar} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! Je suis Rémy, j'habite en France près de Bordeaux. J'ai obtenu un Bac STI2D option SIN en 2013 puis laissé le developpement de côté avant d'y revenir en 2023 au cours d'une formation effectué avec OpenClassrooms.<br /><br />
                            Mon but aujourd'hui est de développer mes compétences en tant que developpeur web.<br /><br />
                            Voici quelques technologie avec lesquelles j'ai travaillé récemment:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript</li>
                            <li>SCSS</li>
                            <li>React</li>
                            <li>Node.js</li> 
                            <li>HTML</li>  
                            <li>CSS</li>   
                            <li>MongoDB</li>          
                        </ul>
                        <button className="btn" onClick={downloadResume}>Mon CV</button>
                    </div>
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About