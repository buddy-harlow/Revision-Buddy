import React from 'react'
import { StandardButton, BtnLink } from './StdBtn.elements'

const stdBtn = props => {
    return (
        <StandardButton>
            <BtnLink to={props.slug}>{props.children}</BtnLink>
        </StandardButton>
    )
}

export default stdBtn
