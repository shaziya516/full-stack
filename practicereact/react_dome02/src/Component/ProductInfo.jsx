import React from 'react'

const ProductInfo = () => {
    const product={
        name:"laptop",
        price: 1000,
        avilability:"instok"
    }
   
  return (
    <div>
       <h1> name:{product.name}</h1>
       <h1> price:{product.price}</h1>
      <h1>  avilability:{product.avilability}</h1>
    </div>
  )
}

export default ProductInfo