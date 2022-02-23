import React from 'react'
import "./css/pagos.css"
import MP from "../assets/MP.png"
import ML from "../assets/ML.png"
import VISA from "../assets/VISA-logo.png"
import TRANSF from "../assets/VISA-logo.png"
import EFT from "../assets/VISA-logo.png"

export const MediosDePago = () => {
  return (
    <div id="pagos">
        <img src={MP} alt="Imagen de MercadoPago" className=""></img>
        <img src={ML} alt="Imagen de MercadoLibre" className=""></img>
        <img src={TRANSF} alt="Imagen de Transferencias" className=""></img>
        <img src={VISA} alt="Imagen de VISA" className=""></img>
        <img src={EFT} alt="Imagen de Efectivo" className=""></img>
    </div>
  )
}

export default MediosDePago
