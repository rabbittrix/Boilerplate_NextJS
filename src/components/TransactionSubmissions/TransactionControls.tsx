import Image from 'next/image'

type TransactionControlsProps = {
  checked: boolean
  onClick: () => void
}

export function TransactionControls({
  checked,
  onClick
}: TransactionControlsProps) {
  return (
    <ul className="grid-container_list">
      <li className="text-blue">
        <input type="checkbox" checked={checked} onClick={onClick} />
      </li>
      <li className="text-blue">
        <span>
          <Image
            src={'/img/ico_placeholder.svg'}
            height={13}
            width={13}
            alt="placeholder"
          />
        </span>
        Placeholder
      </li>
      <li className="text-blue">
        <span>
          <Image
            src={'/img/ico_bulk.svg'}
            height={13}
            width={13}
            alt="placeholder"
          />
        </span>
        Bulk
      </li>
      <li className="text-blue">
        <span>
          <Image
            src={'/img/ico_actions.svg'}
            height={13}
            width={13}
            alt="placeholder"
          />
        </span>
        Actions
      </li>
      <li className="text-blue">
        <span>
          <Image
            src={'/img/ico_gohere.svg'}
            height={13}
            width={13}
            alt="placeholder"
          />
        </span>
        Go Here
      </li>
      <li className="text-blue">
        <span>
          <Image
            src={'/img/ico_closeediting.svg'}
            height={13}
            width={13}
            alt="placeholder"
          />
        </span>
        Close Editing
      </li>
    </ul>
  )
}
