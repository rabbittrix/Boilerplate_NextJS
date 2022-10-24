import styled from 'styled-components'

export const Border = styled.div`
  min-width: 80px;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  height: 100%;
`
export const ImgPanel = styled.div`
  opacity: 60%;
  flex-grow: 1;
  img {
    width: 80%;
    height: 100%;
  }
`
export const TextPanel = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: left;
  flex-grow: 1;
  padding: 0 120px 0 0;
`
export const Panel = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Content = styled.div`
  display: flex;
  color: white;
  flex-grow: 1;
  align-items: center;
  border: 2px solid #ab7ffc;
  border-top: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  h3 {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    color: #ffffff;
  }
`
export const SubTitle = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8dffe1;
`
export const Text = styled.p`
  font-family: 'Space Grotesk';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`
