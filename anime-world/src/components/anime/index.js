import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeCard from '../animeCard'
import styled from 'styled-components'
const Manga = () => {
  const [anime, setAnime] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [playOnce, setPlayOnce] = useState(true)
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

export default Manga

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
const StyledP = styled.p`
  font-family: Noto Sans Mono;
  color: white;
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

const StyledDiv1 = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 7px;
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
