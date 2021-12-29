import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';

const Navbar = () => {
  return (

    <Nav>
      <NavMenu>
        <NavLink to='/latest' activeStyle>
          Latest
        </NavLink>
        <NavLink to='/schedule' activeStyle>
          Schedule
        </NavLink>
        <NavLink to='/standings' activeStyle>
          Standings
        </NavLink>
        <NavLink to='/betting' activeStyle>
          Betting
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/login'>Log in/Sign up</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
