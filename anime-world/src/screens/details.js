import React from 'react'
import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'
import { AiOutlineArrowLeft } from 'react-icons/ai'
const Details = () => {
  const param = useParams()
  const [detail, setDetail] = useState({})
  const history = useHistory()

  useEffect(() => {
    axios.get(`https://api.jikan.moe/v3/anime/${param.id}`).then(response => {
      setDetail(response.data)
      console.log(response.data)
    })
  }, [param.id])

  return (
    <StyledB>
      <ContainerD>
        <ReturnBut onClick={() => history.goBack()}>
          <AiOutlineArrowLeft color='#58dd94' size='2rem' />
        </ReturnBut>
        <Wrapper>
          <WrapContentImg>
            <StyledImg src={detail.image_url}></StyledImg>
          </WrapContentImg>
          <WrapContent>
            <StyledH1>{detail.title}</StyledH1>
            <StyledHr />
            <StyledH2>Storyline</StyledH2>
            <StyledP>{detail.synopsis}</StyledP>
            <StyledHr />
            <StyledUl>
              <StyledLi>Release Date :{detail.title} </StyledLi>
              <StyledLi>Public vote :{detail.score} /10</StyledLi>
              <StyledLi>Rating :{detail.rating} /10</StyledLi>
            </StyledUl>
          </WrapContent>
        </Wrapper>
      </ContainerD>
    </StyledB>
  )
}

export default Details

/*Styled Components*/

const StyledB = styled.div`
  height: 100%;
  padding-top: 40px;
  @media (min-width: 40em) {
    height: 100vh;
    width: 100%;
    padding-top: 60px;
  }
`

const ContainerD = styled.div`
  padding: 3rem 0;
  margin-inline: auto;
  width: min(90%, 80rem);
`
const ReturnBut = styled.button`
  margin-bottom: 15px;
  margin-top: -15px;
  display: block;
  background: none;
  border: none;
  @media (min-width: 40em) {
    display: block;
    background: none;
    border: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 40em) {
    display: flex;
    flex-direction: row;
    * {
      flex-basis: 100vh;
    }
    * {
      margin-left: 2em;
    }
  }
`

const WrapContentImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`
const WrapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 40em) {
    display: block;
    justify-content: center;
    align-items: center;
  }
`

const StyledImg = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 15px;
  @media (min-width: 40em) {
    display: block;
    width: 70%;
    border-radius: 15px;
    margin-left: 140px;
  }
`

const StyledH1 = styled.h1`
  text-transform: uppercase;
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 20px;
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.color};

  @media (min-width: 40em) {
    text-transform: uppercase;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 25px;
    display: flex;
    margin: 0 0 10px 20px;
    justify-content: center;
    color: ${props=>props.theme.color};
    padding-top: 30px;
    max-width: 40rem;
  }
`
const StyledH2 = styled.h2`
  font-family: 'Nunito', sans-serif;
  font-weight: bold;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  color: ${props=>props.theme.color};
  margin-bottom: -5px;

  @media (min-width: 40em) {
    margin-bottom: -30px;
    margin-left: 60px;
    font-family: 'Nunito', sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: ${props=>props.theme.color};
  }
`
const StyledP = styled.p`
  font-size: 10px;
  font-family: Open Sans;
  color: ${props=>props.theme.color};
  justify-content: center;
  @media (min-width: 40em) {
    font-size: 15px;
    font-family: Open Sans;
    color: ${props=>props.theme.color};
    justify-content: center;
    padding: 30px 30px 15px 30px;
  }
`

const StyledHr = styled.hr`
  width: 80%;
  height: 0.5px;
  background-color: ${props=>props.theme.color};
  margin-right: 40px;
  @media (min-width: 40em) {
    width: 80%;
    height: 1px;
    background-color: ${props=>props.theme.color};
    margin: 0 0px 0px 60px;
  }
`
const StyledUl = styled.ul`
  padding: 0;
`
const StyledLi = styled.li`
  line-height: 1.5rem;
  list-style: none;
  font-size: 10px;
  font-family: Open Sans;
  color: ${props=>props.theme.color};
  @media (min-width: 40em) {
    line-height: 1.5rem;
    font-size: 15px;
    font-family: Open Sans;
    color: ${props=>props.theme.color};
    width: 90%;
    justify-content: center;
  }
`
