// src/components/Home.jsx
import '../stylesheets/HomeAbout.css';

function HomeAbout() {
  return (
    <div id='HomeAbout' className='secction'>
      <h3>Sobre Nosotros</h3>
      <div className='ContainerAbout'>
        <div className="ContainerImg">
          <img src="" alt="" />
        </div>
        <div className="history">
          <p>En Soccer School, creemos que el fútbol es más que un deporte: es una pasión, una disciplina y una herramienta de crecimiento para los jóvenes. Fundada en [año de fundación], nuestra escuela se dedica a formar a futuros atletas, no solo en habilidades técnicas y tácticas, sino también en valores como el respeto, el trabajo en equipo y la perseverancia.</p>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;