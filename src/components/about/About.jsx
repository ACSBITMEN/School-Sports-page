// src/components/Home.jsx
import '../../stylesheets/Home.css';
import AboutAbout from './About-About.jsx';
import HomeDatos from '../home/Home-Datos.jsx';
import HomeCategories from '../home/Home-Categories.jsx';
import HomeSedes from '../home/Home-Sedes.jsx';
import HomeArticulos from '../home/Home-Articulos.jsx';

function About() {
  return (
    <div id='About'>
      <AboutAbout />
      <HomeDatos />
      <HomeCategories />
      <HomeSedes />
      <HomeArticulos />
    </div>
  );
}

export default About;
