import React from 'react'

import { useLocation } from "react-router";

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {Producto} from '../components/Producto'
import Whatsapp from '../components/Whatsapp'

import Articulos from "../productos.js"


export const Productos = () => {
    var productos;
    let titulo;
    let infoUrl = useLocation()
    let filtro1 = infoUrl.pathname.slice(1)
    let filtro2 = infoUrl.search.slice(1)

    switch(filtro1){
        case "sillas":
            titulo = "Sillas de Caño";
            productos = Articulos.Sillas
            break;
        case "barreras":
            titulo = "Barreras Sanitarias"
            productos = Articulos.Barreras
            break;
        case "industrial": 
            titulo = "Estilo Industrial"
            switch(filtro2){
                case "bancos":
                    productos = Articulos.Industrial.Bancos;
                    break;
                case "biblotecas":
                    productos = Articulos.Industrial.Biblotecas;
                    break;
                case "mesas":
                    productos = Articulos.Industrial.Mesas;
                break;
                case "taburetes":
                    productos = Articulos.Industrial.Taburetes;
                break;
                default:
                    break;
            }
            break;
        default:
            titulo = "";
            break;
    }

    return (
        <div>
            <NavBar></NavBar>
            <Banner banner={filtro1} 
                    producto={titulo}
                    slogan="Diseñamos tu imaginación" 
                    link="mailto:sanson22ar@yahoo.com.ar">
            </Banner>
            <div className="container-lista">
                <div className="row justify-content-around">

                    {
                        productos.map((element,index) => (
                            <Producto
                                key={index} 
                                name1={element.nombre}
                                descripcion={element.descripcion} 
                                url1={element.link} 
                                image1={element.imagen}>
                            </Producto>
                            )
                        )
                    }
                </div>
            </div>
            <Whatsapp></Whatsapp>
            <Footer></Footer>
        </div>
    )
}
