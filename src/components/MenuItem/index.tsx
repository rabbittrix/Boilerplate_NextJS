import Image from 'next/image';
import * as S from './styles'

export type MenuItemType = {
  icon: string;
  notifications?: number;
}

const MenuItem = ({ icon, notifications }: MenuItemType) => (
  <S.Wrapper>
    {/* <S.GradientWrapper style={{['--img-url' as string]: `url(${icon})`}}> */}
    <S.GradientWrapper>
      <S.Icon>
        <Image src={icon} height={24} width={24} />
      </S.Icon>
    </S.GradientWrapper>
    {notifications && <S.Notification>{notifications}</S.Notification>}
  </S.Wrapper>
)

export default MenuItem
