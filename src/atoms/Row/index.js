import React from 'react'
import {SectionContainer} from './Row.Elements'

const Row = props => {
    return (
        <SectionContainer>{props.children}</SectionContainer>
    )
}

export default Row
