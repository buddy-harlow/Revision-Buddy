import React from 'react'
import styled from 'styled-components'

const HeroText = styled.h1`
text-transform: uppercase;
text-align: center;
color: white;
display: flex;
width: 100%;
margin: auto;
align-items:center;
justify-content:center;
padding-bottom: 40px;

`

const HeroHeadline = props => {

    console.log(props.children)

 
    return (
        <HeroText>{props.children}</HeroText>
        
    )
}

export default HeroHeadline
