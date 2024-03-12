import React from "react";
import "../Styles/mapa.css";
import ContactForm from "./Form";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";



const Mapa = () => {
  return (
    <div className="seccion">
      <div className="container contacto">
        <div className="row">
          <div className="ubica col-md-6 col-lg-6">
          <h2 className="m-4 titulo_Mapa">Contactanos</h2>
            <ContactForm/>
          </div>
          <div className="col-6">
            <div className="map-responsive">
              <h2 className="m-4 titulo_Mapa letra">Ubicación</h2>
              <p className="letra">
                <IoLocationSharp />: <a target="_blank" href="https://www.google.com/maps/place/Hotel+San+Andres/@20.213939,-100.883202,17z/data=!4m9!3m8!1s0x842cc49bbb92f457:0xd7ad939c63a76a0e!5m2!4m1!1i2!8m2!3d20.2139385!4d-100.8832017!16s%2Fg%2F1tph21gq?hl=es&entry=ttu">San Andrés 650-B-int. 11, Centro Histórico,
                38900 Salvatierra, Gto</a>
              </p>
              <p className="letra">
                <MdEmail />: <a href="mailto:Ricardogonzalezmendez117@hotmail.com">hotel.sanandres@yahoo.com.mx</a>
              </p>
              <p className="letra">
                <FaPhone />: <a href="tel:+524666630650"> 466-663-0650</a>
              </p>
              <p className="letra">
                <FaPhone />: <a href="tel:+524661612028"> 466-161-2028</a>
              </p>
              <p className="letra">
                <FaPhone />: <a href="tel:+524661051614"> 466-105-1614</a>
              </p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872.040696894519!2d-100.88449184361677!3d20.213938495290275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842cc49bbb92f457%3A0xd7ad939c63a76a0e!2sHotel%20San%20Andres!5e0!3m2!1ses!2smx!4v1705368827110!5m2!1ses!2smx"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="myFrame"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
