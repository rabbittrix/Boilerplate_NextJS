import * as S from './styles'

import {
  House,
  DotsNine,
  Handshake,
  BookBookmark,
  Gear
} from 'phosphor-react'

const Sidebar = () => (
  <S.Sidebar>
    <div>
      <label className="icons">
        <DotsNine size={28} color="#fafafa" weight="bold" />
        <span>Apps</span>
      </label>
      <label className="icons active">
        <House size={28} alt={'Home'} color="#FFFFFF" weight="fill" />
        <span>Home</span>
      </label>
      <label className="icons">
        <Handshake size={28} color="#FFFFFF" />
        <span>Deals</span>
      </label>
      <label className="icons">
        <BookBookmark size={28} color="#ffffff" />
        <span>Workbook</span>
      </label>
      <label className="icons">
        <Gear size={28} color="#ffffff" />
        <span>Utilities</span>
      </label>
    </div>
  </S.Sidebar>
)

export default Sidebar
