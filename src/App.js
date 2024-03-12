import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerInsideExample from "./Components/Navbar";
import Footer from "./Components/Footer";
import CarouselPage from "./Components/Carousel";
import Contenido from "./Components/Contenido";
import Servicios from "./Components/Servicios";
import Galeria from "./Components/Galeria";
import Turismo from "./Components/Turismo";
import Mapa from "./Components/Mapa";

import "./App.css";


function App() {
  return (

      <div className="App">
        <ContainerInsideExample />
        <CarouselPage />
        <Contenido/>
        <Servicios/>
        <Galeria/>
        <Mapa/>
        <Turismo/>
        <Footer/>
      </div>
  );
}

export default App;
