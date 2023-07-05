import styled from 'styled-components'
import { OffStatusType } from '.'

export const Wrapper = styled.tr`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 300;
  margin-bottom: 4px;
  width: 100%;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 1.5px 1.5px 3px 0px rgba(0,0,0,0.2);
  overflow: hidden;
  td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  td:last-child {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  td {
    padding: 9px 4px 9px 16px;
    border: none;
    background-color: #fff;
  }
`

export const Id = styled.td`
  color: #1BAA84;
  font-size: 10px;
  font-weight: 400;
  flex-basis: 30px;
  flex-grow: 0;
`

export const Company = styled.td`
  color: #1B41AA;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
`

export const Text = styled.td`
  color: #1B41AA;
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
`

export const StatusWrapper = styled.td``

export const Status = styled.div<{status: OffStatusType}>`
  padding: 2px 10px 2px 4px;
  border-radius: 10px;
  border: 1px solid #BBC6E6;
  background: #FFF;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => props.status === 'confidential' ? '#EC4B26' : '#4FBE28'};
    margin-right: 6px;
    flex-shrink: 0;
  }

  span {
    color: #1B41AA;
    font-size: 10px;
    font-weight: 600;
    line-height: 12px;
    letter-spacing: 0.2px;
    flex-basis: 90px;
  }
`

export const More = styled.td``