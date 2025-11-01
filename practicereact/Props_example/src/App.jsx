import React from 'react'
import Person from './Component/Person'
import Products from './Component/Products'

const App = () => {
  return (
    <div>
      <Person name="shaz" age = "20"/>
      <Products item="laptop"  price="1000"/>
    </div>
  )
}

export default App