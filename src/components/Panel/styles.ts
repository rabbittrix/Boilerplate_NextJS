import styled from 'styled-components'

export const Panel = styled.div`
  display: block;
  width: 100%;
  height: 100%;

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

  ul {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 20px 0 2px;
  }

  ul li {
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

  ul li.active {
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
`

export const GridHeader = styled.div`
  display: flex;
`

export const GridItemsContainer = styled.ul``
export const GridItem = styled.li``
