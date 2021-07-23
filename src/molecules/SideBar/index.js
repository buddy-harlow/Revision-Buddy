import React from 'react'
import PropTypes from 'prop-types'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,

} from './SideBarElements'

const SideBar = ({ isOpen, toggle }) => (
  <SidebarContainer isOpen={isOpen} onClick={toggle}>
    <Icon onClick={toggle}>
      <CloseIcon />
    </Icon>
    <SidebarWrapper>
      <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to="discover" onClick={toggle}>
          Discover
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Signup
        </SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/signin">Sign In</SidebarRoute>
      </SideBtnWrap>
    </SidebarWrapper>
  </SidebarContainer>
)

SideBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
}
export default SideBar
