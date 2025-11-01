import React from 'react'

const Component1 = ({count,onClickHandler}) => {

    const handleClick =() => onClickHandler();




  return (
    <div>
        <p>{count}</p>
        <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default Component1;