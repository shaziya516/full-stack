import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";

const Navbar = ({search,setSearch}) => {
  return (
    <nav className="navbar">
        <div className="right">
           <input type="text" placeholder='search anything' value={search} onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <div className="left">
            <CiHeart/>
            <BsCart3/>
            <FiUserPlus/>
        </div>
    </nav>
  )
}

export default Navbar