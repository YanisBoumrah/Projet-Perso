import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import axios from 'axios'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'

const Manga = () => {
  const [anime, setAnime] = useState([])
  const [sortedData, setSortedData] = useState([])
  const [search, setSearch] = useState('')
  const [playOnce, setPlayOnce] = useState(true)
  const history = useHistory()

  const handleClick = key => {
    history.push(`/details/${key}`)
  }
  useEffect(() => {
    if (playOnce) {
      axios({
        method: 'GET',
        url: 'https://api.jikan.moe/v3/user/nekomata1037/animelist/all'
      }).then(response => {
        setAnime(response.data.anime)

        setPlayOnce(false)
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
        <StyledTab>
          <tr>
            <td>
              <StyledIn
                type='text'
                placeholder='Search... '
                onChange={e => {
                  setSearch(e.target.value)
                }}
              />
            </td>
            <td>
              <AiOutlineSearch size='20' color='black' />
            </td>
          </tr>
        </StyledTab>
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

export default Manga

// styled components

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.div`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  background-color: #222222;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  :focus {
    outline: none;
  }
`
const StyledTab = styled.table`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`
const StyledIn = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  background-color: #222222;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  color: #fff;
  :focus {
    outline: none;
  }
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
