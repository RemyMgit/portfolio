import React from 'react'
import { RiFireLine, RiCupLine, RiGroupLine, RiTrophyLine } from 'react-icons/ri';

const AboutBox = () => {
    return (
        <div className="about__boxes grid">
            <div className="about__box">
                <RiFireLine className='about__icon' />

                <div>
                    <h3 className="about__title">8</h3>
                    <span className="about__subtitle">Mois d'experience</span>
                </div>
            </div>

            <div className="about__box">
                <RiCupLine className='about__icon' />

                <div>
                    <h3 className="about__title">8</h3>
                    <span className="about__subtitle">Repositories Github</span>
                </div>
            </div>

             {/* <div className="about__box">
                <RiGroupLine className='about__icon' />

                <div>
                    <h3 className="about__title">0</h3>
                    <span className="about__subtitle">Projets</span>
                </div>
            </div> */}
            
            <div className="about__box">
                <RiTrophyLine className='about__icon' />

                <div>
                    <h3 className="about__title">100</h3>
                    <span className="about__subtitle">Qualité de code</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox