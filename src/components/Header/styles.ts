import styled from 'styled-components'

export const Header = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  padding: 17px 20px;

  img {
    color: #ffffff;
  }
`

export const Breadcrumb = styled.nav`
  color: #bbc6e6;
  margin: 0 0 0 40px;

  ul {
    display: flex;
  }

  ul li {
    display: flex;
    padding: 5px;
  }

  ul li:after {
    content '>';
    margin-left: 10px;
  }

  ul li a {
    text-decoration: none;
    color: #bbc6e6;
  }

  ul li:last-child:after {
    content: '';
  }

  ul li:last-child a {
    display: flex;
    color: #86f3dd;
  }
`

export const Container = styled.div<{ auto?: boolean }>`
  width: ${({ auto }) => (auto ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Icons = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin-right: 10px;
  }
`

export const UserMenu = styled.div`
  display: flex;
  font-weight: bold;
  color: #ffffff;
  margin: auto 20px;
  cursor: pointer;

  .usermenu_seta-baixo {
    padding: 0 0 0 30px;
  }
`
