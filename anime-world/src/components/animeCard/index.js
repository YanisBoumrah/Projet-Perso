import React from 'react'
import styled from 'styled-components'

const AnimeCard = props => {
  const { anime } = props
  console.log(anime)
  return (
    <FormD>
      <Imgs src={anime.image_url} alt='img'></Imgs>
      <input type='text' name='search'required />
        <label for='search'>
          <span>Search</span>
        </label>
    </FormD>
  )
}
const Imgs = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 10px;
  margin-left: 50px;
`
const FormD = styled.div`

`
export default AnimeCard



const StyledInput= styled.input`


`
/* useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://kitsu.io/api/edge/anime',
      params: {
        offset: valueOfset * currentPage
      }
    })
      .then(response => {
        console.log(response)
        setAnime(response.data.data.data.attributes)
        setPages(response.data.offset / valueOfset)
        console.log('api reçu !!!')
        console.log(response)
        console.log(`current page : ${currentPage}`)
        console.log(`pages : ${pages}`)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <PageContainer>
      <WrapContent>
        <Grille>
          {anime.map(animes => (
            <StyledDiv2>
              <StyledDiv>
                <StyledH3>{animes.abbreviatedTitles}</StyledH3>
              </StyledDiv>
            </StyledDiv2>
          ))}
        </Grille>
      </WrapContent>
    </PageContainer>
  )
} */
