import React, {
  useMemo,
  useRef,
  useState,
  useEffect,
  forwardRef,
  useImperativeHandle
} from 'react'
import { ActionMore, CheckBox, Icon, Input, Notfound, Pagination } from '.'
import { isMobile } from 'react-device-detect'
import { classNames } from 'functions'

// I created Table component but I need to complete it

const Table = (
  {
    data = [],
    page = 1,
    link,
    page_size,
    total_count,
    search_key = 'name',
    onSortChange,
    onPageChange,
    headers,
    onSearchChange,
    onAdd,
    onSelectedChange = null,
    search_value,
    batchDelete,
    marginLottie,
    no_search,
    has_share,
    handleShareItem,
    pagination,
    sort_list,
    sort,
    loading = false,
    actions = null,
    customeFirstRow = null,
    excludeIcon = false
  },
  ref
) => {
  const emtpy = useRef(null)
  const [selected, setSelected] = useState([])
  const [state, setState] = useState({
    is_searching: search_value && search_value.length ? true : false,
    search_value: search_value || '',
    addState: null,
    sort_type: '',
    sort_key: ''
  })

  useImperativeHandle(ref, () => ({
    select_all: () => {
      handleSelectAll()
    }
  }))

  const handleSelectAll = () => {
    if (selected.length === data.length) {
      setSelected([])
    } else {
      const arr = data.map((item) => {
        return item.id
      })
      setSelected(arr)
    }
  }

  const handleSelectRow = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((itm) => itm !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  useEffect(() => {
    onSelectedChange && onSelectedChange(selected)
  }, [selected])

  const handleSortChange = (key) => {
    if (state.sort_key !== key) {
      state.sort_type = 'asc'
    } else {
      state.sort_type = state.sort_type === 'asc' ? 'desc' : 'asc'
    }
    state.sort_key = key
    if (onSortChange) {
      onSortChange(`${state.sort_type === 'asc' ? '-' : ''}${state.sort_key}`)
    }
    setState({ ...state })
  }

  const handleSearchChange = (e) => {
    state.search_value = e.target.value
    setState({ ...state })
  }

  const handleBatchDelete = () => {
    if (selected.length === 0) {
      return
    }
    const arr = []
    for (const item of selected) {
      const inx = data.findIndex((itm) => itm.id === item)
      if (inx >= 0) {
        arr.push(data[inx])
      }
    }
    batchDelete(arr)
    setSelected([])
  }

  const handlePagination = (page) => {
    onPageChange(page.selected + 1)
  }

  let data_table = useMemo(() => {
    if (onSortChange) {
      return data
    } else {
      const key = state.sort_key
      if (!data || !data.length) {
        return []
      }
      return data.sort((a, b) => {
        if (typeof (a[key] === 'string')) {
          const nameA = a[key] ? a[key] : ''
          const nameB = b[key] ? b[key] : ''
          if (!nameA || !nameB) {
            return
          }
          if (`${nameA}`.toLowerCase() < `${nameB}`.toLowerCase()) {
            return state.sort_type === 'asc' ? -1 : 1
          }
          if (`${nameA}`.toLowerCase() > `${nameB}`.toLowerCase()) {
            return state.sort_type === 'asc' ? 1 : -1
          }
          return 0
        }
      })
    }
  }, [data, state.sort_type, state.sort_key, onSortChange])

  const pressKey = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      if (onSearchChange) {
        onSearchChange(state.search_value)
      }
    }
  }

  const current_sort = useMemo(() => {
    if (sort_list) {
      return sort_list.filter((itm) => itm.id === sort).length > 0
        ? sort_list.filter((itm) => itm.id === sort)[0].name
        : ''
    }
    return ''
  }, [sort, sort_list])

  if (state.search_value !== '' && !sort_list) {
    data_table = data_table.filter((itm) =>
      itm[search_key].toLowerCase().includes(state.search_value.toLowerCase())
    )
  }
  return (
    <div className={'flex flex-1 flex-col overflow-hidden h-full'}>
      <div
        className={`flex items-center flex-row h-10 mb-3 ${
          !onAdd && no_search ? 'hidden' : 'flex'
        }`}
      >
        {batchDelete && selected.length > 0 && (
          <button
            onClick={handleBatchDelete}
            transparent
            className={'h-10 w-10 hover:bg-gray-100'}
          >
            <Icon
              name={excludeIcon ? 'ban' : 'trash'}
              className="text-red-400"
            />
          </button>
        )}
        <div className="flex-1" />
        {!no_search && selected.length === 0 ? (
          <div className="flex items-center justify-center relative">
            <div
              className={classNames(
                'relative flex items-center justify-center',
                sort_list ? 'mr-2' : ''
              )}
            >
              {state.is_searching && (
                <Input
                  autoFocus
                  value={state.search_value}
                  onBlur={() => {
                    if (state.search_value.length) {
                      return
                    }
                    state.is_searching = !state.is_searching
                    setState({ ...state })
                  }}
                  onKeyUp={pressKey}
                  onChange={handleSearchChange}
                  className={`placeholder-gray-400 px-2 py-1 border w-48`}
                />
              )}
              <button
                className="absolute right-1"
                onClick={() => {
                  if (state.search_value.length) {
                    if (onSearchChange) {
                      onSearchChange(state.search_value)
                    }
                  } else {
                    state.is_searching = !state.is_searching
                    setState({ ...state })
                  }
                }}
              >
                <Icon name="search" className="text-gray-500" />
              </button>
            </div>

            {sort_list && (
              <ActionMore
                title={current_sort}
                title_class="hidden sm:flex"
                icon="sort-descending"
                data={sort_list}
                selected={sort || null}
                className={`bg-gray-100  px-2 rounded mt-1`}
                btn_class={`xs:w-auto sm:w-40 h-10`}
                onSelect={(selected) => {
                  onSortChange(selected.id)
                }}
              />
            )}
          </div>
        ) : (
          <ActionMore
            data={[
              {
                name: `Select all`,
                id: 'select_all'
              }
            ]}
            onSelect={(item) => {
              if (item.id === 'select_all') {
                handleSelectAll()
              }
            }}
          />
        )}
      </div>
      {/* <div className='relative h-3 w-full'>
                <Hprogress show={loading} />
            </div> */}

      <div
        id={'tour_table'}
        className={'relative pb-1 flex flex-1 flex-col'}
        style={{ minHeight: 200 }}
      >
        {/* {(Boolean(data_table.length) || customeFirstRow) && */}
        <ul
          className={classNames(
            'relative group flex flex-row overflow-hidden justify-start items-center py-2.5 bg-white rounded px-2 mb-2',
            isMobile ? 'hidden' : ''
          )}
        >
          {batchDelete && (
            <li style={{ width: 30 }} className={'opacity-100'}>
              {data.length > 0 && (
                <CheckBox
                  checked={selected.length === data.length}
                  onChange={handleSelectAll}
                />
              )}
            </li>
          )}
          {headers &&
            headers.map((header, index) => {
              return (
                <li
                  key={`table_${header.key}_${index}`}
                  onClick={() => {
                    if (!sort_list) {
                      handleSortChange(header.key)
                    }
                  }}
                  style={{
                    width: header.width || null,
                    minWidth: header.minWidth || null
                  }}
                  className={classNames(
                    !sort_list && 'cursor-pointer',
                    'text-sm text-gray-400',
                    !header.mob_hidden ? 'flex' : 'hidden md:flex',
                    header.full && 'flex-1',
                    header.extra_class || ''
                  )}
                >
                  <span>{header.title}</span>
                  {state.sort_key === header.key && (
                    <Icon
                      name={
                        state.sort_type === 'asc'
                          ? 'arrow-narrow-down'
                          : 'arrow-narrow-up'
                      }
                      className="text-gray-600 ml-2"
                      size={16}
                    />
                  )}
                </li>
              )
            })}
          {actions && <div style={{ width: 55 }} />}
        </ul>
        {!data_table.length && !customeFirstRow && <Notfound />}
        {(Boolean(data_table.length) || customeFirstRow) && (
          <ul className="divide-y divide-gray-200 m-0 p-0 overflow-auto flex flex-1 flex-col">
            {customeFirstRow && customeFirstRow()}
            {data_table &&
              data_table.map((item, index) => {
                return (
                  <TableRow
                    key={`${item.id}_table_data_${index}`}
                    has_selection={batchDelete}
                    item={item}
                    link={link}
                    headers={headers}
                    selected={selected}
                    has_share={has_share}
                    handleShareItem={handleShareItem}
                    handleSelectRow={handleSelectRow}
                    actions={actions}
                  />
                )
              })}
          </ul>
        )}
      </div>
      {pagination && Boolean(total_count > page_size) && (
        <Pagination
          page={page}
          total_count={total_count}
          page_size={page_size}
          onPageChange={handlePagination}
        />
      )}
    </div>
  )
}

