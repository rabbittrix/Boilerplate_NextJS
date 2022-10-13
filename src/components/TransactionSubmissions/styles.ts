import styled from 'styled-components'

export const Panel = styled.div`
  display: block;
  width: 100%;

  padding-bottom: 10px;

  background: #ffffff;
  border-radius: 24px;
`

export const PanelHeader = styled.div<{ active?: boolean }>`
  justify-content: start;
  width: 100%;
  min-height: 113px;
  padding: 22px 27px 0;

  background: linear-gradient(270deg, #e1d2fa 0%, #d1d9ee 49.56%, #d1eee6 100%);
  border-radius: 20px 20px 0px 0px;

  ul.panel-header_list {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 20px 0 2px;
  }

  ul.panel-header_list li {
    text-align: center;
    color: #1b41aa;
    font-weight: bold;
    margin: 0 2px;
    padding: 7px 0;
    width: 204px;
    height: 28px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #ffffff;
  }

  ul.panel-header_list li.active {
    color: #ffffff;
    background: linear-gradient(
      268.92deg,
      #5602e4 0%,
      #1b41aa 49.56%,
      #1baa84 100%
    );
  }
`

export const Title = styled.div`
  display: flex;

  h1 {
    margin: 10px 0 0 10px;
    font-family: 'MonumentExtended-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    /* identical to box height, or 80% */

    text-transform: capitalize;

    color: #1b41aa;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  .pagination {
    margin: 0 0 0 20px;
  }
`

export const FlexContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const GridContainer = styled.div`
  padding: 10px;
  margin: 0 10px;
  background: linear-gradient(
    253.3deg,
    #f0e9fd 0%,
    #e9ecf7 49.56%,
    #e9f7f3 100%
  );
  border-radius: 14px;

  ul.grid-container_list {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  ul.grid-container_list li {
    align-self: center;
    display: inline-block;
    padding: 0px 16px 0;
    border-right: 1px solid #8c9fd4;
    line-height: 13px;
    cursor: pointer;
  }

  ul.grid-container_list li:first-child,
  ul.grid-container_list li:last-child {
    border-right: none;
  }

  ul.grid-container_list li span {
    float: left;
    margin: 0 10px 0 0;
  }
`

export const GridItemHead = styled.div`
  margin: 20px 0 0;
  display: grid;

  grid-template-columns:
    minmax(50px, 50px)
    2fr
    1fr
    minmax(80px, 80px)
    minmax(80px, 80px)
    1fr
    minmax(120px, 120px);

  div{
    display: pointer;
    align-self: center;
    cursor: pointer;
  }

  span{
    margin: 0 5px 0;
  }

  .column2 {
    text-align = left;
  }
  .column3 {
    text-align = left;
  }
  .col-center {
    text-align = center;
  }
  `

export const GridItemsContainer = styled.div`
  width: 100%;
  margin: 10px 0 0;
  transition: * 0.2s;

  &.active {
    border-radius: 12px;
    background: linear-gradient(
      270deg,
      #5602e4 0%,
      #1b41aa 49.56%,
      #1baa84 100%
    );
  }

  &.active .items-command {
    display: block !important;
  }

  .items-command {
    display: none;
    padding: 5px 10px;

    ul {
      border: none !important;
      display: flex;
      align-items: center;
      height: 100%;
    }

    li {
      color: #fff;
      margin: 5px 12px 5px 0;
      padding: 0 12px 0 0;
      border-right: 1px solid #d9d9d9;
      cursor: pointer;
    }

    li:last-child {
      border-right: none;
    }

    span {
      float: left;
      padding: 0 10px 0 0;
    }
  }

  &.active ul {
    border: 1px solid #1b41aa;
  }

  &:hover ul {
    border: 1px solid #1b41aa;
  }
`

export const GridItemBody = styled.ul`
  min-height: 64px;
  width: 100%;
  background: #ffffff;
  box-shadow: 4px 4px 4px rgba(27, 65, 170, 0.1),
    inset -1px -1px 2px rgba(27, 65, 170, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  transition: border 0.5s;
`

export const GridItem = styled.li`
  width: 100%;
  padding: 0 !important;
  display: grid !important;

  grid-template-columns:
    minmax(50px, 50px)
    2fr
    1fr
    minmax(80px, 80px)
    minmax(80px, 80px)
    1fr
    minmax(120px, 120px);

  div {
    align-self: center;
  }

  .col-center {
    margin: 0 auto;
  }

  input {
    display: block;
    margin: 0 auto;
    background: #ffffff;
    border: 1px solid #bbc6e6;
    border-radius: 6px;
  }
`
