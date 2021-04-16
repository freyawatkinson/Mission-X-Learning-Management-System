import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='../Pages/Home' activeStyle> 
        Home 
        </NavLink>
        <NavLink to='/Features' activeStyle> 
        Features
        </NavLink>
        <NavLink to='/Teachers' activeStyle> 
        Teachers
        </NavLink>
        </NavMenu>
        <NavBtn>
        <NavBtnLink to='../Pages/LoginSignup'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;

