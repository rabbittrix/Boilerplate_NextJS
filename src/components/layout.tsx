import * as S from './layoutstyles'
import Link from 'next/link'
export default function Layout({ children }: any) {
  return (
    <S.Wrapper>
      <S.Header>nav goes here</S.Header>
      <S.ContentWrapper>
        <S.Sidebar>
          <Link href="/deals">Deals</Link>
        </S.Sidebar>
        <S.Main>{children}</S.Main>
      </S.ContentWrapper>
    </S.Wrapper>
  )
}
