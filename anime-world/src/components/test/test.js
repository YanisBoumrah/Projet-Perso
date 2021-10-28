import React from 'react'
import styled from 'styled-components'
import { AiOutlineSearch } from 'react-icons/ai'
const Test = () => {
  return (
    <StyledInput>
      <StyledTab>
        <StyledTr>
          <StyledTd>
            <StyledIn type='text' placeholder='Search... ' />
          </StyledTd>
          <StyledTd>
          <AiOutlineSearch size='20' color='black' />
          </StyledTd>
        </StyledTr>
      </StyledTab>
    </StyledInput>
  )
}

export default Test
const StyledInput = styled.div`
  margin: auto;
  margin-top: 20%;
  position: relative;
  width: 300px;
  height: 42px;
  border: 4px solid #2986b9;
  padding: 0px 10px;
  border-radius: 50px;
`
const StyledTab = styled.table`
  width: 100%;
  height: 100%;
  vertical-align: middle;
`
const StyledImg = styled.img`
  max-width: 15px;
`
const StyledTr = styled.tr``
const StyledTd = styled.td``

const StyledIn = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  padding: 0px 5px;
  border-radius: 50px;
  background-color:#2986b9;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  :focus {
    outline: none;
  }
`

/* const Imgs = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 10px;
  margin-left: 50px;
`
const FormD = styled.div`
  width: 50%;
  position: relative;
  height: 50px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  color: #d3d3d3;
  border: none;
  padding-top: 20px;
  
`
const StyledLabel = styled.label`
position :absolute;
bottom: 0px;
left: 0%;
width:100%;
height:100%;
pointer-event:none;
border-bottom:1px solid black;
&::after{
    content:"";
    position:absolute;
    left:0px;
    bottom:-1px;
    height:100%;
    width: 100%;
    border-bottom:3px solid #5fa8d3
    transform: translateX(-100%)
}



`

const StyledSpan = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0px;
  
`
useEffect(() => {
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
} 
*/
