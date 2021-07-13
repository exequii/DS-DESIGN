import React from 'react'

export const Footer = () => {
    return (
        <div className="container-footer">
            <footer className="footer">
                    <div className="form-container">
                        <h4>Contacto</h4>
                        <p>Te quedo alguna duda? Escribinos!</p>
                            <form action="/action_page.php" target="_blank">
                                <p><input class="w3-input w3-border" type="text" placeholder="Nombre" name="Name" required/></p>
                                <p><input class="w3-input w3-border" type="text" placeholder="Email" name="Email" required/></p>
                                <p><input class="w3-input w3-border" type="text" placeholder="Telefono" name="Tel" required/></p>
                                <p><input class="w3-input w3-border" type="text" placeholder="Mensaje" name="Message" required/></p>
                                <button type="submit" class="w3-button w3-block w3-black">ENVIAR</button>
                            </form>
                    </div>

                        <div className="about-container">
                            <h4>Sobre Nosotros</h4>
                            <div>
                                <p><a href="#">Pagos</a></p>
                                <p><a href="#">Reclamos</a></p>
                                <p><a href="#">Sugerencias</a></p>
                                <p><a href="#">Historia</a></p>
                            </div>
                        </div>

                        <div className="info-container">
                            <h4>DS Design</h4>
                            <p><i class="fa fa-fw fa-map-marker"></i>Mataderos,CABA.</p>
                            <p><i class="fa fa-fw fa-phone"></i> 4683-5406</p>
                            <p><i class="fa fa-fw fa-envelope"></i> esanson22ar@yahoo.com.ar</p>

                            <h4>Medios de Pago</h4>
                            <p><i class="fa fa-fw fa-cc-amex"></i> MercadoPago</p>
                            <p><i class="fa fa-fw fa-credit-card"></i>Transferencia/Efectivo</p>

                            <br></br>

                            <div className="iconitos">
                                <i class="fa fa-facebook-official w3-hover-opacity w3-large"></i>
                                <i class="fa fa-instagram w3-hover-opacity w3-large"></i>
                                <i class="fa fa-snapchat w3-hover-opacity w3-large"></i>
                                <i class="fa fa-pinterest-p w3-hover-opacity w3-large"></i>
                                <i class="fa fa-twitter w3-hover-opacity w3-large"></i>
                                <i class="fa fa-linkedin w3-hover-opacity w3-large"></i>
                            </div>
                        </div>
            </footer>
        </div>
    )
}

export default Footer
