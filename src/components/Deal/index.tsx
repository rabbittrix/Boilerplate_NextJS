import { DotsThree } from 'phosphor-react';
import * as S from './styles'

export type OffStatusType = 'confidential' | 'book open' | 'add to tranche';

export type DealType = {
  id: number;
  company: string;
  offType: string;
  orders: number;
  offStatus: OffStatusType;
  offDate: Date;
}

const Deal = ({ id, company, offType, orders, offStatus, offDate }: DealType) => {
  const formatter = new Intl.DateTimeFormat('en');
  return (
    <S.Wrapper>
      <S.Id>{`#${id}`}</S.Id>
      <S.Company>{company}</S.Company>
      <S.Text>{offType}</S.Text>
      <S.Text>{orders}</S.Text>
      <S.StatusWrapper>
        <S.Status status={offStatus}>
          <div></div>
          <span>{offStatus}</span>
        </S.Status>
      </S.StatusWrapper>
      <S.Text>{formatter.format(offDate)}</S.Text>
      <S.More>
        <a href='#'>
          <DotsThree size={28} color="#BBC6E6" weight="bold" />
        </a>
      </S.More>
    </S.Wrapper>
  )
}

export default Deal
