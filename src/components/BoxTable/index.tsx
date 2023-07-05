import Deal, { DealType } from 'components/Deal'
import * as S from './styles'


const deals: DealType[] = [{
  id: 837,
  company: 'Dealer Test',
  offType: 'Bond & Convertible',
  orders: 0,
  offStatus: 'confidential',
  offDate: new Date(2022, 5, 8),
}, {
  id: 837,
  company: 'Dealer Test',
  offType: 'Bond & Convertible',
  orders: 0,
  offStatus: 'confidential',
  offDate: new Date(2022, 5, 8),
}, {
  id: 837,
  company: 'Dealer Test',
  offType: 'Bond & Convertible',
  orders: 0,
  offStatus: 'book open',
  offDate: new Date(2022, 5, 8),
}]

const BoxTable = () => (
  <S.Wrapper>
    <S.Header>
      <S.Label>ID</S.Label>
      <S.Label>Company</S.Label>
      <S.Label>Off. Type</S.Label>
      <S.Label>Ord. To App</S.Label>
      <S.Label>Off. Status</S.Label>
      <S.Label>Off. Status Date</S.Label>
      <S.Label></S.Label>
    </S.Header>
    {deals.map((deal) => <Deal {...deal} />)}
  </S.Wrapper>
)

export default BoxTable
