import TabureteAlto from './assets/TabureteAlto.jpg'
import TabureteBajo from './assets/TabureteBajo.jpg'
import BancoVestCen from './assets/Banco VestuarioCentral.jpg'
import BancoPerchero from './assets/Banco Vestuario PercherSimple.jpg'
import BancoLargo from './assets/Banco VestuarioLargo.jpg'
import BancoCorto from './assets/Banco VestuarioChico.jpg'
import Ratona from './assets/Mesa Ratona.jpg'
import RatonaElevable from './assets/Mesa Ratona Elevable.jpg'
import MesaArrime from './assets/Mesa Arrime.jpg'
import Desayunador from './assets/Desayunador1.jpg'
import Estanteria from './assets/Estanteria1Libreria.jpg'
import RackTv from './assets/Rack de Tv.jpg'
import MesaCandy from './assets/Mesada Candy.jpg'
import EscritorioCajonera from './assets/Escritorio conCajonera.jpg'
import BancoAlto from './assets/destacados1.jpg'
import Desayunador3Planos from './assets/Desayunador 3Planos.jpg'
import Barrera1 from './assets/barrera-standard.jpeg'
import Barrera2 from './assets/barrera-boca.jpeg'
import Barrera3 from './assets/barrera-boca-grande.jpeg'


