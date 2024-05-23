import React, { useContext } from 'react'
import { context } from './ThemeContext'
export default function SonContext() {
    let result = useContext(context)
  return (
    <div>
        <p>{result}</p>
        </div>
  )
}
