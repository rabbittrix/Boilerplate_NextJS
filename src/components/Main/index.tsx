import * as S from './styles'
import Header from 'components/Header'
import Sidebar from 'components/Sidebar'

const Main = () => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <Sidebar />
    </S.Container>
  </S.Wrapper>
)

export default Main
