import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "SpaceGrotesk-Medium";
    src: url('/fonts/SpaceGrotesk-Medium.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SpaceGrotesk-Regular";
    src: url('/fonts/SpaceGrotesk-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "SpaceGrotesk-Bold";
    src: url('/fonts/SpaceGrotesk-Bold.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "MonumentExtended-Regular";
    src: url('/fonts/MonumentExtended-Regular.otf');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next{
    height: 100%;
    background-color: #1b41aa;
  }

  body {
    font-family: -apple-system, SpaceGrotesk-Regular, 'Open Sans', sans-serif

  }

  strong {
    font-family: -apple-system, SpaceGrotesk-Bold, 'Open Sans', sans-serif
  }

  ul {
    list-style: none;
  }

  .button_left-icon{
    color: #1B41AA;
    font-family: 'SpaceGrotesk-Regular';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.01em;
    border-radius: 16px;
    border-color: #1B41AA;
    border-width: 1px;
    padding: 5px 15px 5px 5px;
    cursor: pointer;

    span{
      padding: 0 10px 0 0;
      float: left;
    }

    &.active{
      background: linear-gradient(238.25deg, #5602E4 0%, #1B41AA 49.56%, #1BAA84 100%);
      color: #ffffff;
    }
  }

  .dropdown-menu{
    background: #FFFFFF;
    border: 1px solid #D1D9EE;
    border-radius: 8px;
    padding: 10px;
    color: #8C9FD4;
  }

  .text-blue{
    font-family: 'SpaceGrotesk-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #3254B3;
  }

  .input_search{
    border-radius: 16px;
    border: 1px solid #D1D9EE;
    font-family: 'Space Grotesk';
    font-family: 'SpaceGrotesk-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #8C9FD4;
    padding: 5px 10px;
    margin: 0 10px;
    display: block;
    width: auto%;
    flex-grow: 10;
  }

  .text-title{
    font-weight: 600;
    font-size: 14px;
    line-height: 14px;
  }

  .text-small{
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  .text-green{
    color: #1BAA84;
  }

  .text-blue{
    color: #1B41AA;
  }
`
export default GlobalStyles
