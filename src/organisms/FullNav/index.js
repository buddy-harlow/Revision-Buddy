import React, { useState } from 'react'
import Navbar from '../../molecules/Navbar'
import SideBar from '../../molecules/SideBar'

const FullNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>

  )
}

export default FullNav
