import React from 'react'

export const Productos = (props) => {
    return (
        <div className="w3-col l3 s6">
            <div className="w3-container w3-margin-bottom">
                <img src={props.image1} className="imagen"></img>
                <p>{props.name1}</p>
                {
                    props.name1!=null
                    ?  
                    <a href={props.url1} className="comprar">VER</a>
                    :
                    <div></div>
                }
            </div>
            <div className="w3-container w3-margin-bottom">
                <img src={props.image2} className="imagen"></img>
                <p>{props.name2}</p>
                {
                    props.name2!=null
                    ?  
                    <a href={props.url2} className="comprar">VER</a>
                    :
                    <div></div>
                }

            </div>
        </div>
    )
}

export default Productos