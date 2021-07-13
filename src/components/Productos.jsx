import React from 'react'

export const Productos = (props) => {
    return (
                <div className="col m-5">
                    <img src={props.image1} className="imagen" alt=""></img>
                    <p>{props.name1}</p>
                    {
                        props.name1!=null
                        ?  
                        <a href={props.url1} className="comprar" target="_blank">VER</a>
                        :
                        <div></div>
                    }
                </div>
    )
}

export default Productos