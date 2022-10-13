import Image from 'next/image'
import * as S from './styles'

export function TransactionFilters() {
  return (
    <S.FilterContainer>
      <S.FlexContainer>
        <div>
          <button className="button_left-icon">
            <span>
              <Image
                src={'/img/filters_open.svg'}
                height={20}
                width={20}
                alt="Open Filters"
              />
            </span>
            Open Filters
          </button>
          <span className={'text-blue pagination'}>
            Showing <strong>1</strong> - <strong>10</strong> of{' '}
            <strong>62</strong>
          </span>
        </div>
        <button className="dropdown-menu">
          Show 10
          <span></span>
        </button>
      </S.FlexContainer>
      <S.FlexContainer>
        <input
          type="text"
          className="input_search"
          placeholder="Search Submissions..."
        />
        <button className="button_left-icon active" style={{ flexGrow: '1' }}>
          <span>
            <Image
              src={'/img/ico_plus.svg'}
              height={20}
              width={20}
              alt="New Document"
            />
          </span>
          New Document
        </button>
      </S.FlexContainer>
    </S.FilterContainer>
  )
}
