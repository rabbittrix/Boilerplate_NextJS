import MenuItem, { MenuItemType } from 'components/MenuItem'
import * as S from './styles'
import Avatar, { AvatarType } from 'components/Avatar'

const items: MenuItemType[] = [
  {
    icon: '/icons/academy.svg'
  },
  {
    icon: '/icons/notifications.svg',
    notifications: 222
  }
]

const avatar: AvatarType = {
  name: 'Robert Koller',
  photo: '/photo.svg'
}

const Menu = () => (
  <S.Wrapper>
    {items.map((item) => <MenuItem {...item} />)}
    <Avatar {...avatar} />
  </S.Wrapper>
)

export default Menu
