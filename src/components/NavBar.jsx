// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Navbar.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <h1 className="navbar-title">Soccer School</h1>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'navbar-links-open' : ''}`}>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={location.pathname === '/about' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Sobre nosotros
          </Link>
        </li>
        <li>
          <Link
            to="/Shopping"
            className={location.pathname === '/Shopping' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Tienda
          </Link>
        </li>
        <li>
          <Link
            to="/Subscriptions"
            className={location.pathname === '/Subscriptions' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Inscripciones
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
