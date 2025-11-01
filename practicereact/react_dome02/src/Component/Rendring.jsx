import React from 'react'

const Rendring = () => {
    const numbers =[1,2,3,4,5,6,7,8,9]
    const info =[
        {
            name:"shaz",
            email:"shaz@123",
           location:"india",
        },
        {
            name:"nikku",
            email:"nikku@123",
            location:"turky",
        },
        {
            name:"sara",
            email:"sara@123",
            location:"usa"
        }
    ]
  return (
    <div>
        {numbers.map((number)=>(
           <ul key ={number}>
            <li>{number}</li>
           </ul>
        ))}

        <main>

            {info.map((user)=>(
                <ul key={Math.random()}>
                    <li>{user.email}</li>
                </ul>

            ))}
        </main>
      
     
    </div>
  )
}

export default Rendring