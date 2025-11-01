import  { useState } from 'react'

const Example1 = () => {
    const[random,setRandom]=useState(()=>
    Math.floor(Math.random()*100)
);

const generateNewNumber = ()=>{
   const newNumber= Math.floor(Math.random()*100);
    setRandom(newNumber)
}




  return (
    <div>
        <h1>Random Number :{random}</h1>
        <button onClick={generateNewNumber}> Generate new number</button>
    </div>
  )
}

export default Example1