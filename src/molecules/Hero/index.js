import React from 'react'
import HeroContainer from '../../atoms/Hero-Container'
import HeroImage from '../../atoms/Hero-Image'
import StdBtn from '../../atoms/std-btn'
import HeroHeadline from '../../atoms/HeroHeadline'


const Hero = () => {
    return (
        <div>
            <HeroImage>
            <HeroContainer>
                <HeroHeadline>A project management platform for audio engineers</HeroHeadline>
                <StdBtn slug="/">Sign Up</StdBtn>
            </HeroContainer>
            </HeroImage>
        </div>
    )
}

export default Hero
