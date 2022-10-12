import * as S from './styles'
import Image from 'next/image'

export function Panel() {
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
        <ul>
          <li className="submissionHeader_button active">Dealer Docs</li>
          <li className="submissionHeader_button">Issuer Docs</li>
          <li className="submissionHeader_button">Internal Docs</li>
        </ul>
      </S.PanelHeader>

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

      <S.GridContainer>
        <ul>
          <li>select</li>
          <li>Placeholder</li>
          <li>Bulk</li>
          <li>Actions</li>
          <li>Go Here</li>
          <li>Close Editing</li>
        </ul>

        <S.GridHeader>ordenacao</S.GridHeader>

        <S.GridItemsContainer>
          <S.GridItem>item</S.GridItem>
        </S.GridItemsContainer>
      </S.GridContainer>
    </S.Panel>
  )
}
