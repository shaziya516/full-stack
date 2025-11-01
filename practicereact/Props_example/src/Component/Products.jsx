import React from 'react'

const Products = (props) => {
  return (
    <div>
        <h2>{props.item}</h2>
        <h2>{props.price}</h2>

    </div>
  )
}

export default Products