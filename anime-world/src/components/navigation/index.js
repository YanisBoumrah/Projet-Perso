import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

const Navigation = () => {
  return (
    <NavBar className="navigation">
      <NavL>
      <NavLink exact to="/" activeClassName="nav-active" >
       Home 
      </NavLink></NavL>
      <NavL><NavLink exact to="/about" activeClassName="nav-active" >
       About 
      </NavLink></NavL>
    </NavBar>
  );
};
  
const NavBar = styled.div`
margin: 26px 0;
  display: flex;
  justify-content:center;
`
const NavL = styled.a`
margin: 10px;
    padding: 10px;
    position: relative;
    .nav-active{
    &:after {
      content: "";
        width: 85%;
        border-radius:6px ;
        height: 5px;
        background: blue  ;
        position: absolute;
        bottom: 1px;
        left: 50%;
        transform: translateX(-50%);

    }}
`

export default Navigation;


/* .navigation {
  margin: 26px 0;
  display: flex;

  a {
    margin: 10px;
    padding: 10px;
    position: relative;
  }
  .nav-active {
    &::after {
      content: "";
      width: 85%;
      height: 5px;
      background: $color-1;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
*/