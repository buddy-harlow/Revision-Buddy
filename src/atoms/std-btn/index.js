import React from 'react'
import { StandardButton, BtnLink } from './StdBtn.elements'

const StdBtn = props => {
    const hasType = props.type;
    if(hasType){
        return (
            <StandardButton>
                <BtnLink to={props.slug} type={props.type}>{props.children}</BtnLink>
            </StandardButton>
        )
    } else {
        return (
            <StandardButton>
                <BtnLink to={props.slug}>{props.children}</BtnLink>
            </StandardButton>
        )
    }
    
}

export default StdBtn
