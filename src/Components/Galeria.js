import React from "react";
import { ImageViewer } from "react-image-viewer-dv";
import imagen1 from "../../src/img/1.jpg";
import imagen2 from "../../src/img/1b.jpg";
import imagen3 from "../../src/img/3a.jpg";
import imagen4 from "../../src/img/4.jpg";
import imagen5 from "../../src/img/9.jpg";
import imagen6 from "../../src/img/22c.jpg";
import imagen7 from "../../src/img/DSCN0647.jpg";
import imagen8 from "../../src/img/DSCN0669.jpg";
import imagen9 from "../../src/img/IMG_2585.jpg";
import imagen10 from "../../src/img/IMG_2588.jpg";
import imagen11 from "../../src/img/20a.jpg";
import imagen12 from "../../src/img/6b.jpg";
import imagen13 from "../../src/img/20c.jpg";
import imagen14 from "../../src/img/2a.jpg";
import imagen15 from "../../src/img/IMG_2592.jpg";


import "../Styles/Galeria.css";

function Galeria() {
  return (
    <section className="m-4" id="T4">
      <h2 className="container tituloGaleria mb-4">GALERIA DE FOTOS</h2>
      <div classNameName="container ">
        <div className="portfolio-item row">
          <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={ imagen1 }
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={ imagen2 }
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item selfie col-lg-3 col-md-4 col-6 col-sm">
           <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen3}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
           <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen4}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen5}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item gts col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen6}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen7}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen8}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen9}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen10}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen11}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen12}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen13}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen14}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
          <div className="item lap col-lg-3 col-md-4 col-6 col-sm">
            <div>
              <ImageViewer>
                <img
                  className="img-fluid"
                  src={imagen15}
                  alt=""
                />
              </ImageViewer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
