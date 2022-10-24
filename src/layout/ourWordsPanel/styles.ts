import styled from 'styled-components'

export const ImgPanel = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 100%;
  }
`
export const Border = styled.div`
  min-width: 80px;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  border-top-${(props) => props.side}-radius: 4px;
  height: 100%;
  z-index: 1;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 1;
  flex-grow: 1;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 60px;
`

export const Panel = styled.div`
  position: relative;
  display: flex;
`

export const Box = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => (props.isGlow ? 'white' : 'trasnparent')};
  flex-direction: column;
  align-items: left;
  flex-grow: 1;
  box-shadow: ${(props) => (props.isGlow ? '0px 0px 32px #8DFFE1' : '0')};
  padding: 60px 0 0 0;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8dffe1;
    margin: 0;
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
export const Text = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => (props.isGlow ? 'white' : 'trasnparent')};
  align-items: right;
  padding: 16px 32px;
  box-shadow: ${(props) => (props.isGlow ? '0px 0px 32px #8DFFE1' : '0')};
  flex-grow: 1;
  p {
    width: 712px;
    height: 56px;
    left: 975px;
    top: 2494px;
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
    margin: 0;
  }
`

export const TextPanel = styled.div`
  display: flex;
  flex-grow: 1;
`

export const WhoServesPanel = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => (props.isGlow ? 'white' : 'trasnparent')};
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  flex-grow: 1;
  box-shadow: ${(props) => (props.isGlow ? '0px 0px 32px #8DFFE1' : '0')};
  padding: 120px 0 60px 0;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8dffe1;
    margin: 0;
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