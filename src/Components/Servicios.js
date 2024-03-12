import React from "react";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { FaWifi } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { TbAirConditioning } from "react-icons/tb";
import { MdMeetingRoom } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import "../Styles/Servicios.css";

function Servicios() {
  return (
    <div className="section-grey services">
      <h2 className="mb-4" id="T3">SERVICIOS DEL HOTEL</h2>
      <div className=" container row ">
        <ul>
          <li>
            <span>
              <span className="tele-icon">
                <PiTelevisionSimpleDuotone />
                <b>
                  <p>Televisión</p>
                </b>
              </span>
            </span>
          </li>
          <li>
            <span>
              <span className="tele-icon">
                <FaWifi />
                <b>
                  <p>WI-FI</p>
                </b>
              </span>
            </span>
          </li>
          <li>
            <span>
              <span className="tele-icon">
                <FaCar />
                <b>
                  <p>Estacionamiento</p>
                </b>
              </span>
            </span>
          </li>
          <li>
            <span>
              <span className="tele-icon">
                <TbAirConditioning />
                <b>
                  <p>Aire Acondicionado</p>
                </b>
              </span>
            </span>
          </li>
          <li>
            <span>
              <span className="tele-icon">
                <MdMeetingRoom />
                <b>
                  <p>Limpieza</p>
                </b>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <div className="textoservicios container">
        <b>
          <p>
            Nuestro personal altamente capacitado está siempre dispuesto a
            brindar asistencia y atención personalizada, asegurándose de que
            cada huésped se sienta cuidado y atendido en todo momento. Además,
            nuestras habitaciones están equipadas con todas las comodidades
            necesarias para garantizar una estancia placentera, incluyendo aire
            acondicionado, televisión por cable, acceso a internet, con servicio de frigobar, servibar, y microondas.
          </p>
        </b>
      </div>
    </div>
  );
}

export default Servicios;
