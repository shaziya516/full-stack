import '../style2.css';
// import axios from 'axios';
import { useState, useEffect } from 'react';


import axios from "axios"
import React from 'react'






const Meals = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(res => {
            console.log(res.data.meals);
            setItem(res.data.meals);

        }
        )
    }, [])



    return (


        <section className='container'>


            <input type="text" placeholder='search food' />



            <div className='inner_container'>

                <div className='cards'>

                    {item.map((item) => (

                        <section className='card'>

                           <div className='image-container'> <img src={item.strMealThumb} alt={item.strMeal} /></div>

                            <section className="content">

                                <p>{item.strMeal}</p>
                                <p>#{item.strMealThumb}</p>


                            </section>

                        </section>
                    ))}
                </div>


            </div>


        </section>


    )







}

export default Meals;


















