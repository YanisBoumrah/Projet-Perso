import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeCard from '../animeCard'
import styled from 'styled-components'
const Season = () => {
  const [season, setSeason] = useState([])
  const [selectedRadio, setSelectedRadio] = useState('')
  const radios = ['Winter', 'Spring', 'Summer', 'Fall']

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://api.jikan.moe/v3/user/nekomata1037/animelist/all'
    })
      .then(response => {
        console.log(response)
        setSeason(response.data.anime)

        console.log('api reçu !!!')
        console.log(response)
      })
      .catch(err => {
        console.log(err)
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
          <h5 onClick={() => setSelectedRadio('')}>Annuler recherche</h5>
        )}
      </CancelStyle>
      <WrapContent>
        <Grille>
          {season
            .filter(animes => animes.season_name.includes(selectedRadio))
            .map(animes => (
              <StyledDiv2>
                <StledImg src={animes.image_url}></StledImg>
                <StyledDiv>
                  <StyledH3>{animes.title}</StyledH3>
                </StyledDiv>
              </StyledDiv2>
            ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  )
}

export default Season

const CancelStyle = styled.div`
  margin: 0 5px 20px 15px;
  width: 100%;
`

const StyledInput = styled.input`
  transform: translate(-5px, 1px);
  margin: 0 5px 0 15px;
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

const Grille = styled.div`
  max-width: auto;
  width: 80%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 130px);
  justify-content: center;
  grid-gap: 10px;
`

const StledImg = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: none;
  margin: 15px;
`

const StyledH3 = styled.h5`
  font-family: Noto Sans Mono;
  color: grey;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const WrapContent = styled.div`
  flex: 1;
  background: #222222;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledDiv2 = styled.div`
  border-radius: 3px;
  box-shadow: 3px 3px 3px rgb(66, 64, 64), -3px -3px 3px rgba(0, 0, 0, 0.1);
`

const StyledButton = styled.button`
  height: 35px;
  margin-bottom: 12px;
  border-radius: 4px;
  outline: none;
  width: 90px;
  align: center;
  border-radius: 18px;
  text-font: Noto Sans Mono;
  font-family: Noto Sans Mono;
  color: white;
  background: red;
  border-width: 1px;
  font-size: 80%;
  margin-top: 10px;
`
/* 
const [anime, setAnime] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [playOnce, setPlayOnce] = useState(true)
  const [selectedRadio, setSelectedRadio] = useState('')

  const radios = ['Summer', 'Fall', 'Automn', 'Winter']
  useEffect(() => {
    if (playOnce) {
      axios({
        method: 'GET',
        url: 'https://api.jikan.moe/v3/user/nekomata1037/animelist/all'
      })
        .then(response => {
          console.log(response)
          setAnime(response.data.anime)
          console.log('api reçu !!!')
          console.log(response)
          setPlayOnce(false)
        })
        .catch(err => {
          console.log(err)
        })
    }
    const sortedAnime = () => {
      const animeObj = Object.keys(anime).map(i => anime[i])
      const sortedArray = animeObj.sort((a, b) => {
        return b.season_year - a.season_year
      })
      sortedArray.length = 30
      setSortedData(sortedArray)
    }
    sortedAnime()
  }, [anime, playOnce])

  return (
    <PageContainer>
      <WrapContent>
        <div className='sort-container'>
          <ul>
            {radios.map(radio => {
              return (
                <li key={radio}>
                  <input
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
          </ul>
        </div>
        <Grille>
          {sortedData.map(animes => (
            <StyledDiv2>
              <StledImg src={animes.image_url}></StledImg>
              <StyledDiv>
                <StyledH3>{animes.title}</StyledH3>
              </StyledDiv>
            </StyledDiv2>
          ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  )
}
*/

/* axios
      .get('https://api.jikan.moe/v3/user/nekomata1037/animelist/all')
      .then(response => {
        setData(response.data.anime)
        console.log('api reçu !!!', response.data.anime)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <PageContainer>
      <Grille>
        <StyleD className='anime'>
          {data.map(anime => (
            <StyledDiv>
              <Imgs src={anime.image_url} alt='img'></Imgs>
            </StyledDiv>
          ))}
        </StyleD>
      </Grille>
    </PageContainer>
  )
}

const StyleD = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Grille = styled.div`
  max-width: 1300px;
  width: 80%;
  height: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  grid-gap: 20px;
`

const StledImg = styled.img`
  width: 300px;
  height: 350px;
  border-radius: 10px;
`
const StyledP = styled.p`
  font-family: Noto Sans Mono;
  color: white;
`
const StyledH3 = styled.h5`
  font-family: Noto Sans Mono;
  color: white;
`

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const WrapContent = styled.div`
  flex: 1;
  background: #222222;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 10px 10px 10px;
`
const Imgs = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 10px;
  margin: 15px;
`  */
