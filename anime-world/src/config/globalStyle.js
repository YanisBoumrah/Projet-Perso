import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  


    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:'Roboto' , sans-serif;
  }
  body {
    margin: 1rem auto;
    max-width: 1200px;
    background: #e8e8e8;
    font-size: 17px;
    line-height: 1.5;
    color: #b8b8b8;
    margin: 0 auto;
      position: relative;
    min-height: 100%;
      padding: 14px;
  }
  li {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    color: #282c34;
    cursor: pointer;
  }
  a:visited {
    color: #282c34;
  }
    
`

export default GlobalStyle
