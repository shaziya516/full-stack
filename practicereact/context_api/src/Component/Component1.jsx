import React from 'react'
import {Data} from "../App";
import {Data1} from "../App";

const Component1 = () => {

  return (
    <Data.Consumer>

        { (name) =>{
            // return <h1>{name}</h1>

            return(
                <Data1.Consumer>
                    {(age) =>{
                        return <h1>my name is : {name} and i'm {age} year old</h1>
                    }}
                </Data1.Consumer>
            )

        }}

    </Data.Consumer>
  )
}

export default Component1