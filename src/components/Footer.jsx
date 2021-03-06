import React from 'react'
import "./css/footer.css"

export const Footer = () => {
    return (
        <div className="container-footer">
            <footer className="footer" id="footer">

                        <div className="info-container">
                            <h4 className='mb-3'>Contáctanos</h4>
                            <p><i className="fa fa-fw fa-map-marker"></i>Mataderos, CABA.</p>
                            <p><i className="fa fa-fw fa-phone"></i> 4683 - 5406</p>
                            <p><i className="fa fa-fw fa-envelope"></i><a href="mailto:sanson22ar@yahoo.com.ar" id="mailto"> sanson22ar@yahoo.com.ar</a></p>
                        </div>

                        <div className="about-container">
                            <h4  className='mb-3' id="info">Sobre Nosotros</h4>
                            <div id="sobre">
                                <p><a href="/contacto#aboutus" target="_blank" rel="noopener noreferrer">Historia</a></p>
                                <p><a href="/contacto#form-contact" target="_blank" rel="noopener noreferrer">Sugerencias</a></p>
                                <p><a href="/contacto#form-contact" target="_blank" rel="noopener noreferrer">Reclamos</a></p>
                            </div>
                        </div>

                        <div className="info-container">
                            <h4 className='mb-3'> Medios de Pago</h4>
                                <p><i className="fa fa-fw fa-cc-amex"></i> MercadoPago</p>
                                <p><i className="fa fa-fw fa-cc-visa" id="card-m"></i> Transferencia/Efectivo</p>
                                <div className="iconitos mt-2">
                                    <i className="fa fa-facebook-official w3-hover-opacity w3-large"></i>
                                    <i className="fa fa-instagram w3-hover-opacity w3-large"></i>
                                    <i className="fa fa-linkedin w3-hover-opacity w3-large"></i>
                                </div>
                        </div>
                        
            </footer>
            <p id="me">Desarrollado por <a href='https://www.linkedin.com/in/ezequiel-sans%C3%B3n/' target='_blank' rel="noopener noreferrer">Ezequiel Sansón</a></p>
        </div>
    )
}

export default Footer
