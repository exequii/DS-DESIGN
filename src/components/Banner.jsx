import React from 'react'


export const Banner = (props) => {

    return (
        <div className={props.banner} >
            <h3>{props.producto}</h3>
            <p>{props.slogan}</p>
            <a>Presupuesto</a>
        </div>
    )
}

export default Banner
