import Image from 'next/image'
import * as S from './styles'
import { ItemTransaction } from './TransactionSubmissions'

type TransactionItemProp = {
  item: ItemTransaction
  isCheck: boolean
  onClick: (e: any) => void
}

export function TransactionItem({
  item,
  isCheck,
  onClick
}: TransactionItemProp) {
  return (
    <S.GridItemBody>
      <S.GridItem>
        <div>
          <input
            type="checkbox"
            id={item?.id}
            checked={isCheck}
            onClick={onClick}
          />
        </div>
        <div>
          <p className="text-title text-blue">{item?.transaction}</p>
          <p className="text-small text-green" style={{ marginTop: '10px' }}>
            {item?.insurance}
          </p>
        </div>
        <div>
          <p className="text-blue">{item?.user}</p>
        </div>
        <div className="col-center">
          <Image src={item?.issuer} height={36} width={36} alt="issuer" />
        </div>
        <div className="col-center">
          <Image src={item?.dealer} height={36} width={36} alt="issuer" />
        </div>
        <div>
          <p className="text-blue">{item?.questionnaire}</p>
          <p className="text-blue">
            <strong>{item?.version}</strong>
          </p>
        </div>
        <div>
          <span>{item?.status}</span>
          <p className="text-small text-blue">{item?.date}</p>
        </div>
      </S.GridItem>
    </S.GridItemBody>
  )
}
