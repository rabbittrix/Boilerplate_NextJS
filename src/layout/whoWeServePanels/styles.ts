import styled from 'styled-components'

export const ImgPanel = styled.div`
  opacity: 60%;
  flex-grow: 1;
  img {
    width: 100%;
    height: 100%;
  }
`

export const TextPanel = styled.div`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 60px;
`

export const Border = styled.div`
  min-width: 80px;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  height: 100%;
`
export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    color: #ffffff;
  }
`
export const Box = styled.div`
  display: flex;
  width: 100%;
  border-top: 2px solid #ab7ffc;
`

export const Link = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #8dffe1;
`
