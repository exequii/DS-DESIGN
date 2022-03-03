import {React , useRef, useState} from 'react'
import "./css/form.css"
import emailjs from '@emailjs/browser'
import Swal from "sweetalert2"

export const ContactForm = (props) => {

  const form = useRef();
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("Seleccione una opcion");
  const [texto, setTexto] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangeAsunto = (event) => {
    setAsunto(event.target.value)
  }

  const handleChangeTexto = (event) => {
    setTexto(event.target.value)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_o5i91ra', 'template_9s2zccn', form.current, 'itWJhBeL5B3dSyqYj')
      .then((result) => {
          console.log("SUCCESS! - " + result.text);
          setEmail("")
          setTexto("")
          Swal.fire({
            title: 'Formulario Enviado!',
            text: 'Se ha enviado su mensaje correctamente',
            icon: 'success',
          })
      }, (error) => {
          console.log("ERROR! - " + error.text);
          Swal.fire({
            title: 'Ups!',
            text: 'Ha ocurrido un error inesperado.',
            icon: 'error',
          })
      });
  };

  return (
    <div id="form-contact">
      <h3 className='mb-5'>{props.motivo}</h3>
      <form ref={form} className="g-3 needs-validation" onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electronico:</label>
          <input type="email" className="form-control" name="usuario" id="email" placeholder="Introduzca su email" value={email} onChange={handleChangeEmail} required/>
        </div>
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">Motivo:</label>
          <select className="form-control" id="asunto" name="asunto" value={asunto} onChange={handleChangeAsunto} required>
              <option disabled>Seleccione una opcion..</option>
              <option value="Cotizacion">Cotizacion</option>
              <option value="Reclamo">Reclamo</option>
              <option value="Sugerencias">Sugerencia</option>
              <option value="Otros">Otros</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="texto" className="form-label">Comentarios:</label>
          <textarea className="form-control" id="texto" name="texto" rows="3" placeholder="Mensaje..." value={texto} onChange={handleChangeTexto} required></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm