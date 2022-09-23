import { useRouter } from 'next/router'
import * as S from '../components/page-styles'

export default function Page() {
  const { query } = useRouter()
  const title =
    query.slug !== undefined ? query.slug.toString().replace(/-/g, ' ') : ''

  return <S.Title>{title}</S.Title>
}
