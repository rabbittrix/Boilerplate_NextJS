import * as S from './styles'

export type ButtonType = {
  label: string;
  count?: number;
  active: boolean;
}

const Button = ({ label, count, active }: ButtonType) => (
  <S.Wrapper active={active}>
    {count !== undefined ? `${label} (${count})` : label}
  </S.Wrapper>
)

export default Button
