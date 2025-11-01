import React from 'react'

const Popup = ({copy}) => {
  return (
   <section>
  {copy && (
    <div style={{position:"absolute",bottom:'3rem'}}>
        copied to clipbord
    </div>
  )}
   </section>
  )
}

export default Popup