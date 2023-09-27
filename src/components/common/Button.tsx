import React from 'react'
import { input } from 'zod'

export default function Button({clickable,inputs,clsnm} : Button) {
  return (
    <button onClick={clickable} className={`btn ${clsnm}`}>{inputs}</button>
  )
}
