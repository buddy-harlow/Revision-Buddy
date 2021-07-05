import React from 'react'
import { Container } from './GeneralContainer.elements'

const GeneralContainer = props => {
    return (
        <Container>{props.children}</Container>
    )
}

export default GeneralContainer
