import React from 'react'

const Info = () => {
    const Info=[
        {id:"1",
            name:"jonh",
            age:"10",
        },
        {
            id:"2",
            name:"doe",
            age:"20",
        },
        {
            id:"3",
            name:"jane",
            age:"30",
        },
        {
            id:"4",
            name:"doe",
            age:"40",
        },
        {
            id:"5",
            name:"jane",
            age:"50",
        }
    ]
  return (
    <div>
        {Info.map((Info)=>(
            <ul key={Info.id}>
               <h1> <li>{Info.name}</li></h1>
               <h1><li>{Info.age}</li></h1>
               
            </ul>

        ))}
    </div>
  )
}

export default Info