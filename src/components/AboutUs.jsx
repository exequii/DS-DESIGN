import React from 'react'
import "./css/about.css"
import LOGO from "../assets/logo.png"

export const AboutUs = () => {
  return (
    <div id="aboutus">
        <h3 className='mb-4'>Sobre Nosotros</h3>
        <p>DS DESIGN es una empresa familiar con mas de 30 años en el mercado. Desde sus inicios, ubicada en Mataderos,
            se convirtio en un referente comercial en la zona. Lejos de quedarse en el tiempo, la empresa se ha ido 
            reinventando, desde sillas y mesas de caño, a muebles de estilo industrial, e inclusive barreras sanitarias
            para ayudar a cuidarnos durante la pandemia COVID-19.
        </p>
        <div>
          <img src={LOGO} alt='Logotipo'></img>
        </div>
    </div>
  )
}

export default AboutUs
