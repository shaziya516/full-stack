import React, { useState } from 'react'
import Popup from './Popup';

const CopyInput = () => {

  const [ inputValue , setInputValue] = useState("");
  const [copy,setCopy] = useState(false);


  const handleCopy = () =>{

    navigator.clipboard.writeText(inputValue).then (()=>{
      setCopy(true);
      setTimeout(()=>setCopy(false) , 2000);
    });
  };





  return (
    <div>
      <input type="text "value={inputValue} onChange={e =>setInputValue(e.target.value)} />
      <button onClick={handleCopy}>copy</button>
      <Popup copy = {copy}/>
    </div>
  )
}

export default CopyInput;