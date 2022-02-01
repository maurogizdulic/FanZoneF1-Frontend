import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    
    width: 100%;
    //line-height: 100%;
    margin-top: 2%;
    height: 75px;
    border-radius: 8px;
    background: #FF1801;
    display: flex;
    text-align: center;
    justify-content: space-between;
  /* Third Nav */
  /* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
    
display:block;
border-radius: 8px;
margin: 20px;
padding-left: 4%;
margin-right: 10%;
padding-right: 4%;
height:100%;
// Za linkove unutar navbara
  color: white;
  display: flex;
  text-decoration: none;
 // padding: 10%;
 // height: 100%;
  cursor: pointer;
  align-items: center;
  font-size: 20px;
  &.active {
    color: #000000;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: black;
    color: white;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 5%;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 8px;
  background: #808080;
  padding: 10px 22px;
  color: white;
  outline: none;
  border: none;
  cursor: pointer;
 // transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;

