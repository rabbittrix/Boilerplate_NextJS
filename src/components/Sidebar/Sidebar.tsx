import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

export function Sidebar() {
  return (
    <S.Sidebar>
      <ul>
        <li>
          <Image
            src={'/img/menu_home.svg'}
            height={26}
            width={22}
            alt={'Home'}
          />
          <span>Home</span>
        </li>
        <li>
          <Image
            src={'/img/menu_submit.svg'}
            height={18}
            width={22}
            alt={'Home'}
          />
          <span>Submit</span>
        </li>
        <li className="active">
          <Image
            src={'/img/menu_docs-active.svg'}
            height={18}
            width={22}
            alt={'Home'}
          />
          <span>Docs</span>
        </li>
        <li>
          <Image
            src={'/img/menu_entities.svg'}
            height={26}
            width={22}
            alt={'Home'}
          />
          <span>Entities</span>
        </li>
        <li>
          <Image
            src={'/img/menu_templates.svg'}
            height={26}
            width={22}
            alt={'Home'}
          />
          <span>Home</span>
        </li>
      </ul>

      <S.Voltar>
        <Link href={'#'}>
          <Image
            src={'/img/menu_back.svg'}
            height={36}
            width={36}
            alt={'Back'}
          />
        </Link>
      </S.Voltar>
    </S.Sidebar>
  )
}
