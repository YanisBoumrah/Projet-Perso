import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AnimeCard from '../animeCard'
import styled from 'styled-components'
const Manga = () => {
  const [anime, setAnime] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [search, setSearch] = useState('')
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
          console.log('api reçu !!!', response)

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

      setSortedData(sortedArray)
    }
    sortedAnime()
  }, [anime, playOnce])

  return (
    <PageContainer>
      <StyledInput>
        <StyledIn
          type='text'
          placeholder='Search... '
          onChange={e => {
            setSearch(e.target.value)
          }}
        />
      </StyledInput>
      <WrapContent>
        <Grille>
          {sortedData
            .filter(animes => {
              if (search == '') {
                return animes
              } else if (
                animes.title.toLowerCase().includes(search.toLowerCase())
              )
                return animes
            })
            .map(animes => (
              <StyledDiv2>
                <StledImg src={animes.image_url}></StledImg>
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

export default Manga

const StyledInput = styled.div`
  padding: 8px;
  border-radius: 15px;
  background: #222222;
  box-shadow: 0 2px 2px rgba(107, 91, 91, 0.3);
  margin: -10px 0 30px 0;
  display: flex;
  justify-content: center;
`
const StyledIn = styled.input`
  display: flex;
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

const StyledH5 = styled.h5`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  text-overflow: ellipsis;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const WrapContent = styled.div`
  flex: 1;
  background: #222222;
  border-radius: 15px;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`

const StyledDiv2 = styled.div`
  border-radius: 3px;
  box-shadow: 3px 3px 3px rgb(66, 64, 64), -3px -3px 3px rgba(0, 0, 0, 0.1);
`
