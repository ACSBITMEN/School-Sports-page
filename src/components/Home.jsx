// src/components/Home.jsx
import '../stylesheets/Home.css';
import HomeDatos from './Home-Datos.jsx';
import HomeAbout from './Home-About.jsx';
import HomeCategories from './Home-Categories.jsx';

function Home() {
  return (
    <div id='Home'>
      <div className="secction">
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Este es el contenido de la página de inicio.</p>
      </div>
      <HomeDatos />
      <HomeAbout />
      <HomeCategories />
    
      <div className="secction">Sedes y horarios

      </div>
      <div className="secction">Articulos de interes

      </div>
    </div>
  );
}

export default Home;
