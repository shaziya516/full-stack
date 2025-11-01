import React from 'react'
import { useState } from 'react'

import "../testimonial.css"

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {quote: "This is a great product! I love using it every day.",
    author: "John Doe"},
    
    {quote: "Amazing service and support. Highly recommend!",
      author: "Jane Smith"},

    {quote: "A game changer in the industry. Will definitely use again.",
      author:"shazu"},  

  ]

  const handlePrev = ()=>{
    setCurrentIndex((currentIndex + testimonials.length -1) % testimonials.length);
  }

  const handleNext =() => {
    setCurrentIndex((currentIndex+ testimonials.length + 1) % testimonials.length);
  }






  return (






    <div className='testimonial'>

      <div className="section">

        <div className="quets">{testimonials[currentIndex].quote}</div>



        <div className="author">:- {testimonials[currentIndex].author}</div>


        <div className="btn">

          <button className="prev"  onClick={handlePrev}>Prev</button>
          <button className="next" onClick={handleNext}>Next</button>
        </div>

      </div>



    </div>
  )
}

export default Testimonial;