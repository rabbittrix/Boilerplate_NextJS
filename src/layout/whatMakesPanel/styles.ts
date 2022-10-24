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
  color: white;
  flex-grow: 1;
  padding: 0 80px;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  align-items: center;
`

export const Text = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8dffe1;
  padding: 160px 0 10px 0;
`
export const Title = styled.h2`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 100%;
  text-align: center;
  padding: 0 0 20px 0;
  color: #f3f5fa;
`
export const Container = styled.div`
  display: flex;
  border: 2px solid #8cd4c131;
  border-radius: 16px;
  min-width: 576px;
  width: 80%;
  margin: 0 0 60px 0;
`

export const Box = styled.div`
  display: flex;
  border-radius: 16px;
  background-color: ${(props) => props.isGlow ? 'white' : 'trasnparent'};
  flex-direction: column;
  align-items: center;
  padding: 16px 32px;
  box-shadow: ${(props) => props.isGlow ? '0px 0px 32px #8DFFE1' : '0'};
  flex-grow: 1;
  img {
    width: 160px;
  }
  p {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 14.3304px;
    line-height: 17px;
    text-align: right;
    text-transform: uppercase;
    color: #1baa84;
    margin: 0;
  }
`
