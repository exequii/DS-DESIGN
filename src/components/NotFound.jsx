import React from 'react'
import "./css/error.css"
import Error from "../assets/404.png"

export const NotFound = () => {
  return (
    <div id="error">
        <img src={Error} alt="Imagen de error"></img>
    </div>
  )
}

export default NotFound