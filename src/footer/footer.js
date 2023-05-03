import React from 'react';
import '../footer/Footer.css';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Datos de la Empresa</h4>
            <p>Tzy Fashion Kids</p>
            <p>Dirección: Gonzalez Ortega 75, Autlan de Navarro, Jalisco, México</p>
            <p>Teléfono: +3171001134</p>
            <p>Correo electrónico: zaguime@hotmail.com</p>
          </div>
          <div className="col-md-4">
            <h4>Redes Sociales</h4>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/ejemplo" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/ejemplo" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://www.instagram.com/ejemplo/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contacto</h4>
            <p>Si tienes alguna duda o consulta, no dudes en contactarnos.</p>
            <a href="mailto:zaguime@hotmail.com" className="btn btn-primary">Contáctanos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
