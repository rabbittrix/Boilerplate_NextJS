import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <S.Header>
      <Image src="/img/now.svg" height={23} width={80} />
      <S.Container auto>
        <S.Breadcrumb>
          <ul>
            <li>
              <Link href="#">NowDocs</Link>
            </li>
            <li>
              <Link href="#">Documents</Link>
            </li>
            <li>
              <Link href="#">Transaction Documents</Link>
            </li>
          </ul>
        </S.Breadcrumb>

        <S.Container>
          <S.Icons>
            <li>
              <Link href={'#'}>
                <Image src={'/img/ico_help.png'} height={32} width={32}></Image>
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image
                  src={'/img/ico_notifications.png'}
                  height={32}
                  width={32}
                ></Image>
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image src={'/img/ico_apps.png'} height={32} width={32}></Image>
              </Link>
            </li>
            <li>
              <Link href={'#'}>
                <Image src={'/img/ico_user.png'} height={32} width={32}></Image>
              </Link>
            </li>
          </S.Icons>
          <S.UserMenu>
            Robert Koller{' '}
            <span className="usermenu_seta-baixo">
              <Image src={'/img/ico_arrow-down.svg'} height={7} width={13} />
            </span>
          </S.UserMenu>
        </S.Container>
      </S.Container>
    </S.Header>
  )
}
