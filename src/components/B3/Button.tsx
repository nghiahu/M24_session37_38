import React, { useContext, useState } from 'react'
import { context } from "../Bt1/ThemeContext"
export default function Button() {
  const { them }  = useContext(context)
  return (
    <div>Bài 3 <br />
      <button style={{backgroundColor:them}}>Click me</button>
    </div>
  )
}
