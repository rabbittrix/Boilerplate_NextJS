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
    font-family: -apple-system, Space Grotesk, Monument Extended, 'Open Sans', sans-serif;
    background-color: #1B41AA;
    background-image: url("img/gradientOverlay.png");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  h1 {
    font-size: 30px;
  }

  @font-face {
    font-family: "Space Grotesk";
    src: url('/fonts/SpaceGrotesk.ttf');
    font-weight: normal;
    font-style: normal;
  }

  font-face {
    font-family: "Monument Extended";
    src: url('/fonts/MonumentExtended-Regular.otf');
  }

  p {
    font-size: 16px;
  }
`
export default GlobalStyles
