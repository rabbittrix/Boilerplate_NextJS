import React from "react"
import { Btn } from "./style"

export default function index({ text, src, border, left }: {
  text: string,
  border: boolean,
  src?: string,
  left?: boolean
}) {
  return (
    <div>
      <Btn border={border} src={src}>
        {left && <img src={src} alt="right arrow" />}
        {text && <p>{text}</p>}
        {!left && src && <img src={src} alt="right arrow" />}
      </Btn>
    </div>
  )
}
