import React from 'react';
import { getToken } from '../util/common';
import {
    Nav, NavBtn,
    NavBtnLink, NavLink,
    NavMenu
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
      {(getToken()) ?
        <NavBtn>
          <NavBtnLink to="/dashboard">Dashboard</NavBtnLink>
          <NavBtnLink to="/logout">Logout</NavBtnLink>
        </NavBtn>
        : 
        <NavBtn>
          <NavBtnLink to='/login'>Log in/Sign up</NavBtnLink>
        </NavBtn>
      }
    </Nav>
  );
};

export default Navbar;
