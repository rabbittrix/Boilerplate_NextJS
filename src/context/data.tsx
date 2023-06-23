import React, { createContext, useState } from 'react'

const rowsOrginal = [
  {
    id: '0',
    company: 'Avaria',
    offType: 'Blonde',
    orderApp: '0',
    offStatus: 'book open',
    offStatusDate: '2023-06-20'
  },
  {
    id: '1',
    company: 'Tudo',
    offType: 'Red',
    orderApp: '0',
    offStatus: 'c',
    offStatusDate: '2023-06-20'
  }
]

const columnsOriginal = [
  { key: 'id', name: 'ID' },
  { key: 'company', name: 'Company' },
  { key: 'offType', name: 'Off. Type' },
  { key: 'orderApp', name: 'Ord. To App' },
  { key: 'offStatus', name: 'Off. Status' },
  { key: 'offStatusDate', name: 'Off. Status Date' }
]
const DataContext = createContext<any>({
  columns: columnsOriginal,
  rows: rowsOrginal
})

const DataProvider = ({ children }: any) => {
  const [rows, setRows] = useState(rowsOrginal)
  const [columns] = useState(columnsOriginal)
  const addRow = (row: any) =>
    setRows((rows) => {
      rows.push(row)

      return rows
    })

  const filter = (value: string) => {
    if (value === '') {
      return setRows(rowsOrginal)
    }

    const filteredRows = rowsOrginal.filter((row) => {
      return (
        row.company.toLowerCase().includes(value.toLowerCase()) ||
        row.offType.toLowerCase().includes(value.toLowerCase()) ||
        row.orderApp.toLowerCase().includes(value.toLowerCase()) ||
        row.offStatus.toLowerCase().includes(value.toLowerCase()) ||
        row.id.toLowerCase().includes(value.toLowerCase())
      )
    })

    setRows(filteredRows)
  }

  return (
    <DataContext.Provider value={{ addRow, rows, columns, filter }}>
      {children}
    </DataContext.Provider>
  )
}

export { DataProvider, DataContext }
