import React from 'react'
import "./css/wp.css"
import whatsapp from '../assets/whatsapp.png'

export const Whatsapp = (props) => {
    return (
        <div className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=+5491158697521" target="_blank" rel="noopener noreferrer">
                <img alt="" 
                src={whatsapp} >
                </img>
            </a>
        </div>
    )
}

export default Whatsapp
