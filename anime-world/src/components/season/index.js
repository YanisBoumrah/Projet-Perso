import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useHistory } from 'react-router'

const Season = () => {
  const [season, setSeason] = useState([])
  const [selectedRadio, setSelectedRadio] = useState('')
  const radios = ['Winter', 'Spring', 'Summer', 'Fall']
  const history = useHistory()

  const handleClick = key => {
    history.push(`/details/${key}`)
  }
  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v3/user/nekomata1037/animelist/all'
    }).then(response => {
      setSeason(response.data.anime)
    })
  }, [])

  return (
    <PageContainer>
      <StyledRadio className='sort-container'>
        <StyledUl>
          {radios.map(radio => {
            return (
              <li key={radio}>
                <StyledInput
                  type='radio'
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={e => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            )
          })}
        </StyledUl>
      </StyledRadio>
      <CancelStyle>
        {selectedRadio && (
          <StyledButton onClick={() => setSelectedRadio('')}>
            <StyledP>Annuler recherche</StyledP>
          </StyledButton>
        )}
      </CancelStyle>
      <WrapContent>
        <Grille>
          {season
            .filter(animes => animes.season_name.includes(selectedRadio))
            .map(animes => (
              <StyledDiv2
                key={animes.mal_id}
                onClick={() => {
                  handleClick(animes.mal_id)
                }}
              >
                <StyledImg src={animes.image_url}></StyledImg>
                <StyledDiv>
                  <StyledH5>{animes.title}</StyledH5>
                </StyledDiv>
              </StyledDiv2>
            ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  )
}

export default Season

// Les diff??rents styles

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const CancelStyle = styled.div`
  display: flex;
  margin: auto;
  margin-bottom: 20px;
  margin-top: -10px;

  justify-content: center;
`
const StyledButton = styled.button`
  color: #222222;
  border: 4px solid #222222;
  border-radius: 50px;
  width: 100%;
  width: 150px;
`
const StyledP = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
`
const StyledInput = styled.input`
  margin: auto;
  margin-left: 5px;
  margin-right: 10px;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-around;
`

const StyledRadio = styled.div`
  padding: 8px;
  border-radius: 15px;
  background: #282c34;
  color: #61dafb;
  box-shadow: 0 2px 2px rgba(107, 91, 91, 0.3);
  margin: -10px 0 30px 0;
  display: flex;
  justify-content: center;
`

const WrapContent = styled.div``

const Grille = styled.div`
  max-width: auto;
  width: 100%;
  height: auto;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 10px;
`
const StyledDiv2 = styled.div`
  border-radius: 10px;
  display: flex;
  flex: 4 1;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background: #3d3939;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    transform: scale(1.12);
    box-shadow: 8px 8px 8px black;

    z-index: 2;
  }
`

const StyledImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`

const StyledH5 = styled.h5`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

