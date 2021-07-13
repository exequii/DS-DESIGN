import React from 'react'


export const Destacados = (props) => {
    return (
    <div className="contenedor-destacados">
        <div className="destacados">
            <h2>PRODUCTOS DESTACADOS</h2>
            <div className="contenedor-destacados">
                <div className="item-destacados">
                    <img src={props.image1} alt=""></img>
                    <h3>
                        {props.name1}
                    </h3>
                    <div className="overlay">
                        <a href="" target="_blank">VER</a>
                    </div>
                </div>

                <div className="item-destacados">
                    <img src={props.image2} alt=""></img>
                    <h3>
                        {props.name2}
                    </h3>
                    <div className="overlay">
                        <a href="" target="_blank">VER</a>
                    </div>
                </div>

                <div className="item-destacados">
                    <img src={props.image3} alt=""></img>
                    <h3>
                        {props.name3}
                    </h3>
                    <div className="overlay">
                        <a href="" target="_blank">VER</a>
                    </div>
                </div>

                <div className="item-destacados">
                    <img src={props.image4} alt=""></img>
                    <h3>
                        {props.name4}
                    </h3>
                    <div className="overlay">
                        <a href="" target="_blank">VER</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Destacados
