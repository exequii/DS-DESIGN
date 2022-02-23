import React from 'react'
import "./css/banner.css"

export const Banner = (props) => {

    return (
        <div className="d-flex justify-content-center align-content-center align-items-center mt-5">
            <div className={props.banner} id="banner" >
                <h3 className='mb-2'>{props.producto}</h3>
                <p>{props.slogan}</p>
                <span className='mb-3'>No pierdas mas tiempo, tu hogar te espera.</span>
                <a href={props.link} target="_blank" rel="noopener noreferrer" className='btn btn-info'>Presupuesto</a>
            </div>
        </div>
    )
}

export default Banner
