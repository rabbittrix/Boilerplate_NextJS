import Image from 'next/image'
import * as S from './styles'

export function TransactionsSortBy() {
  return (
    <S.GridItemHead>
      <div>&nbsp;</div>
      <div className={'column2'}>
        <span>
          Transaction
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by transaction"
            />
          </span>
        </span>
        <span>
          Insurance
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by insurance"
            />
          </span>
        </span>
      </div>
      <div className={'column3'}>
        <span>
          user
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by user"
            />
          </span>
        </span>
      </div>
      <div>
        <span>
          Issuer
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by Issuer"
            />
          </span>
        </span>
      </div>
      <div>
        <span>
          Dealer
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by Dealer"
            />
          </span>
        </span>
      </div>
      <div>
        <span>
          Questionnaire
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by Questionaire"
            />
          </span>
        </span>
        <span>
          version
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by version"
            />
          </span>
        </span>
      </div>
      <div>
        <span>
          Status
          <span>
            <Image
              src={'/img/ico_sort.svg'}
              height={16}
              width={12}
              alt="sort by Status"
            />
          </span>
        </span>
      </div>
    </S.GridItemHead>
  )
}
