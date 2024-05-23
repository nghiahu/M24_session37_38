import React, { createContext, useState } from 'react'

export const context = React.createContext<string|any>({them:'red'})
export default function ThemeContext() {

  return (
    <div>ThemeContext

    </div>
  )
}
 