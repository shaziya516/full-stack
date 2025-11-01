import React from 'react'
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUserPlus } from "react-icons/fi";


const Nabvar = ({search,setSearch}) => {
  return (
    <nav className="nabvar">
        <div className="right">
          <input type="text" placeholder='Search Anything' className='text' value={search} onChange={(e) =>setSearch(e.target.value)} />
          </div>

        <div className="left">
             <CiHeart/>
            <BsCart3/>
            <FiUserPlus/>
        </div>

    </nav>
  )
}

export default Nabvar;