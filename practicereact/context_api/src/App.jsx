import React, { createContext } from 'react'
import Component1 from './Component/Component1'


export const Data = createContext()
export const Data1 = createContext()




const App = () => {

  const name = "shazz";
  const age = 20;




  return (
    <div>

      <Data.Provider value={name}>

        <Data1.Provider value={age}>

          <Component1 />

        </Data1.Provider>

      </Data.Provider>

    </div>
  )
}

export default App