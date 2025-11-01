import React from 'react'
import { useReducer, useState } from 'react'
import { initialState,counterReducer } from './UseReduser_exr'

const Counter = () => {

    const [state , dispatch] = useReducer (counterReducer ,  initialState);

    const [ inputValue , setInputValue ] = useState (0);


    const  handleIncrement =  () => dispatch ({type : "increment"});
const handleDecrement = () => dispatch ({type : "decrement"});


const handleIncrementByAmount = () =>{
  dispatch({type : "incrementByAmount",payload : Number(inputValue)});
  setInputValue(0);
};

const handleDecrementByAmount = () =>{
  dispatch({type : "decrementByAmount",payload : Number(inputValue)});
  setInputValue(0);
};




  return (
    <div>
        <h2>Counter : {state.count}</h2>

        <button onClick={handleIncrement}>Increment</button>
         <button onClick={handleDecrement}>decrement</button>


         <div>
          <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
          <button onClick={handleIncrementByAmount}>Add</button>
          <button  onClick={handleDecrementByAmount}>sub</button>
         </div>
    </div>
  )
}

export default Counter