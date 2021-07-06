import React from 'react'
import { BannerImage } from './HeroImage.elements'

const HeroImage = props => {
    return (
        <BannerImage>{props.children}</BannerImage>
    )
}

export default HeroImage
