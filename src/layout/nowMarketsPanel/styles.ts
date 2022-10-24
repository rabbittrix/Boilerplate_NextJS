import styled from 'styled-components'

export const Panel = styled.div`
  position: relative;
  display: flex;
`

export const Checkered = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  img {
    width: 100%;
  }
`
export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export const Border = styled.div`
  min-width: 80px;
  border-top: 2px solid #AB7FFC;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  border-top-${(props) => props.side}-radius: 4px;
  height: 100%;
  z-index: 1;
`
export const Layer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  z-index: 1;
  flex-grow: 1;
  border: 2px solid #ab7ffc;
  border-bottom: none;
  border-top-left-radius: 4px;
  padding: 0 80px;
`

export const Text = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8dffe1;
  margin: 120px 0 40px 0;
`

export const Title = styled.h1`
  font-family: 'Monument Extended';
  font-style: normal;
  font-weight: 400;
  font-size: 144px;
  line-height: 100%;
  color: #ffffff;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 172.05px;
    height: 172.17px;
  }
`
