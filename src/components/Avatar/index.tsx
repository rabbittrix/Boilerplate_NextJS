import Image from 'next/image';
import * as S from './styles'
import { CaretDown } from 'phosphor-react';

export type AvatarType = {
  photo: string;
  name: string;
}

const Avatar = ({ photo, name }: AvatarType) => (
  <S.Wrapper>
    {/* <S.GradientWrapper style={{['--img-url' as string]: `url(${icon})`}}> */}
    <S.GradientWrapper>
      <S.Icon>
        <Image src={photo} height={24} width={24} />
      </S.Icon>
    </S.GradientWrapper>
    <S.TitleWrapper>
      <S.Title>{name}</S.Title>
      <CaretDown size={24} color="#BBC6E6" weight="bold" />
    </S.TitleWrapper>
  </S.Wrapper>
)

export default Avatar
