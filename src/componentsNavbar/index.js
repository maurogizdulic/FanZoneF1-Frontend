import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './navbarElements';
import { getToken, removeUserSession } from '../util/common';
import Logout from '../components/logout';

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
