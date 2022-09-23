import * as S from './styles'

export default function Header() {
  return (
    <S.Header>
      <a href="/">
        <S.Logo src="/img/wellaLogo.png" alt="Wella" />
      </a>
      <S.Ul>
        <S.Li key={'li-1'}>
          <S.A href="/cor">COR</S.A>
        </S.Li>
        <S.Li key={'li-2'}>
          <S.A href="/cuidado">CUIDADO</S.A>
        </S.Li>
        <S.Li key={'li-3'}>
          <S.A href="/styling-e-textura">STYLING E TEXTURA</S.A>
        </S.Li>
        <S.Li key={'li-4'}>
          <S.A href="/lookbook">LOOKBOOK</S.A>
        </S.Li>
      </S.Ul>
    </S.Header>
  )
}
