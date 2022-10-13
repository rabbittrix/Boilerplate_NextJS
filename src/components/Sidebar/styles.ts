import styled from 'styled-components'

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: center;
  height: 630px;
  padding: 10px;
  margin: 0 20px;
  width: 88px;

  background: linear-gradient(
      0deg,
      rgba(27, 65, 170, 0.4),
      rgba(27, 65, 170, 0.4)
    ),
    linear-gradient(238.25deg, #8549ec 0%, #4967bb 49.56%, #49bb9d 100%);
  box-shadow: 3.44828px 3.44828px 6.89655px rgba(11, 39, 115, 0.6),
    -3.44828px -3.44828px 6.89655px rgba(141, 255, 225, 0.29),
    inset -1.37931px -1.37931px 1.37931px rgba(27, 65, 170, 0.5),
    inset 1.37931px 1.37931px 1.37931px rgba(141, 255, 225, 0.6);
  border-radius: 24px;

  ul {
    display: flex;
    flex-direction: column;
  }

  ul li {
    margin: 10px auto;
    color: #8c9fd4;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
  }

  ul li.active {
    width: 100%;
    padding: 13px 0;
    color: #ffffff;
    background: linear-gradient(
      238.25deg,
      #9561ef 0%,
      #607ac4 49.56%,
      #60c4a9 100%
    );
    box-shadow: 3.44828px 3.44828px 6.89655px #2e2c9f,
      -3.44828px -3.44828px 6.89655px rgba(141, 255, 225, 0.29),
      inset -1.37931px -1.37931px 1.37931px rgba(27, 65, 170, 0.5),
      inset 1.37931px 1.37931px 1.37931px rgba(141, 255, 225, 0.6);
    border-radius: 16px;
  }

  span {
    display: block;
    margin: 6px 0 0 0;
    font-style: normal;
    font-weight: 400;
    font-size: 0.8em;
    line-height: 14px;
  }
`

export const Voltar = styled.div`
  margin: 0 auto 28px;
  cursor: pointer;
`
