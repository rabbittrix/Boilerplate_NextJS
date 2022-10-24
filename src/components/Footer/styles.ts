import styled from 'styled-components'

export const Checkered = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  img {
    width: 100%;
  }
`
export const Border = styled.div`
min-height: 80px;
min-width: 80px;
border-bottom: 2px solid #AB7FFC;
border-${(props) => props.side}: 2px solid #AB7FFC;
border-bottom-${(props) => props.side}-radius: 4px;
z-index: 1;
`
export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
  position: relative;
`
export const Content = styled.footer`
  display: flex;
  flex-grow: 1;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`
export const Box = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 20% 16px 10px 16px;
  color: white;
  gap: 0 25px;
  p {
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #ffffff;
  }
`
export const Layer = styled.div`
  display: flex;
  flex-grow: 1;
`