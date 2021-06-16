import React from 'react'
import Banner from '../../images/Hero.jpg'
import {HeroImage, HeroContainer, HeroText} from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <HeroImage src={Banner} alt="Banner showing logic session"/>
                <HeroText>A project management platform for audio engineers</HeroText>
            </HeroContainer>
        </div>
    )
}

export default Hero
