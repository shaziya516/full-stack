import React from 'react'
import Movie from './Component/Movie'
import { useState } from 'react'
import Component1 from './Component/Component1'
import Component2 from './Component/Component2'
import Example1 from './Component/Example1'

const App = () => {

  // const [count , setCount]= useState(0);
  return (
    <div>
      {/* <Movie/> */}
      {/* <Component1 count = {count} onClickHandler = {() => setCount(count + 1)}/>
      <Component2 count = {count} onClickHandler = {() => setCount(count + 1)}/> */}
      <Example1/>
    </div>
  )
}

export default App;