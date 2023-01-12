import * as S from './styles'

import {
  FolderPlus,
  FolderSimpleMinus,
  House,
  Users,
  File
} from 'phosphor-react'

export function Sidebar() {
  return (
    <S.Sidebar>
      <div>
        <label className="icons">
          <House size={26} alt={'Home'} color="#FFFFFF" />
          <span>Home</span>
        </label>
        <label className="icons">
          <FolderPlus size={26} alt={'submit'} color="#FFFFFF" />
          <span>Submit</span>
        </label>
        <label className="icons active">
          <File size={26} color="#FFFFFF" />
          <span>Docs</span>
        </label>
        <label className="icons">
          <Users size={26} alt={'Entities'} color="#FFFFFF" />
          <span>Entities</span>
        </label>
        <label>
          <FolderSimpleMinus size={26} alt={'Nowsapce'} color="#FFFFFF" />
          <span>NowSpace</span>
        </label>
      </div>
    </S.Sidebar>
  )
}
