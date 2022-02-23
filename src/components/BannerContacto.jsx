import React from 'react'
import Contacto from "../assets/client-atencion.png"
import "./css/contactBanner.css"

export const BannerContacto = () => {
  return (
    <div id="contacto-banner" className='d-flex'>
        <div id="div-texto">
            <h3 className='mb-3'>¡Contáctanos!</h3>
            <p>¿Tenes una idea para tu hogar? Diseñamos y cotizamos tu diseño a medida.<br></br>
            Ya estas mas cerca de tener la casa de tus sueños.</p>
            <a href="mailto:sanson22ar@yahoo.com.ar" className='btn btn-info' >Contacto</a>
        </div>
        <div id="div-imagen">
            <img src={Contacto} alt="Imagen Publicitaria de Contacto"></img>
        </div>
    </div>
  )
}

export default BannerContacto
