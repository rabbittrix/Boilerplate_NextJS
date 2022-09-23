import styled, { css } from 'styled-components'

export const FooterWrapper = styled.div`
  background-color: #f7f7f7;
`
export const FooterSubSection = styled.div`
  padding: 1.25rem;
`

export const Footer = styled.footer`
  font-size: 1.5rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
`
export const MainColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

export const Column = styled.div`
  width: auto;
  text-align: center;
  padding: 0 20px;
  @media only screen and (max-width: 600px) {
    margin-bottom: 4rem;
  }
`
export const ColumnCenter = styled.div`
  width: auto;
  text-align: center;
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 0 20px;
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  font-weight: normal;
`

export const Ul = styled.ul`
  text-align: center;
  list-style: none;
`

export const LiBase = css`
  display: inline-block;
  padding-right: 12px;
  font-size: 1.2rem;
`

export const Li = styled.li`
  ${LiBase}
`

export const LiSubFooter = styled.li`
  ${LiBase}
  font-size: 1rem;
`

export const LiImages = styled.li`
  display: inline-block;
  padding: 1.1rem;
`

export const Logos = styled.img`
  max-height: 4rem;
`

export const AWithArrow = styled.a`
  padding-left: 0.625rem;
  text-decoration: none;
  color: black;
  :hover {
    transition: all 0.5s ease;
    color: gray;
  }
`

export const Arrow = styled.div`
  display: inline-block;
  padding-right: 0.375rem;
  width: 0;
  height: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid transparent;
  border-left: 4px solid gray;
`
