import * as S from './styles'
import Header from 'components/Header'
import Home from 'components/Home'
import Sidebar from 'components/Sidebar'

const Main = () => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <Sidebar />
      <Home />
    </S.Container>
  </S.Wrapper>
)

export default Main
