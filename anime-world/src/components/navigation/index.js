import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <NavBar className='navigation'>
      <NavL>
        <NavLink exact to='/' activeClassName='nav-active'>
          Home
        </NavLink>
      </NavL>
      <NavL>
        <NavLink exact to='/categorie' activeClassName='nav-active'>
          Categorie
        </NavLink>
      </NavL>
    </NavBar>
  )
}

export default Navigation

// styled components

const NavBar = styled.div`
  margin: 60px 0 30px 0;
  display: flex;
  justify-content: center;
`
const NavL = styled.a`
  margin: 10px;
  padding: 10px;
  position: relative;
  .nav-active {
    &:after {
      content: '';
      width: 85%;
      border-radius: 6px;
      height: 5px;
      background: #61dafb;
      position: absolute;
      bottom: 1px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
