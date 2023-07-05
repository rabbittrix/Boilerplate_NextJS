import styled from 'styled-components'

export const Wrapper = styled.button<{ active: boolean; }>`
  font-family: 'Space Grotesk', sans-serif;
  color: #607AC4;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.24px;

  padding: 4px 9px;
  border-radius: 8px;
  background-color: #FFF;
  border: 1px solid transparent;
  margin-right: 4px;
  cursor: pointer;

  ${({ active }) => active && `
    background: linear-gradient(270deg, #5602E4 0%, #1B41AA 49.56%, #1BAA84 100%);
    color: #fff;
  `}
`
