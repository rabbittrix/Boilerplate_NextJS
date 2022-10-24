import styled from 'styled-components'

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
    text-align: center;
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
    text-align: center;
    color: #f3f5fa;
  }
`
export const Box = styled.div`
  display: flex;
  flex-grow: 1;
  border-top: ${(props) => props.hasBorder ? 'none' : '2px solid #ab7ffc'} ;
  border-bottom: ${(props) => props.hasBorder ? 'none' : '2px solid #ab7ffc'} ;
  border-radius: 4px;
  width: 100%;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    text-align: center;
    color: #ffffff;
  }
`
export const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  border-${(props) => props.side}: ${(props) => props.side ? '2px solid #ab7ffc' : 'none'};
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 100%;
  `