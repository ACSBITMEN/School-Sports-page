// src/components/Home.jsx
import { Link } from 'react-router-dom';
import '../stylesheets/HomeAbout.css';

function HomeAbout() {
  return (
    <div id='HomeAbout' className='secction'>
      <div className='ContainerAbout'>
        <div className="ContainerImg left">
          <div className="">
            <img src="./Img1.png" className="d-block w-100 filtergreen" alt="..."/>
          </div>
        </div>
        <div className="ContainerText right">
          <h3>Nuestra Historia</h3>
          <p>En Soccer School, creemos que el fútbol es más que un deporte: es una pasión, una disciplina y una herramienta de crecimiento para los jóvenes. <b>Fundada en 2016</b>, nuestra escuela se dedica a formar a futuros atletas, no solo en habilidades técnicas y tácticas, sino también en valores como el respeto, el trabajo en equipo y la perseverancia.</p>
          <p>Nuestro equipo de entrenadores está compuesto por <b>profesionales altamente calificados</b>, muchos de ellos con experiencia en ligas profesionales, y están comprometidos en guiar y motivar a cada niño en su camino deportivo. Adaptamos nuestras metodologías a diferentes edades y niveles de habilidad, desde principiantes hasta jugadores avanzados, siempre asegurándonos de ofrecer un ambiente seguro, inclusivo y divertido <Link to="/about">...Ver más</Link></p>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;