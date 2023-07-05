import styled from 'styled-components'

export const Wrapper = styled.div`
  font-family: 'Space Grotesk', sans-serif;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  height: 100%;
  display: flex;
  padding: 4px;
  flex-direction: column;
  align-items: center;
`

export const Header = styled.div`
  border-radius: 20px;
  background: var(--palette-gradient-color-grad-10, linear-gradient(270deg, #F0E9FD 0%, #E9ECF7 49.56%, #E9F7F3 100%));
  width: 100%;
  padding: 14px 24px;
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  color: #1B41AA;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  font-style: normal;
  font-weight: 700;
  margin-left: 16px;
`

export const Icon = styled.div`
  background: var(--palette-gradient-color-grad-80, linear-gradient(270deg, #8549EC 0%, #4967BB 49.56%, #49BB9D 100%));
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  border-radius: 20px;
  background: linear-gradient(225deg, #F0E9FD 0%, #E9ECF7 49.56%, #E9F7F3 100%);
  display: flex;
  width: 100%;
  height: 100%;
  padding: 12px 12px 12px 24px;
`
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`

export const Box = styled.div`
  border-radius: 12px;
  display: flex;
  width: 100%;
  padding: 4px;
  background-color: #fff;
  margin-bottom: 12px;
  flex-direction: column;
`

export const BoxBody = styled.div`
  padding: 20px 24px;
`

export const Empty = styled.p`
  color: #1B41AA;
  font-size: 12px;
  font-family: 'Space Grotesk';
  font-weight: 400;
  line-height: 16px;
`

export const SearchWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;