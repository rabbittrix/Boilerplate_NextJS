import styled, { css } from 'styled-components'

export const Header = styled.header`
  height: 12.5rem;
  text-align: center;
  background-color: #f7f7f7;
  position: fixed;
  width: 100vw;
  top: 0;
`

export const A = styled.a`
  padding-left: 10px;
  text-decoration: none;
  color: black;
  :hover {
    transition: all 0.5s ease;
    color: gray;
  }
`

export const Logo = styled.img`
  width: 8vw;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media only screen and (max-width: 600px) {
    width: 25vw;
  }
`

export const Ul = styled.ul`
  text-align: center;
  list-style: none;
  @media only screen and (max-width: 600px) {
    overflow: auto;
    white-space: nowrap;
    height: 2.5rem;
  }
`

export const Li = styled.li`
  display: inline-block;
  padding-right: 4rem;
  font-size: 1.2rem;
`
