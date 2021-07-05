import React from 'react'
import { StyledHeader } from './Header.elements'

const Header = props => {
    return (
       <StyledHeader>{props.children}</StyledHeader>
    )
}

export default Header
