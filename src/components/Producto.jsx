import React from 'react'
import "./css/products.css"

export const Producto = (props) => {
    return (
                <div className="col m-5" id="producto">
                    <img src={props.image1} className="imagen" alt=""></img>
                    <p>{props.name1}</p>
                    {
                        props.name1!=null
                        ?  
                        <a href={props.url1} className="comprar" target="_blank" rel="noopener noreferrer">VER</a>
                        :
                        <div></div>
                    }
                </div>
    )
}

export default Producto