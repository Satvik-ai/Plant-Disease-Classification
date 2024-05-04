import React from 'react'
import Error404 from '../img/error404.png'
import './home.css'
function Error() {
  return (
    <div className="error">
        <img src={Error404} alt="" />
    </div>
  )
}

export default Error