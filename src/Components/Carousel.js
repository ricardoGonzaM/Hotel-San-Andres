import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Styles/Carousel.css";
import imagenCarousel1 from "../../src/img/IMG_2719.jpg";
import imagenCarousel2 from "../../src/img/IMG_1073.jpg";
import imagenCarousel3 from "../../src/img/IMG_2592.jpg";

function CarouselPage() { 
  return (
    <div className='espacio' id="T1">
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block slide imagenCarousel1"
          src={ imagenCarousel1 }
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slide slick-slide imagenCarousel2"
          src={ imagenCarousel2 }
          alt="Second slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block slide imagenCarousel3"
          src={ imagenCarousel3 }
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselPage;