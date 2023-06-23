import Link from 'next/link'
import * as S from './styles'
import { useContext } from 'react'
import { DataContext } from '../../../context/data'
import { useRouter } from 'next/router'

export default function Create() {
  const { addRow, rows } = useContext(DataContext)
  const { push } = useRouter()

  return (
    <S.Wrapper>
      <S.Form
        onSubmit={(e) => {
          e.preventDefault()

          const formData = new FormData(e.target as any)
          const formValues = Object.fromEntries(formData)

          addRow({
            id: rows.length,
            ...formValues
          })

          push('/deals')
        }}
      >
        <S.Header>
          <h1>Deal Name</h1>
          <div>
            <S.Back>
              <Link href="/deals">Back</Link>
            </S.Back>
            <S.Button type="submit">Save</S.Button>
          </div>
        </S.Header>

        <S.FromFieldWrapper>
          <div className="wrapper">
            <S.FormField>
              <label htmlFor="company">Company</label>
              <input name="company" type="text" id="company" />
            </S.FormField>
            <S.FormField>
              <label htmlFor="offType">Off. Type</label>
              <input name="offType" type="text" id="offType" />
            </S.FormField>
            <S.FormField>
              <label htmlFor="orderApp">Ord. To App</label>
              <input name="orderApp" type="text" id="orderApp" />
            </S.FormField>
            <S.FormField>
              <label htmlFor="offStatus">Off. Status</label>
              <S.Select name="offStatus" id="offStatus">
                <option value="confidential">Confidential</option>
                <option value="book open">Book Open</option>
              </S.Select>
            </S.FormField>
            <S.FormField>
              <label htmlFor="offStatusDate">Off. Status Date</label>
              <input name="offStatusDate" type="date" id="offStatusDate" />
            </S.FormField>
          </div>
        </S.FromFieldWrapper>
      </S.Form>
    </S.Wrapper>
  )
}
