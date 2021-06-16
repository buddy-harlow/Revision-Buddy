import React from 'react'
import {HeroImage, HeroContainer, HeroText, HeroButton} from './HeroElements'

const Hero = () => {
    return (
        <div>
            <HeroImage>
            <HeroContainer>
                <HeroText>A project management platform for audio engineers</HeroText>
                <HeroButton>Sign Up</HeroButton>
            </HeroContainer>
            </HeroImage>
        </div>
    )
}

export default Hero
