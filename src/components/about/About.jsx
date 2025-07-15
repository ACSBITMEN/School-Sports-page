// src/components/Home.jsx
import '../../stylesheets/Home.css';
import AboutAbout from './About-About.jsx';
import AboutCoach from './About-Coach.jsx';
import HomeCategories from '../home/Home-Categories.jsx';
import HomeSedes from '../home/Home-Sedes.jsx';
import HomeArticulos from '../home/Home-Articulos.jsx';

function About() {
  return (
    <div id='About'>
      <AboutAbout />
      <AboutCoach />
      <HomeCategories />
      <HomeSedes />
      <HomeArticulos />
    </div>
  );
}

export default About;
