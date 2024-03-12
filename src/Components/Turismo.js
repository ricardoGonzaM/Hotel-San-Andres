import React from "react";
import "../Styles/Turismo.css";
import imagenContenido1 from "../../src/img/Imagenes-Eve/Feria-Candelaria.jpg";
import imagenContenido2 from "../../src/img/Imagenes-Eve/Festividad-Señor.jpg";
import imagenContenido3 from "../../src/img/Imagenes-Eve/Larga-Salva.jpg";
import imagenContenido4 from "../../src/img/Imagenes-Eve/Marquesada.jpg";
import imagenContenido5 from "../../src/img/Imagenes-Eve/Musica.jpg";
import imagenContenido6 from "../../src/img/Imagenes-Eve/Navidad.jpg";
import imagenContenido7 from "../../src/img/Imagenes-Eve/RockFest.jpg";
import imagenContenido8 from "../../src/img/Imagenes-Eve/SalvaBlues.jpg";
import imagenContenido9 from "../../src/img/Imagenes-Eve/Señora-Luz.jpg";
import imagenContenido10 from "../../src/img/Imagenes-Eve/semana-santa.jpg";

function Turismo() {
  return (
    <div className="container" id="T6">
      <h1 className="mb-4 titulo">Eventos en Salvatierra</h1>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido1 }
              className="card-img imagen1"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Feria de la Candelaria</h4>
                <div>
                  <b>Fecha:</b> 2 de Febrero
                </div>
                <p className="">
                  La Feria de la Candelaria en Salvatierra es un evento cultural
                  y tradicional que se celebra en la ciudad de Salvatierra,
                  Guanajuato.Durante la Feria de la Candelaria, la ciudad se
                  llena de actividades y eventos para el disfrute de los
                  visitantes. Entre las actividades más destacadas se encuentra
                  el Teatro del Pueblo, donde se presentan espectáculos de lucha
                  libre y otros eventos culturales. También se realizan
                  conciertos, exposiciones, juegos mecánicos y eventos
                  deportivos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido10 }
              className="card-img imagen2"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Semana Santa</h4>
                <div>
                  <b>Fecha:</b> Marzo
                </div>
                <p>
                  La Feria de la Candelaria Salvatierra,se llevará a cabo en
                  este bello municipio del estado de Guanajuato, a finales de
                  enero y principios de febrero. Salvatierra se ubica en los
                  Valles del Sur y se distingue por su legado histórico,
                  reflejado en monumentos construidos durante la época del
                  Virreinato, lo que le otorga el título de la tercera Ciudad
                  Colonial de Guanajuato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido9 }
              className="card-img imagen3"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">
                  Festividad de Nuestra Señora de la Luz
                </h4>
                <div>
                  <b>Fecha:</b> Abril
                </div>
                <p>
                  La Festividad de Nuestra Señora de la Luz en Salvatierra, Gto.
                  Es una celebración solemne en honor a la Patrona de
                  Salvatierra. Esta festividad comienza con la "bajada" de
                  Nuestra Señora de la Luz en su templo y la visita de las
                  personas a la iglesia. Durante esta festividad se llevan a
                  cabo diversas actividades como misas, danzas, peregrinaciones
                  y otras manifestaciones de fe. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido3 }
              className="card-img imagen4"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">
                  Festival Gastronómico de la Larga y la Quesadilla
                </h4>
                <div>
                  <b>Fecha:</b> Junio
                </div>
                <p>
                  El Festival Gastronómico de la Larga y la Quesadilla en
                  Salvatierra, Gto. Es un evento culinario que se lleva a cabo
                  en la ciudad de Salvatierra, en el estado de Guanajuato. Este
                  festival tiene como objetivo promover y celebrar la
                  gastronomía local, en particular las largas y las quesadillas,
                  que son antojitos típicos de la región.Estos platillos son
                  elaborados con ingredientes frescos y de alta calidad,
                  resaltando los sabores y técnicas culinarias tradicionales de
                  Salvatierra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido5 }
              className="card-img imagen5"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">
                  Festival Internacional de Música Tradicional
                </h4>
                <div>
                  <b>Fecha:</b> Septiembre
                </div>
                <p>
                  El Festival Internacional de Música Tradicional en
                  Salvatierra, Gto. es un evento cultural que busca promover y
                  difundir la música tradicional.Durante el festival, se
                  realizan conciertos de música tradicional en los que
                  participan agrupaciones y representantes de diferentes partes
                  del mundo, el objetivo principal del festival es preservar y
                  celebrar la música y la danza tradicional mexicana, así como
                  fomentar el intercambio cultural entre artistas y el público.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido8 }
              className="card-img imagen6"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">
                  Salvablues Jazz Festival Internacional
                </h4>
                <div>
                  <b>Fecha:</b> Octubre
                </div>
                <p>
                  El Salvablues Jazz Festival Internacional en Salvatierra, Gto.
                  es un festival de música que combina los géneros del blues y
                  el jazz.El festival reúne a destacados artistas nacionales e
                  internacionales de blues y jazz, quienes ofrecen conciertos en
                  vivo y muestran su talento en diferentes escenarios, durante
                  el festival, los asistentes tienen la oportunidad de disfrutar
                  de una amplia variedad de estilos musicales, desde el blues
                  clásico hasta el jazz contemporáneo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido7 }
              className="card-img imagen7"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Rock Fest</h4>
                <div>
                  <b>Fecha:</b> 15 de octubre
                </div>
                <p>
                  El Rock Fest en Salvatierra es un festival de música que se
                  lleva a cabo en la ciudad de Salvatierra, Guanajuato. El Rock
                  Fest es un evento que reúne a diferentes géneros musicales
                  alternativos.Durante el festival, se realizan conciertos en
                  vivo donde los asistentes pueden disfrutar de la música en un
                  ambiente festivo, el Rock Fest en Salvatierra busca promover
                  la cultura musical y brindar una experiencia única a los
                  amantes del rock y otros géneros alternativos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido4 }
              className="card-img imagen8"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Marquesada</h4>
                <div>
                  <b>Fecha:</b> 28 y 29 de octubre
                </div>
                <p>
                  La Marquesada en Salvatierra, Gto. es una festividad
                  tradicional que se lleva a cabo en la ciudad de Salvatierra,
                  en el estado de Guanajuato, México. La Marquesada es un evento
                  emblemático y muy esperado en Salvatierra. Es una festividad
                  que celebra la historia y la cultura de la región, durante la
                  Marquesada, se realizan diversas actividades y eventos que
                  incluyen desfiles, música, danzas tradicionales, juegos
                  pirotécnicos, representaciones teatrales, entre otros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido2 }
              className="card-img imagen9"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Festividad del Señor del Socorro</h4>
                <div>
                  <b>Fecha:</b> Noviembre
                </div>
                <p>
                  La Festividad del Señor del Socorro, también conocida como la
                  "Fiesta del Buen Temporal", es un evento religioso y cultural
                  que se lleva a cabo en Salvatierra, Guanajuato. La Festividad
                  del Señor del Socorro se celebra en el Barrio de San Juan, en
                  Salvatierra, el segundo domingo del mes de noviembre, durante
                  esta festividad, se realiza una veneración al Señor del
                  Socorro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cards_info ">
        <div className="row">
          <div className="col-md-3">
            <img
              src={imagenContenido6 }
              className="card-img imagen10"
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="card-text">
                <h4 className="card-title">Salvatierra de Luces en Navidad</h4>
                <div>
                  <b>Fecha:</b> Diciembre
                </div>
                <p>
                  Salvatierra de Luces en Navidad en Salvatierra, GTO es un
                  evento navideño que se lleva a cabo en la ciudad de
                  Salvatierra, Disfruta de una grandiosa decoración navideña en
                  todo el centro histórico de Salvatierra y el Árbol más grande
                  y más bonito de Guanajuato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Turismo;
