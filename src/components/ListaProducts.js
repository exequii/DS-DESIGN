import React from 'react'

import {Productos} from '../components/Productos'

const ListaProducts = () => {
    return (
        <div className="w3-row w3-grayscale lista">
            <Productos  name1="Taburete" 
                        name2="Mesas"
                        url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7" 
                        url2="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                        image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg" 
                        image2="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
            </Productos>

            <Productos  name1="Taburete" 
                        name2="Mesas"
                        url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                        url2="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                        image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg"
                        image2="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
            </Productos>

            <Productos  name1="Taburete"
                        name2="Mesas"
                        url1="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                        url2="https://articulo.mercadolibre.com.ar/MLA-832730281-taburete-de-hierro-y-madera-para-cervecerias-y-desayunador-_JM?searchVariation=59229359325#searchVariation=59229359325&position=1&search_layout=stack&type=item&tracking_id=1cc21a35-7924-4b63-860b-3b36b637c7c7"
                        image1="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg"
                        image2="https://miña.net/wp-content/uploads/2018/03/distribuciondearmario.jpg">
            </Productos>

            <Productos  name1={null}
                        name2={null}
                        url1={null}
                        url2={null}
                        image1={null} 
                        image2={null}>
            </Productos>
        </div>
    )
}

export default ListaProducts;
