import React from "react";
import "../Styles/mapa.css";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvpdgp");
  if (state.succeeded) {
    return <p>Gracias,Pronto contactaremos contigo!</p>;
  }
  return (
    <div className="cardy" id="T5">
      <form onSubmit={handleSubmit}>
        <div className="inputbox mb-4 m-4">
          <input required="required" type="text" name="name" id="full-name" />
          <span>Nombre Completo</span>
          <i></i>
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div className="inputbox mb-4 m-4">
          <input required="required" type="email" id="email" name="email" />
          <span>Correo Electrónico</span>
          <i></i>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="inputbox mb-4 m-4">
          <input
            required="required"
            type="telephone"
            id="telephone"
            name="telephone"
          />
          <span>Numero de Celular</span>
          <i></i>
          <ValidationError
            prefix="telephone"
            field="telephone"
            errors={state.errors}
          />
        </div>
        <div className="inputbox mb-4 m-4">
        <span></span>
        </div>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Mensaje"
          required=""
          className="texto"
        />
          <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button className="button m-3" type="submit" disabled={state.submitting}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
