import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next{
    height: 100%;
  }

  body {
    font-family: 'Oswald', sans-serif
  }

  main {
    background: -webkit-linear-gradient(#06092b, #cccccc);
    color: #fff;
    width: 100%;
    height: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 12.5rem;
  }
`

export default GlobalStyles
