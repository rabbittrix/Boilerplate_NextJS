import React from 'react'
import { useRouter } from 'next/router'
import { AppProps } from 'next/dist/shared/lib/router/router'

// I created Breadcrumb component but I need to complete it

const Breadcrumb = (props: AppProps) => {
  const router = useRouter()
  const bread =
    typeof location != 'undefined'
      ? props.bread || location.pathname.split('/').splice(1)
      : []

  if (props.bread_item) {
    bread[bread.length - 1] = props.bread_item
  }

  return (
    <div
      className={`hidden sm:flex  flex-row items-center ${
        props.no_padd ? '' : 'mb-2'
      } ${props.className || ''}`}
    >
      <span
        className={'cursor-pointer flex items-center'}
        onClick={() => {
          router.push('/').then()
        }}
      >
        {/* <Icon name={'home'} className='text-gray-300' size={16} /> */}
      </span>
      {bread.map((item: any, index: number) => {
        return (
          <span
            key={`breadCrump_${item}_${index}`}
            onClick={() => {
              if (index < bread.length - 1) {
                router
                  .push(`/${bread.slice(0, index + 1).join('/')}`.toLowerCase())
                  .then()
              }
            }}
            className={`${
              index < bread.length - 1 && 'text-gray-700 cursor-pointer'
            } text-sm font-semibold truncate max-w-sm`}
          >
            <span className={'capitalize'}>{`/ ${item}`}</span>&nbsp;
          </span>
        )
      })}
    </div>
  )
}

export default Breadcrumb
