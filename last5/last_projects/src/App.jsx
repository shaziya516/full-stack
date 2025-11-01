import React from 'react'
import Accordion from './Components/Accordion'
// import { accordionData } from './content'
import './accordion.css'

const App = () => {


  const accordionData = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },

    {
      title: "What is a component?",
      content: "A component is a reusable piece of UI that can be composed to build complex UIs."
    },

    {
      title: "What is state?",
      content: "State is a built-in object that allows components to create and manage their own data."
    },

    {
      title: "What is a prop?",
      content: "Props are short for properties and are used to pass data from one component to another."
    },


  ]

  return (
    <section className="container">
      <div className="card">

        <div className="accordion">


          {
            accordionData.map((item) => (
              <Accordion item={item} />
            ))
          }
        </div>


      </div>

    </section>



  )
}

export default App