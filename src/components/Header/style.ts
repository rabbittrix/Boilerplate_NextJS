import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
`

export const Border = styled.div`
  min-height: 80px;
  min-width: 80px;
  border-bottom: 2px solid #AB7FFC;
  border-${(props) => props.side}: 2px solid #AB7FFC;
  border-bottom-${(props) => props.side}-radius: 4px;
`
export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding: 0 40px;
  min-height: 80px;
  border-bottom: 2px solid #ab7ffc;
  border-radius: 4px;
`
export const BorderBottom = styled.div`
  min-height: 80px;
  color: white;
  border-bottom: 2px solid #ab7ffc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-bottom-right-radius: ${(props) => props.isLast ? '0px' : '4px'};
`
export const Menu = styled.div`
  display: flex;
  flex-grow: 1;
`
export const Rectangle = styled.div`
  display: flex;
  flex-grow: 1;
  border-bottom: 2px solid #ab7ffc;
`

export const Actions = styled.div`
  display: flex;
  border-bottom: 2px solid #ab7ffc;
  border-bottom-right-radius: 4px;
  align-items: center;
`