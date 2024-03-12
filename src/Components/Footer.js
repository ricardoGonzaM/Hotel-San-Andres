import React from "react";
import "../Styles/Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top footers">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        <svg className="bi" width="30" height="24"></svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">©2024 Hotel San Andres, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
      <li className="ms-3"><a class="text-muted" href="#"><FaInstagram/></a></li>
      <li className="ms-3"><a class="text-muted" href="#"><FaFacebook/></a></li>
    </ul>
  </footer>
  );
};

export default Footer;
