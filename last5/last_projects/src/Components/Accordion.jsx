import React from 'react'
import { useState } from 'react';
import '../accordion.css'

const Accordion = ({item}) => {

   //isme pata n kya hou ye  isse sahi krdo run kro

    const [isActive, setIsActive] = useState(false);


    return (

        
                   


                        <div className="accordion-item">

                            <div className="upper">
                                
                            <div className="accordion-title" >
                                {item.title}

                            </div>

                            
                            <p className='icon' onClick={()=>setIsActive(!isActive)}>{isActive ? "-" : "+"}</p>
                            </div>

                            <div className='lower' style={{display:isActive?"block":"none"}}><p className="accordion-content">{item.content} </p></div>


                            
                        </div>


  
    )
}

export default Accordion;