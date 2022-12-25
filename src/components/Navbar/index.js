import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import logo from "../../images/logo-no-background.png";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src={logo} width={110} alt="logo"/> 
        </NavLink>
        {/* <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavBtnLink to="/">home</NavBtnLink>  */}
{/* 
        </NavMenu> */}
        {/* <NavBtn>
          <NavBtnLink to="/">home</NavBtnLink> 
        </NavBtn> */}
      </Nav>
    </>
  )
}

export default Navbar