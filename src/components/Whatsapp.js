import React from 'react'

import whatsapp from '../assets/whatsapp.png'

export const Whatsapp = (props) => {
    return (
        <div className="whatsapp">
            <a href="https://api.whatsapp.com/send?phone=1166899124" target="_blank">
                <img alt="" 
                src={whatsapp} >
                </img>
            </a>
        </div>
    )
}

export default Whatsapp