const articulos = {
    Industrial: {
        Bancos: [
          { 
            nombre: "Banco Vestuario Perchero Simple",
            descripcion: "Medidas: 178x150x40cm. Base de caño de 30x30mm. Asiento formado por 3 listones de madera 1x5 laqueados. Botinero en parte superior. Pintura epoxi horneable.",
            link: "https://articulo.mercadolibre.com.ar/MLA-826471696-banco-de-vestuario-de-150-con-perchero-y-botinero-fabrica-_JM#position=19&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
            imagen: BancoPerchero
          },
          { 
            nombre: "Banco Vestuario Central",
            descripcion: "Medidas: 178x150x80cm. Base de caño de 30x30mm. Asiento formado por 6 listones de madera 1x5 laqueados. Botinero en parte superior. Pintura epoxi horneable.",
            link: "https://articulo.mercadolibre.com.ar/MLA-821143461-banco-de-vestuario-doble-con-perchero-botinero-150-fabrica-_JM#position=20&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
            imagen: BancoVestCen
          },
          { 
            nombre: "Banco Vestuario Chico",
            descripcion: "Medidas: 42x80x39cm. Base de caño de 30x30mm. Asiento formado por 3 listones de madera 1x5 laqueados. Pintura epoxi horneable. Sellado y Laqueado.",
            link: "https://articulo.mercadolibre.com.ar/MLA-820995811-banco-de-vestuario-quincho-o-jardin-080-reforzado-_JM?searchVariation=45168734680#searchVariation=45168734680&position=10&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
            imagen: BancoCorto
          },
          { 
            nombre: "Banco Vestuario Largo",
            descripcion: "Medidas: 42x150x39cm. Base de caño de 30x30mm. Asiento formado por 3 listones de madera 1x5 laqueados. Pintura epoxi horneable. Sellado y Laqueado.",
            link: "https://articulo.mercadolibre.com.ar/MLA-844104559-banco-de-vestuariojardin-180-de-fabrica-reforzado-_JM?searchVariation=52463382249#searchVariation=52463382249&position=22&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
            imagen: BancoLargo
          },
          { 
            nombre: "Banco Vestuario Angosto",
            descripcion: "Medidas: 178x100x40cm. Base de caño de 30x30mm. Asiento formado por 3 listones de madera 1x5 laqueados. Botinero en parte superior. Pintura epoxi horneable.",
            link: "",
            imagen: BancoLargo
          }
        ],
        Biblotecas: [
            { 
                nombre: "Estanteria Biblioteca",
                descripcion: "Medidas 195x65x30cm. Estructura de caño de 25x25mm. Pintura epoxi horneable. 6 Planos de madera de 25mm de espesor.",
                link: "https://articulo.mercadolibre.com.ar/MLA-832742971-estanteria-biblioteca-de-hierro-y-madera-industrial-6-planos-_JM?searchVariation=48631442701#searchVariation=48631442701&position=7&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
                imagen: Estanteria
            }
        ],
        Mesas: [
            { 
                nombre: "Escritorio con Cajonera",
                descripcion: "",
                link: "",
                imagen: EscritorioCajonera
            },
            { 
                nombre: "Rack de TV",
                descripcion: "",
                link: "",
                imagen: RackTv
            },
            { 
                nombre: "Mesa Candy",
                descripcion: "",
                link: "",
                imagen: MesaCandy
            },
            { 
                nombre: "Mesa Ratona",
                descripcion: "Medidas 45x50x90cm. Base de Caño de 20x20mm. Tapas de pino cepilladas, pulidas y selladas para luego ser tonalizadas.",
                link: "https://articulo.mercadolibre.com.ar/MLA-857745982-mesa-ratona-diseno-industrial-hierro-y-madera-90x50-45-alto--_JM?searchVariation=56680220565#searchVariation=56680220565&position=6&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
                imagen: Ratona
            },
            { 
                nombre: "Mesa Ratona Elevable",
                descripcion: "Medidas 45x50x90cm. Base de Caño de 20x20mm. Tapas de pino cepilladas, pulidas y selladas para luego ser tonalizadas. Riendas laterales para elevar altura.",
                link: "https://articulo.mercadolibre.com.ar/MLA-831281327-mesa-ratona-hierro-y-madera-diseno-industrial-elevable--_JM?searchVariation=48246115321#searchVariation=48246115321&position=2&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
                imagen: RatonaElevable
            },
            { 
                nombre: "Mesa de Arrime",
                descripcion: "Medidas 70x34x44cm. Base de Caño de 20x20mm. Pintura epoxi horneable. Tapa madera tablero alistonado. Terminaciones en laca.",
                link: "https://articulo.mercadolibre.com.ar/MLA-896315314-mesa-de-arrime-de-hierro-y-madera-sillon-notebock-30-x-44-_JM#position=1&search_layout=grid&type=item&tracking_id=f8c54f0e-7150-44e2-99c4-9f6ad32a60bd",
                imagen: MesaArrime
            },
            { 
                nombre: "Desayunador 3 Planos",
                descripcion: "Medidas 85x100x30cm. Base de Caño de 20x40mm. Pintura epoxi horneable. 3 Maderas 25mm de espesor tonalizadas en 3 manos. Estantes defasados. ",
                link: "https://articulo.mercadolibre.com.ar/MLA-832748913-barra-diseno-industrial3-planos-1metro-x-30cm-altura-85cm-_JM?searchVariation=48634032554#searchVariation=48634032554&position=32&search_layout=grid&type=item&tracking_id=8bf42ce7-12db-468a-8f5d-5da5f66b4bf5",
                imagen: Desayunador3Planos
            },
            { 
                nombre: "Desayunador",
                descripcion: "Medidas 85x100x30cm. Base de Caño de 20x40mm. Pintura epoxi horneable. Madera 25mm de espesor tonalizadas en 3 manos. Estantes defasados.",
                link: "https://articulo.mercadolibre.com.ar/MLA-832735505-desayunador-de-hierro-y-madera-110-x-45-x-105alto-_JM#position=23&search_layout=stack&type=item&tracking_id=c6335bbc-f464-4f34-8002-afaad25ac6ca",
                imagen: Desayunador
            }
          ],
        Taburetes: [
            { 
                nombre: "Taburete Alto",
                descripcion: "Medidas 75x30x30cm. Base de caño de 25x25mm. Pintura epoxi horneable. Tapa madera 22mm espesor. Sellado y Laqueado.",
                link: "https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=2&search_layout=stack&type=item&tracking_id=ea1911f9-60f7-4ffa-86dc-900a3293fd2b",
                imagen: TabureteAlto
            },
            { 
                nombre: "Taburete Bajo",
                descripcion: "Medidas 45x30x30cm. Base de caño de 25x25mm. Pintura epoxi horneable. Tapa madera 22mm espesor. Sellado y Laqueado.",
                link: "https://articulo.mercadolibre.com.ar/MLA-848372888-taburete-de-hierro-y-madera-bajo-de-fabrica-_JM?searchVariation=53739087618#searchVariation=53739087618&position=2&search_layout=stack&type=item&tracking_id=fc20ccf8-ac78-4e69-ae22-f8dffb1d13d5",
                imagen: TabureteBajo
            },
            { 
                nombre: "Taburete Alto con Respaldo",
                descripcion: "Medidas 45x30x30cm. Base de caño de 25x25mm. Pintura epoxi horneable. Tapa madera 22mm espesor. Sellado y Laqueado.",
                link: "https://articulo.mercadolibre.com.ar/MLA-832745925-taburete-con-resspaldo-de-hierro-y-madera-para-cerveceria-_JM?searchVariation=48632999652#searchVariation=48632999652&position=5&search_layout=grid&type=item&tracking_id=f49e713c-b8e8-4429-8a9d-b9306bdd4266",
                imagen: TabureteAlto
            }
        ]
    },
    Barreras: [
        {
            nombre: "Barrera Sanitaria Standard",
            descripcion: "Medidas 70x70cm. Caño 20x15mm o 30x10mm. Pintura Epoxi blanca o negra. Lona de cristal de 500 micrones. Felpa Antideslizante inferior.",
            link: "",
            imagen: Barrera1
        },
        {
            nombre: "Barrera Sanitaria C/boca de Paso Chica",
            descripcion: "Medidas 75x70cm C/boca de paso de 14cm. Caño 20x15mm o 30x10mm. Pintura Epoxi blanca o negra. Lona de cristal de 500 micrones. Felpa Antideslizante inferior.",
            link: "",
            imagen: Barrera2
        },
        {
            nombre: "Barrera Sanitaria C/boca de Paso Grande",
            descripcion: "Medidas 70x140cm C/boca de paso de 14cm. Caño 20x15mm o 30x10mm. Pintura Epoxi blanca o negra. Lona de cristal de 500 micrones. Felpa Antideslizante inferior.",
            link: "",
            imagen: Barrera3
        }
    ],
    Sillas: [
        {
            nombre: "Banco Alto con Respaldo",
            descripcion: "",
            link: "",
            imagen: BancoAlto
        },
        {
            nombre: "Banco Alto",
            descripcion: "",
            link: "",
            imagen: BancoAlto
        },
        {
            nombre: "Silla",
            descripcion: "",
            link: "",
            imagen: BancoAlto
        },
        {
            nombre: "Perchero",
            descripcion: "Estructura metalica de barral central de 32mm de diametro con ganchos y patas en 16mm de diametro. Pintura en epoxi ,varios colores.",
            link: "https://articulo.mercadolibre.com.ar/MLA-832754288-perchero-de-pie-de-cano-8-ganchos-para-colgar-el-mejor--_JM?searchVariation=174107915220#searchVariation=174107915220&position=10&search_layout=grid&type=item&tracking_id=8bf42ce7-12db-468a-8f5d-5da5f66b4bf5",
            imagen: BancoAlto
        }
    ]
}

export default articulos