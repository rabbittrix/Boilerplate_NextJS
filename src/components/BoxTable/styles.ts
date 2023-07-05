import styled from 'styled-components'

export const Wrapper = styled.table`
  flex-direction: column;
  font-family: 'Space Grotesk', sans-serif;
  border-radius: 8px;
  padding: 4px;
  background: linear-gradient(270deg, #F0E9FD 0%, #E9ECF7 49.56%, #E9F7F3 100%);
  border-spacing: 0 4px;
  margin-top: 4px;
`

export const Header = styled.thead`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`

export const Label = styled.th`
  color: #3254B3;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  text-align: left;
  padding-left: 16px;
`