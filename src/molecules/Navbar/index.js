import React, {useContext} from 'react'
import {FaBars} from 'react-icons/fa'
import { auth } from '../../firebase/firebase.utils'
import {UserContext} from './../../context/UserContext'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks
 } from './NavbarElements'
 import {StandardButton, ButtonContainer }from '../../atoms/StyledComponents'

const Navbar = ({toggle}) => {
    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOut = () => {
        console.log('signout clicked')
        auth.signOut();
        setCurrentUser(null);
    }

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
                {
                    currentUser ?
                   (<NavItem>
                        <NavLinks to="/engineer">Projects</NavLinks>
                    </NavItem>)
                    :
                    (<NavItem>
                        <NavLinks to="/sign-up">Sign Up</NavLinks>
                    </NavItem>)
                }
                </NavMenu>
                <ButtonContainer>
                {
                    currentUser ?
                   ( <StandardButton onClick={signOut}>Sign Out</StandardButton>)
                    :
                    (<StandardButton to='/sign-in'>Sign In</StandardButton>)
                }
                </ButtonContainer>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
