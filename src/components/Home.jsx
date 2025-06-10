// src/components/Home.jsx
import '../stylesheets/Home.css';
import HomeDatos from './Home-Datos.jsx';
import HomeAbout from './Home-About.jsx';
import HomeCategories from './Home-Categories.jsx';
import HomeSedes from './Home-Sedes.jsx';
import HomeCarrusel from './Home-Carrusel.jsx';

function Home() {
  return (
    <div id='Home'>
      <HomeCarrusel />
      <HomeDatos />
      <HomeAbout />
      <HomeCategories />
      <HomeSedes />

      <div className="secction articulosInteres">Articulos de interes
        
      </div>
    </div>
  );
}

export default Home;
