import Image from 'next/image'

export function TransactionCommands() {
  const clickHandler = (e: any) => {
    e.stopImmediatePropagation()
    console.log(e.target)
  }
  return (
    <div className="items-command">
      <ul>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_edit-white.svg'}
              height={13}
              width={13}
              alt="edit"
            />
          </span>
          Edit
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_open-white.svg'}
              height={13}
              width={13}
              alt="Open in NowSpace"
            />
          </span>
          Open in NowSpace
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_comment-white.svg'}
              height={13}
              width={13}
              alt="Comment"
            />
          </span>
          Comment
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_template-white.svg'}
              height={13}
              width={13}
              alt="Use as Template"
            />
          </span>
          Use as Template
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_download-white.svg'}
              height={13}
              width={13}
              alt="Download"
            />
          </span>
          Download
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_sendto-white.svg'}
              height={13}
              width={13}
              alt="Send To"
            />
          </span>
          Send To
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_close-white.svg'}
              height={13}
              width={13}
              alt="Close Editing"
            />
          </span>
          Close Editing
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_viewdata-white.svg'}
              height={13}
              width={13}
              alt="View Data"
            />
          </span>
          View Data
        </li>
        <li>
          <span onClick={clickHandler}>
            <Image
              src={'/img/ico_viewresults-white.svg'}
              height={13}
              width={13}
              alt="View Results"
            />
          </span>
          View Results
        </li>
      </ul>
    </div>
  )
}
