import React, { useState, useEffect } from 'react'
import FetchData from './Component/FetchData';

const App = () => {

  // const [value , setValue] = useState(0);
  // const [something , setSomething] = useState(0);

  // useEffect(() =>{
  //   console.log("call useEffect");
  //   document.title = `Increment ${value}`;
  // } , [value]);






  return (
    <div>
      {/* <h2>{value}</h2> */}
      {/* <button onClick={()=> setValue(value + 1)}>Click me</button>
      <button onClick={()=> setSomething(something+ 1)}>increment by something</button> */}
      <FetchData/>
    </div>
  )
}

export default App;