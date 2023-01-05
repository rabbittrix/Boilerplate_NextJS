import * as S from '../styles/curves_styles'
// import Breadcrumb from 'components/breadcrumb'
// import Table from 'components/table'

export default function Curves() {
  return (
    <S.Main>
      {/* <S.BreadcrumbStyle>
        <Breadcrumb />
      </S.BreadcrumbStyle> */}
      <S.Wrapper>
        <S.Div>
          <S.Logo src="/img/frame.png" alt="frame icon" />
          <S.Title>My Curve</S.Title>
        </S.Div>
        <S.Div>
          <S.Button>NEU CP</S.Button>
          <S.Button style={{ background: 'white', color: 'blue' }}>
            ECP
          </S.Button>
        </S.Div>
        {/* <Table /> */}
      </S.Wrapper>
    </S.Main>
  )
}
