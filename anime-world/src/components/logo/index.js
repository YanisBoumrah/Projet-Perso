import React from 'react'
import styled from 'styled-components'
import back1 from '../assets/back1.jpg'

const Logo = () => {
  return (
    <LogoForm className='logo'>
      <StyledImg src='./img/logo.png' alt='logo' />
      <StyledTxt>Anime World</StyledTxt>
    </LogoForm>
  )
}

const LogoForm = styled.div`
  display: flex;
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translate(-50%);
  background: url(${back1}) center/cover;
  height: 60px;
  width: 200px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 1px 2px 0px rgba(51, 51, 51, 0.5);
`

const StyledImg = styled.img`
  height: 34px;
  width: 34px;
  margin-right: 10px;
  object-fit: cover;
`

const StyledTxt = styled.h3`
  color: white;
  letter-spacing: 1px;
`

export default Logo
