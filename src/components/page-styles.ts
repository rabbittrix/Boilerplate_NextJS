import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 6rem;
  background: -webkit-linear-gradient(gray, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: uppercase;
  :hover {
    transition: 0.5s;
    transform: scale(1.5);
  }
`

export const Description = styled.h3`
  font-size: 3rem;
`
