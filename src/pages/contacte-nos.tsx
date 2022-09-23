import * as S from '../components/page-styles'

interface dataType {
  data: {
    title: string
    description: string
  }
}

export default function ContactPage({ data }: dataType) {
  return (
    <>
      <S.Title>{data.title}</S.Title>
      <S.Description>{data.description}</S.Description>
    </>
  )
}

export async function getStaticProps() {
  const data = {
    title: 'Contacte-nos',
    description: 'Fale connosco a qualquer momento...'
  }

  return {
    props: {
      data
    }
  }
}
