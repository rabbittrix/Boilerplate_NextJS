import * as S from './styles'
import { Header } from '../Header/Header'
import { Sidebar } from 'components/Sidebar/Sidebar'
import { Panel } from 'components/Panel/Panel'

const Main = () => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <Sidebar />
      <Panel />
    </S.Container>
  </S.Wrapper>
)

export default Main
