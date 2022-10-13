import * as S from './styles'
import { Header } from '../Header/Header'
import { Sidebar } from 'components/Sidebar/Sidebar'
import { TransactionSubmissions } from 'components/TransactionSubmissions/TransactionSubmissions'
import { data } from '../../../public/JSON/TransactionsSubmissions'

const Main = () => (
  <S.Wrapper>
    <Header />
    <S.Container>
      <Sidebar />
      <TransactionSubmissions data={data} />
    </S.Container>
  </S.Wrapper>
)

export default Main
