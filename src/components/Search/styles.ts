import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 24px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  margin-left: 16px;
`

export const Link = styled.a`
  color: #BBC6E6;
  text-decoration: none;
  font-size: 12px;

  &::after {
    content: '>';
    padding: 0 5px;
  }
  &:last-of-type {
    color: #8DFFE1;
    &::after {
      content: '';
      padding: 0;
    }
  }
`