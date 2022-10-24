import styled from 'styled-components'

export const Btn = styled.button`
  border-radius: 30px;
  display: flex;
  align-items: center;
  margin: 8px;
  text-align: center;
  color: white;
  background-color: transparent;
  border: ${(props) => (props.border ? '1px solid white' : 'none')};
  padding: ${(props) => (props.src ? '0' : '8px 16px')};
  img {
    padding: ${(props) => (props.src ? '2px' : '8px')};
  }
  p {
    padding: 0 8px;
    margin: 0;
  }
`
