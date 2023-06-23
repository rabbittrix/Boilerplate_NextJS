import styled from 'styled-components'

export const Main = styled.main``
export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  input {
    border-radius: 1.6rem;
    width: 30rem;
    border: 0;
  }

  a {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem 2rem;
    border-radius: 1.6rem;
    background: linear-gradient(
      270deg,
      #5602e4 0%,
      #1b41aa 49.56%,
      #1baa84 100%
    );
    border: 0;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
  }
`
