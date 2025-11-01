import React from 'react'
import "../index.css"
import "../App.css"
const Recommended = ({setRecommended,recommended}) => {
  return (
    <section className="recommended">
        <div className="" id="strong">
            Recommended
        </div>
        <div className="recommendedoptions">
            <button onClick={()=>setRecommended("All")} style={{backgroundColor: recommended==="All" ? "Black" : "White" ,color: recommended!=="All" ? "Black" : "White"}}>All Products</button>
            <button onClick={()=>setRecommended("Nike")} style={{backgroundColor: recommended==="Nike" ? "Black" : "White",color: recommended!=="Nike" ? "Black" : "White"}}>Nike</button>
            <button onClick={()=>setRecommended("Addidas")} style={{backgroundColor: recommended==="Addidas" ? "Black" : "White",color: recommended!=="Addidas" ? "Black" : "White"}}>Addidas</button>
            <button onClick={()=>setRecommended("Puma")} style={{backgroundColor: recommended==="Puma" ? "Black" : "White",color: recommended!=="Puma" ? "Black" : "White"}}>Puma</button>
            <button onClick={()=>setRecommended("Vans")} style={{backgroundColor: recommended==="Vans" ? "Black" : "White",color: recommended!=="Vans" ? "Black" : "White"}}>Vans</button>
        </div>
    </section>
  )
}

export default Recommended