import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/wellaLogo.png"
      alt="Wella logo with the description Wella Company on the side."
    />
    <S.Title>Wella Company</S.Title>
    <S.Description>TypeScript, React, NextJS, Styled Components</S.Description>
    <S.Illumination
      src="/img/hero-illustration.svg"
      alt="A developer facing a screen with code."
    />
  </S.Wrapper>
)

export default Main
