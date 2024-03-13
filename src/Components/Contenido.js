import React from "react";
import "../Styles/Contenido.css";
import imagenContenido1 from "../../src/img/1.jpg";
import imagenContenido2 from "../../src/img/1b.jpg";
import imagenContenido3 from "../../src/img/2a.jpg";
import imagenContenido4 from "../../src/img/3b.jpg";

function Contenido() {
  return (
    <div>
      <br />

      <h1 className="m-2 tituloContenido">Sobre Nosotros</h1>
      <div className=" container">
        <p>
          El <b>Hotel San Andrés</b> cuenta con un gran servicio de hospedaje en <b>Salvatierra Guanajuato Pueblo Mágico</b>. Nuestra calidad y excelencia en
          el servicio provienen del esfuerzo que Hotel San Andrés ha brindado a
          nuestros a lo largo de 25 años. Estamos al servicio para
          todos los huéspedes que gusten hospedarse con nosotros y al mismo
          tiempo conocer nuestro Municipio de <b>Salvatierra</b>.
        </p>
        <p>El <b>Hotel San Andrés</b> se
          enorgullece de ser parte de la comunidad de <b>Salvatierra</b> y espera con
          entusiasmo dar la bienvenida a nuestros huéspedes y brindarles una
          experiencia única llena de hospitalidad, comodidad y calidez.
          ¡Esperamos poder atenderle pronto!.</p>
      </div>
      <h1 className="tituloContenido" id="T2">Habitaciones</h1>
      <h4 className="info">Presionar las imagenes para obtener información sobre las habitaciones.</h4>
      <div className="m-4 row">
        <div className="card card-block col-12 col-lg-3 mb-3">
          <img
            className="d-block slide imagencontenido1"
            src={imagenContenido1}
            alt="First slide"
          />
          <div className="card__content">
            <p className="card__title">Habitacion sencilla</p>
            <p className="card__description">
              Hospedaje para 1 o 2 personas en una cama matrimonial.
            </p>
          </div>
        </div>
        <div className="card card-block col-12 col-lg-3 mb-3">
          <img
            className="d-block slide imagencontenido2"
            src={imagenContenido2}
            alt="First slide"
          />
          <div className="card__content">
            <p className="card__title">Habitacion doble</p>
            <p className="card__description">
              Habitación de 2 hasta 4 personas con dos camas matrimoniales.
            </p>
          </div>
        </div>
        <div className="card card-block col-12 col-lg-3 mb-3">
          <img
            className="d-block slide imagencontenido3"
            src={imagenContenido3}
            alt="First slide"
          />
          <div className="card__content">
            <p className="card__title">Habitacion triple</p>
            <p className="card__description">
              Habitación con 3 camas: 1 Queen Size y 2 Matrimoniales con
              capacidad de 3 hasta 6 personas.
            </p>
          </div>
        </div>
        <div className="card card-block col-12 col-lg-3 mb-3">
          <img
            className="d-block slide imagencontenido4"
            src={imagenContenido4}
            alt="First slide"
          />
          <div className="card__content">
            <p className="card__title">Habitacion Cuádruple</p>
            <p className="card__description">
              Habitación con dos pisos. En planta baja 1 cama matrimonial y 1
              individual en la segunda planta otra recamara con 2 camas
              matrimoniales. Con capacidad de hasta 7 personas,cada habitación cuenta con su baño completo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contenido;
