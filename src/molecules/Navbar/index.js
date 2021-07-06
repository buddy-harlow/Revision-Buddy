import React from 'react'
import {FaBars} from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
 } from './NavbarElements'
 import StdBtn from '../../atoms/std-btn'

const Navbar = ({toggle}) => {

    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    Mix Buddy
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">About</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="discover">Discover</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="signup">Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                <StdBtn slug='/sign-in'>Sign In</StdBtn>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
