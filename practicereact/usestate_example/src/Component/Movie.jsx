import  { useState } from 'react'

const Movie = () => {

   const [movie,setMovie]= useState([
        {id : 1, title : "spider man", rating : 3},
        {id : 2 , title : "avanger" , rating : 5},

    ]);

    const handelClick= ()=>{
        setMovie(
            movie.map((m) => (m.id==1 ? {...movie,title: "john"}: m))
        );
    };





  return (
   <section>
    {movie.map((m)=>(
        <li key ={Math.random()}>{m.title}</li>

    )) }


    <button onClick={handelClick}>change name</button>
   </section>
  )
}

export default Movie;