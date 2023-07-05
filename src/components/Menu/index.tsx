import MenuItem, { MenuItemType } from 'components/MenuItem'
import * as S from './styles'

const items: MenuItemType[] = [
  {
    icon: '/icons/academy.svg'
  },
  {
    icon: '/icons/notifications.svg',
    notifications: 222
  }
]

const Menu = () => (
  <S.Wrapper>
    {items.map((item) => <MenuItem {...item} />)}
  </S.Wrapper>
)

export default Menu
