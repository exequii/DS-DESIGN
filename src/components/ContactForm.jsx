import React from 'react'
import "./css/form.css"

export const ContactForm = (props) => {
  return (
    <div id="form-contact">
      <h3 className='mb-5'>{props.motivo}</h3>
      <form className="g-3 needs-validation">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Correo Electronico:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Introduzca su email" required/>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Motivo:</label>
          <select className="form-control" id="exampleFormControlInput1" required>
              <option selected="true" disabled>Seleccione una opcion..</option>
              <option>Cotizacion</option>
              <option>Reclamo</option>
              <option>Sugerencia</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Comentarios:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Mensaje..." required></textarea>
        </div>
        <div>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm