import styled from 'styled-components'

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 100%;
  padding: 8px;
  margin: 0 12px;
  width: 88px;
  background: #08236f;
  border-radius: 24px;
  background: linear-gradient(0deg, rgba(27, 65, 170, 0.40) 0%, rgba(27, 65, 170, 0.40) 100%), linear-gradient(270deg, #8549EC 0%, #4967BB 49.56%, #49BB9D 100%);
  box-shadow: 2px 2px 2px 0px rgba(141, 255, 225, 0.60) inset, -2px -2px 2px 0px rgba(27, 65, 170, 0.60) inset, -4px -4px 8px 0px rgba(141, 255, 225, 0.30), 4px 4px 8px 0px rgba(11, 39, 115, 0.60);
  font-family: 'Space Grotesk';

  div {
    display: flex;
    /* width: 100%;
    height: 100%; */
    /* justify-content: space-evenly; */
    align-items: center;
    flex-direction: column;
  }

  label {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 8px;
    padding: 14px 8px;
    span {
      color: #fff;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 400;
      margin-top: 6px;
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
    border-radius: 16px;
    background: var(--palette-gradient-color-grad-70, linear-gradient(270deg, #9561EF 0%, #607AC4 49.56%, #60C4A9 100%));
    box-shadow: 1.3793102502822876px 1.3793102502822876px 1.3793102502822876px 0px rgba(141, 255, 225, 0.60) inset, -1.3793102502822876px -1.3793102502822876px 1.3793102502822876px 0px rgba(27, 65, 170, 0.50) inset, -3.448275566101074px -3.448275566101074px 6.896551132202148px 0px rgba(141, 255, 225, 0.29), 3.448275566101074px 3.448275566101074px 6.896551132202148px 0px #2E2C9F;
  }
`
