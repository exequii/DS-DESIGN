import React from 'react'

import Carousel3d from '../components/Carousel3d'
import Destacados from '../components/Destacados'
import Navbar from '../components/NavBar'
import Whatsapp from '../components/Whatsapp'
import Footer from '../components/Footer'

import Destacados1 from '../assets/destacados1.jpg'
import Destacados2 from '../assets/destacados2.jpg'
import Destacados3 from '../assets/destacados3.jpg'
import Destacados4 from '../assets/destacados4.jpg'

import "../components/css/generalStyles.css"

export const Home = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Carousel3d></Carousel3d>
            <Destacados
                name1="Bancos Altos"
                image1={Destacados1}
                url1=""
                name2="Taburetes Altos"
                image2={Destacados2}
                url2=""
                name3="Banco Vestuario"
                image3={Destacados3}
                url3=""
                name4="Estanteria Biblioteca"
                image4={Destacados4}
                url4="">
            </Destacados>
            <Whatsapp></Whatsapp>
            <Footer></Footer>
        </div>
    )
}
