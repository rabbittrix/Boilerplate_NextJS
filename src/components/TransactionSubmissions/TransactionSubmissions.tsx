import * as S from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { TransactionCommands } from './TransactionCommands'
import { TransactionFilters } from './TransactionFilters'
import { TransactionsSortBy } from './TransactionsSortBy'
import { TransactionItem } from './TransactionItem'
import { TransactionControls } from './TransactionControls'

export type TransactionSubmissionsProps = {
  data: ItemTransaction[]
}

export type ItemTransaction = {
  id: string
  transaction: string
  insurance: string
  user: string
  issuer: string
  dealer: string
  questionnaire: string
  version: string
  status: string
  date: string
}

export function TransactionSubmissions({ data }: TransactionSubmissionsProps) {
  const [isCheckAll, setIsCheckAll] = useState<boolean>(false)
  const [isCheck, setIsCheck] = useState<string[]>([])
  const [list, setList] = useState<ItemTransaction[]>(data)
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    setList(data)
  }, [list, data])

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(list.map((li) => li.id))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  const checkboxHandleClick = (e: any) => {
    const { id, checked } = e.target
    setIsCheck([...isCheck, id])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id))
    }
  }

  const itemsClickHandler = (id: string) => {
    active === id ? setActive('') : setActive(id)
  }

  return (
    <S.Panel>
      <S.PanelHeader>
        <S.Title>
          <span>
            <Image
              src={'/img/title_doc.svg'}
              height={38}
              width={38}
              alt={'Transaction Docs Submissions'}
            />
          </span>
          <h1>Transaction Docs Submissions</h1>
        </S.Title>
        <ul className="panel-header_list">
          <li className="submissionHeader_button active">Dealer Docs</li>
          <li className="submissionHeader_button">Issuer Docs</li>
          <li className="submissionHeader_button">Internal Docs</li>
        </ul>
      </S.PanelHeader>
      <TransactionFilters />
      <S.GridContainer>
        <TransactionControls checked={isCheckAll} onClick={handleSelectAll} />
        <TransactionsSortBy />
        {data.map((item, index) => {
          return (
            <S.GridItemsContainer
              key={index}
              onClick={() => itemsClickHandler(item?.id)}
              className={active === item?.id ? 'active' : ''}
            >
              <TransactionCommands />
              <TransactionItem
                item={item}
                isCheck={isCheck.includes(item?.id)}
                onClick={(e: any) => checkboxHandleClick(e)}
              />
            </S.GridItemsContainer>
          )
        })}
      </S.GridContainer>
    </S.Panel>
  )
}
