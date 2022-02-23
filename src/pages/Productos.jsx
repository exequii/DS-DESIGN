import React from 'react'

import { useLocation } from "react-router";

import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import {Producto} from '../components/Producto'

import TabureteAlto from '../assets/TabureteAlto.jpg'
import TabureteBajo from '../assets/TabureteBajo.jpg'
import BancoVestCen from '../assets/Banco VestuarioCentral.jpg'
import BancoPerchero from '../assets/Banco Vestuario PercherSimple.jpg'
import BancoLargo from '../assets/Banco VestuarioLargo.jpg'
import BancoCorto from '../assets/Banco VestuarioChico.jpg'
import Ratona from '../assets/Mesa Ratona.jpg'
import RatonaElevable from '../assets/Mesa Ratona Elevable.jpg'
import MesaArrime from '../assets/Mesa Arrime.jpg'
import Desayunador from '../assets/Desayunador1.jpg'
import Estanteria from '../assets/Estanteria1Libreria.jpg'


export const Productos = () => {
    //Aca deberia obtener de la base de datos todos los productos del tipo "industrial"
    //Almacenarlos en un Array
    //Hacer un forEach del array y renderizar un producto pasandole los atributos del objeto que me pasa la BDD.
    var object = {
        nombre: "Taburete",
        link: "https://articulo.mercadolibre.com.ar/MLA-848372888-taburete-de-hierro-y-madera-bajo-de-fabrica-_JM?searchVariation=53739087618#searchVariation=53739087618&position=2&search_layout=stack&type=item&tracking_id=fc20ccf8-ac78-4e69-ae22-f8dffb1d13d5",
        image: TabureteAlto
    }
    var object2 = {
        nombre: "Taburete",
        link: "https://articulo.mercadolibre.com.ar/MLA-848372888-taburete-de-hierro-y-madera-bajo-de-fabrica-_JM?searchVariation=53739087618#searchVariation=53739087618&position=2&search_layout=stack&type=item&tracking_id=fc20ccf8-ac78-4e69-ae22-f8dffb1d13d5",
        image: TabureteBajo
    }
    var productosIndustrial = [object, object2, object]

    let infoUrl = useLocation()
    let filtro1 = infoUrl.pathname.slice(1)
    let filtro2 = infoUrl.search.slice(1)
    let titulo;

    switch(filtro1){
        case "sillas":
            titulo = "Sillas de Caño";
            break;
        case "barreras":
            titulo = "Barreras Sanitarias"
            break;
        case "industrial": 
            titulo = "Estilo Industrial"
            break;
        default:
            titulo = "";
            break
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
                        productosIndustrial.map((element,index) => (
                            <Producto
                                key={index} 
                                name1={element.nombre} 
                                url1={element.link} 
                                image1={element.image}>
                            </Producto>
                            )
                        )
                    }

                    <Producto  name1="Taburete Alto" 
                                url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=ad005352-a9b7-4aeb-bacd-c9b6b0a8a795" 
                                image1={TabureteAlto}>
                    </Producto>

                    <Producto  name1="Taburete Bajo" 
                                url1="https://articulo.mercadolibre.com.ar/MLA-848372888-taburete-de-hierro-y-madera-bajo-de-fabrica-_JM?searchVariation=53739087618#searchVariation=53739087618&position=2&search_layout=stack&type=item&tracking_id=fc20ccf8-ac78-4e69-ae22-f8dffb1d13d5"
                                image1={TabureteBajo}>
                    </Producto>

                    <Producto  name1="Banco Vestuario Central"
                                url1="https://articulo.mercadolibre.com.ar/MLA-821143461-banco-de-vestuario-doble-con-perchero-botinero-150-fabrica-_JM#position=20&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={BancoVestCen}>
                    </Producto>

                    <Producto  name1="Banco Vestuario con Perchero"
                                url1="https://articulo.mercadolibre.com.ar/MLA-826471696-banco-de-vestuario-de-150-con-perchero-y-botinero-fabrica-_JM#position=19&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={BancoPerchero}>
                    </Producto>

                    <Producto  name1="Banco Vestuario Largo" 
                                url1="https://articulo.mercadolibre.com.ar/MLA-844104559-banco-de-vestuariojardin-180-de-fabrica-reforzado-_JM?searchVariation=52463382249#searchVariation=52463382249&position=22&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca" 
                                image1={BancoLargo}>
                    </Producto>

                    <Producto  name1="Banco Vestuario Corto" 
                                url1="https://articulo.mercadolibre.com.ar/MLA-820995811-banco-de-vestuario-quincho-o-jardin-080-reforzado-_JM?searchVariation=45168734680#searchVariation=45168734680&position=10&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={BancoCorto}>
                    </Producto>

                    <Producto  name1="Mesa Ratona"
                                url1="https://articulo.mercadolibre.com.ar/MLA-857745982-mesa-ratona-diseno-industrial-hierro-y-madera-90x50-45-alto--_JM?searchVariation=56680220565#searchVariation=56680220565&position=6&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={Ratona}>
                    </Producto>

                    <Producto  name1="Mesa Ratona Elevable"
                                url1="https://articulo.mercadolibre.com.ar/MLA-831281327-mesa-ratona-hierro-y-madera-diseno-industrial-elevable--_JM?searchVariation=48246115321#searchVariation=48246115321&position=2&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={RatonaElevable}>
                    </Producto>

                    <Producto  name1="Mesa de Arrime"
                                url1="https://articulo.mercadolibre.com.ar/MLA-896315314-mesa-de-arrime-de-hierro-y-madera-sillon-notebock-30-x-44-_JM#position=8&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={MesaArrime}>
                    </Producto>

                    <Producto  name1="Rack de TV"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                                image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
                    </Producto>

                    <Producto  name1="Escritorio con Cajonera"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                                image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
                    </Producto>

                    <Producto  name1="Mesa de Bar"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832735505-desayunador-de-hierro-y-madera-110-x-45-x-105alto-_JM#position=23&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={Desayunador}>
                    </Producto>

                    <Producto  name1="Estanteria Bibloteca"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832742971-estanteria-biblioteca-de-hierro-y-madera-industrial-6-planos-_JM?searchVariation=48631442701#searchVariation=48631442701&position=7&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca"
                                image1={Estanteria}>
                    </Producto>

                    <Producto   name1="Mesa CandyBar"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                                image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
                    </Producto>

                    <Producto   name1="Desayunador 3 Planos"
                                url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                                image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
                    </Producto>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}