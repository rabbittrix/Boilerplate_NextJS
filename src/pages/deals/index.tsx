import DataGrid from 'react-data-grid'
import 'react-data-grid/lib/styles.css'
import { useContext } from 'react'
import Link from 'next/link'
import * as S from './Styles'
import { DataContext } from '../../context/data'

export default function Deals() {
  const { columns, rows, filter } = useContext(DataContext)

  return (
    <div>
      <S.Header>
        <input
          onChange={(e) => {
            filter(e.target.value)
          }}
          type="text"
          id="search"
        />
        <Link href="/deals/create">Add new</Link>
      </S.Header>

      <S.Main>
        <DataGrid
          columns={columns}
          rows={rows}
          onSelectedRowsChange={(e) => {
            console.log(e)
          }}
        />
      </S.Main>
    </div>
  )
}
