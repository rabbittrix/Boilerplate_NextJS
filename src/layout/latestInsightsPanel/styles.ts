import styled from 'styled-components'

export const Border = styled.div`
  min-width: 80px;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  height: 100%;
`
export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  flex-grow: 1;
  align-items: center;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`

export const TextPanel = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15% 0 40px 0;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8dffe1;
  }
  h2 {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 100%;
    color: #f3f5fa;
  }
`
export const Box = styled.div`
  display: flex;
  padding: 0 60px;
  width: 100%;
  justify-content: space-between;
`
export const InfoBox = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  h5 {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #ffffff;
  }
`
export const InnerBox = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: lowercase;
    color: #8dffe1;
  }
`
export const ButtonPanel = styled.div`
  display: flex;
  margin: 17% 0 40px 0;
`
export const Link = styled.p`
  margin: 60px 0 0 0;
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8dffe1;
`
export const InfoPanel = styled.div`
  display: flex;
  padding: 16px;
  flex-grow: 1;
  flex-direction: column;
  border: 2px solid #ab7ffc;
  border-bottom: none;
  border-radius: 4px;
  position: relative;
  &:hover {
    webkit-filter: blur(1px);
    filter: blur(1px);
    cursor: pointer;
    transition: 0.5s;
    background-image: url('img/scrollToDiscover.png');
    background-repeat: no-repeat;
    background-position: center;
  }
  `
