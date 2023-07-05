import ScrollSection from 'components/ScrollSection'
import * as S from './styles'
import { House } from 'phosphor-react'
import BoxHeader from 'components/BoxHeader'
import { ButtonType } from 'components/Button';
import BoxTable from 'components/BoxTable';
import Search from 'components/Search';

const dealsButtons: ButtonType[] = [
  {
    label: 'Active',
    active: true,
    count: 3
  },
  {
    label: 'Recent',
    active: false
  },
];

const ordersButtons: ButtonType[] = [
  {
    label: 'My Orders',
    active: true,
    count: 0
  },
  {
    label: 'Syndicate',
    active: false,
    count: 0
  },
];

const Home = () => (
  <S.Wrapper>
    <S.Header>
      <S.Icon>
        <House size={28} alt={'Home'} color="#FFFFFF" weight="fill" />
      </S.Icon>
      <S.Title>
        Hello Robert!
      </S.Title>
    </S.Header>
    <S.SearchWrapper>
      <Search />
    </S.SearchWrapper>
    <S.Content>
      <ScrollSection />
      <S.ContentWrapper>
        <S.Box>
          <BoxHeader title="Deals" buttons={dealsButtons} />
          <BoxTable />
        </S.Box>
        <S.Box>
          <BoxHeader title="Orders" buttons={ordersButtons} />
          <S.BoxBody>
            <S.Empty>
              No orders right now
            </S.Empty>
          </S.BoxBody>
        </S.Box>
      </S.ContentWrapper>
    </S.Content>
  </S.Wrapper>
)

export default Home
