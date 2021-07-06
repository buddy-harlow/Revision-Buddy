import React from 'react'
import {SectionContainer} from './Row.Elements'

const SingleColumn = props => {
    return (
        <SectionContainer>{props.children}</SectionContainer>
    )
}

export default SingleColumn
