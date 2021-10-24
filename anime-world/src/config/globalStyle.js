import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`  


    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:  Noto Sans Mono;
  }
  body {
    margin: 1rem auto;
      max-width: 1296px;
     background: #16151d;
    font-size: 14px;
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
/* body {
      margin: 1rem auto;
      max-width: 1296px;
     background: #16151d;
    font-size: 14px;
    line-height: 1.5;
    color: #b8b8b8;
    margin: 0 auto;
      position: relative;
    min-height: 100%;
      padding: 14px;
    } */
