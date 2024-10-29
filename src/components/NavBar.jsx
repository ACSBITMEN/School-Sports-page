// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Soccer School</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre nosotros</Link>
        </li>
        <li>
          <Link to="/Shopping">Tienda</Link>
        </li>
        <li>
          <Link to="/Subscriptions">Inscripciones</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
