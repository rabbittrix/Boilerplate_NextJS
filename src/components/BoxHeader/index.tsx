import Button, { ButtonType } from 'components/Button';
import * as S from './styles'

export type BoxHeaderType = {
  title: string;
  buttons: ButtonType[];
}

const BoxHeader = ({ title, buttons }: BoxHeaderType) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.ButtonsWrapper>
      {buttons.map((button) => <Button {...button} />)}
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default BoxHeader
