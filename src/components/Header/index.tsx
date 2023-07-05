import * as S from './styles'
import Image from 'next/image'
import Breadcrumb from 'components/Breadcrumb'
import Menu from 'components/Menu'

const Header = () => {
  return (
    <S.Wrapper>
      <Image src="/logo.png" alt="me" width="80" height="23" />
      <Breadcrumb />
      <Menu />
    </S.Wrapper>
  )
}

export default Header
