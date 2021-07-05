import React from 'react'
import {HeroImage, HeroContainer, HeroText} from './HeroElements'
import StdBtn from '../../atoms/std-btn'


const Hero = () => {
    return (
        <div>
            <HeroImage>
            <HeroContainer>
                <HeroText>A project management platform for audio engineers</HeroText>
                <StdBtn slug="/">Sign Up</StdBtn>
            </HeroContainer>
            </HeroImage>
        </div>
    )
}

export default Hero
