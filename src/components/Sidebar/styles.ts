import styled from 'styled-components'

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 500px;
  padding: 10px;
  margin: 0 20px;
  width: 88px;
  background: #08236f;
  border-radius: 24px;

  div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: inherit;
  }

  label {
    span {
      color: #fff;
    }
  }

  span {
    display: flex;
    justify-content: center;
  }

  label:hover {
    cursor: pointer;
  }

  icons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label.active {
    padding: 9px;
    border-radius: 16px;
    background-color: #8549ec;
  }
`
