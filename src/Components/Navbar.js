import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from "../Hotel.png";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header id="main-header">
      <img src={logo} alt="Logo" />
      <nav ref={navRef}>
        <a href="#T1">Inicio</a>
        <a href="#T2">Habitaciones</a>
        <a href="#T3">Servicios</a>
        <a href="#T4">Galeria</a>
        <a href="#T5">Ubicación</a>
        <a href="#T6">Eventos</a>
        <a target="_blank" href="https://wa.me/qr/BZMT4OXNSWKUB1">
          <button className="butonContac">
            <div className="icono">
              <FaWhatsapp size={29} />
            </div>
            <p class="textoContac">WhatsApp</p>
          </button>
        </a>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
