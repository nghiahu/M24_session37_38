import React, { useContext } from 'react'
import SonContext from './components/Bt1/SonContext'
import { context } from './components/Bt1/ThemeContext'
import Button from './components/B3/Button'
export default function App() {
  
  let {them} = useContext(context)
  return (
    <div>
              <context.Provider value={them}>
            <SonContext></SonContext>
            <Button></Button> 
            </context.Provider>  
            
    </div>
  )
}
