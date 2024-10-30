// src/components/Home.jsx
import { Link } from 'react-router-dom';
import '../stylesheets/HomeAbout.css';

function HomeAbout() {
  return (
    <div id='HomeAbout' className='secction'>
      <h3>Sobre Nosotros</h3>
      <div className='ContainerAbout'>
        <div className="ContainerImg">
          <div id="carouselExampleFade" className="carousel slide carousel-fade">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://misamistosos.com/wp-content/uploads/2021/09/Claves_para_liderar_un_equipo_de_futbol-1024x682.jpg" className="d-block w-100" alt="Img1" />
              </div>
              <div className="carousel-item">
                <img src="https://img.freepik.com/premium-photo/soccer-celebration-kids-team-with-trophy-soccer-field-happy-excited-winning-game-sports-boy-children-goal-success-teamwork-football-with-gold-medal-award-with-winner-smile_590464-100271.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://www.ussportscamps.com/media/images/soccer/nike/camps/CS-gallery-soccer-boyshot.jpg" className="d-block w-100" alt="..."/>
              </div>
              <div className="carousel-item">
                <img src="https://soccerinteraction.com/wp-content/uploads/2022/08/entrenador-entrenando.jpg" className="d-block w-100" alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="ContainerText">
          <p>En Soccer School, creemos que el fútbol es más que un deporte: es una pasión, una disciplina y una herramienta de crecimiento para los jóvenes. <b>Fundada en 2016</b>, nuestra escuela se dedica a formar a futuros atletas, no solo en habilidades técnicas y tácticas, sino también en valores como el respeto, el trabajo en equipo y la perseverancia. <br />
          <br />
          Nuestro equipo de entrenadores está compuesto por <b>profesionales altamente calificados</b>, muchos de ellos con experiencia en ligas profesionales, y están comprometidos en guiar y motivar a cada niño en su camino deportivo. Adaptamos nuestras metodologías a diferentes edades y niveles de habilidad, desde principiantes hasta jugadores avanzados, siempre asegurándonos de ofrecer un ambiente seguro, inclusivo y divertido <Link to="/about">...Ver más</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;