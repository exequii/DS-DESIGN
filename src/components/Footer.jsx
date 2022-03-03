import React from 'react'
import "./css/footer.css"

export const Footer = () => {
    return (
        <div className="container-footer">
            <footer className="footer" id="footer">

                        <div className="about-container">
                            <h4  className='mb-3' id="info">Sobre Nosotros</h4>
                            <div id="sobre">
                                <p><a href="/contacto#footer" target="_blank" rel="noopener noreferrer">Pagos</a></p>
                                <p><a href="/contacto#form-contact" target="_blank" rel="noopener noreferrer">Reclamos</a></p>
                                <p><a href="/contacto#form-contact" target="_blank" rel="noopener noreferrer">Sugerencias</a></p>
                                <p><a href="/contacto#aboutus" target="_blank" rel="noopener noreferrer">Historia</a></p>
                            </div>
                        </div>

                        <div className="info-container">
                            <h4 className='mb-3'>DS Design</h4>
                            <p><i className="fa fa-fw fa-map-marker"></i>Mataderos, CABA.</p>
                            <p><i className="fa fa-fw fa-phone"></i> 4683 - 5406</p>
                            <p><i className="fa fa-fw fa-envelope"></i> sanson22ar@yahoo.com.ar</p>
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
        </div>
    )
}

export default Footer
