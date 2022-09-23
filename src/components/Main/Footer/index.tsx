import * as S from './styles'
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaFacebookSquare } from 'react-icons/fa'

export default function Footer() {
  return (
    <S.FooterWrapper>
      <S.Footer>
        <S.MainColumns>
          <S.Column>
            <S.H2>MUNDO WELLA</S.H2>
            <S.Ul>
              <S.Li key="f-1">
                <S.AWithArrow href="/contacte-nos">
                  <S.Arrow /> CONTACTE-NOS
                </S.AWithArrow>
              </S.Li>
              <S.Li key="f-2">
                <S.AWithArrow href="#">
                  <S.Arrow />
                  INSCREVA-SE
                </S.AWithArrow>
              </S.Li>
            </S.Ul>
          </S.Column>
          <S.ColumnCenter>
            <S.H2>PORTFÓLIO WELLA</S.H2>
            <S.Ul>
              <S.LiImages key="fi-1">
                <S.Logos src="/img/Wella-Company_Logo_Black.png" />
              </S.LiImages>
              <S.LiImages key="fi-2">
                <S.Logos src="/img/sebastian.svg" />
              </S.LiImages>
              <S.LiImages key="fi-3">
                <S.Logos src="/img/nioxin.svg" />
              </S.LiImages>
              <S.LiImages key="fi-4">
                <S.Logos src="/img/wedo_logo.png" />
              </S.LiImages>
              <S.LiImages key="fi-5">
                <S.Logos src="/img/sp.svg" />
              </S.LiImages>
              <S.LiImages key="fi-6">
                <S.Logos src="/img/kadus_logo.png" />
              </S.LiImages>
            </S.Ul>
          </S.ColumnCenter>
          <S.Column>
            <S.H2>SIGA-NOS</S.H2>
            <S.Ul>
              <S.LiImages key="icon-1">
                <BsInstagram size={40} />
              </S.LiImages>
              <S.LiImages key="icon-2">
                <FaFacebookSquare size={40} />
              </S.LiImages>
              <S.LiImages key="icon-3">
                <BsYoutube size={40} />
              </S.LiImages>
            </S.Ul>
          </S.Column>
        </S.MainColumns>
      </S.Footer>
      <S.FooterSubSection>
        <S.Ul>
          <S.LiSubFooter key="sf-1">TERMS & CONDITIONS</S.LiSubFooter>
          <S.LiSubFooter key="sf-2">SOBRE OS COOKIES</S.LiSubFooter>
          <S.LiSubFooter key="sf-3">AVISO DE PRIVACIDADE</S.LiSubFooter>
          <S.LiSubFooter key="sf-4">DEFINIÇÕES DE COOKIE</S.LiSubFooter>
        </S.Ul>
      </S.FooterSubSection>
    </S.FooterWrapper>
  )
}
