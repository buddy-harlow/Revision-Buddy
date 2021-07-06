import React from 'react'
import {Container} from './HeroContainer.elements'

const HeroContainer = props => {
    return (
        <Container>{props.children}</Container>
    )
}

export default HeroContainer
