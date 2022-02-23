import React from 'react'

import Navbar from '../components/NavBar'
import Whatsapp from '../components/Whatsapp'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import AboutUs from '../components/AboutUs'
import Mapa from "../components/Mapa"
import BannerContacto from '../components/BannerContacto'

export const Contacto = () => {
  return (
    <div>
        <Navbar></Navbar>
        <BannerContacto></BannerContacto>
        <div className="d-flex mt-5">
          <ContactForm motivo="Reclamos y Sugerencias"></ContactForm>
          <Mapa></Mapa>
        </div>
        <AboutUs></AboutUs>
        <Whatsapp></Whatsapp>
        <Footer></Footer>
    </div>
  )
}
