import React from 'react'
import { HeroContainer } from '../../atoms/StyledContainers'
import {
  StandardButton, ButtonContainer, HeroText, HeroImage,
} from '../../atoms/StyledComponents'

const Hero = () => (
  <div>
    <HeroImage>
      <HeroContainer>
        <HeroText>A project management platform for audio engineers</HeroText>
        <ButtonContainer>
          <StandardButton to="/">Sign Up</StandardButton>
        </ButtonContainer>
      </HeroContainer>
    </HeroImage>
  </div>
)

export default Hero