const TableRow = (props: AppProps) => {
  const {
    item,
    headers,
    selected,
    handleSelectRow,
    actions,
    has_selection,
    handleShareItem
  } = props
  const [state, setState] = useState({
    onlongtouch: null,
    timer: null,
    touchduration: 800
  })

  const is_select = selected.includes(item.id)

  const touchstart = (e) => {
    e.preventDefault()
    if (!state.timer) {
      state.timer = setTimeout(onlongtouch, state.touchduration)
    }
  }

  const touchend = () => {
    if (state.timer) {
      clearTimeout(state.timer)
      state.timer = null
    }
  }

  const onlongtouch = () => {
    state.timer = null
    handleSelectRow(item.id)
  }

  return (
    <li
      onTouchStart={touchstart}
      onTouchEnd={touchend}
      style={{ backgroundColor: is_select && isMobile }}
      className={classNames(
        is_select && isMobile && 'bg-opacity-10',
        'relative group flex w-full max-w-full flex-row justify-start items-center py-2 hover:bg-gray-100 sm:px-2'
      )}
      onClick={(e) => {
        if (e.ctrlKey) {
          handleSelectRow(item.id)
        }
        if (isMobile && selected.length > 0) {
          handleSelectRow(item.id)
        }
      }}
    >
      <ul className="flex flex-1 flex-row items-center justify-center">
        <li
          style={{ width: 30 }}
          className={classNames(isMobile ? 'hidden' : '')}
        >
          <CheckBox
            className={`${!is_select && `opacity-0 group-hover:opacity-100`}`}
            checked={is_select}
            onChange={() => handleSelectRow(item.id)}
          />
        </li>
        {headers &&
          headers.map((header, inx) => {
            const data = item.Get(header.key, '')
            return (
              <li
                key={`${header.key}_${inx}`}
                style={{
                  width: header.width || null,
                  minWidth: header.minWidth || null
                }}
                className={classNames(
                  'text-gray-400 text-sm',
                  !header.mob_hidden ? 'flex' : 'hidden md:flex',
                  header.full && 'flex-1',
                  header.extra_class || ''
                )}
              >
                {header.render ? (
                  header.render(item, is_select, selected.length)
                ) : (
                  <span>{data}</span>
                )}
              </li>
            )
          })}

        {actions && (
          <div style={{ width: 50 }} className={'flex justify-end'}>
            <ActionMore
              top={true}
              onSelect={(selected) => {
                const inx = actions(item).findIndex(
                  (itm) => itm.key === selected.name
                )
                if (actions(item)[inx]) {
                  actions(item)[inx].callback(item)
                }
              }}
              data={actions(item).map((item) => {
                return { id: item.key, name: item.key }
              })}
            />
          </div>
        )}
      </ul>
    </li>
  )
}

export default forwardRef(Table)
