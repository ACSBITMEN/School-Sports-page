import { useEffect, useRef, useState } from 'react';
import '../stylesheets/HomeSections.css';
import '../stylesheets/Animations.css';

function HomeAbout() {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observa cuando la imagen entra en el viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id='HomeAbout' className='secction'>
      <div className='ContainerAbout HomeSection'>
        <div
          ref={imgRef}
          className={`ContainerImg fromRight ${isVisible ? 'show' : ''}`}
          style={{ backgroundImage: 'url(public/Img1.png)' }}
        ></div>
        <div className="ContainerText">
          <h3 className="animated-text-h">Nuestra Historia</h3>
          <p className="animated-text">
            En <b>Soccer School</b>®, creemos que el fútbol es más que un deporte: es una pasión, una disciplina y una herramienta de crecimiento para los jóvenes. <br />
            <b>Fundada en 2016</b>, nuestra escuela se dedica a formar a futuros atletas, no solo en habilidades técnicas y tácticas, sino también en valores como el respeto, el trabajo en equipo y la perseverancia. <br />
            Nuestro equipo de entrenadores está compuesto por <b>profesionales altamente calificados</b>, muchos de ellos con experiencia en ligas profesionales, y están comprometidos en guiar y motivar a cada niño en su camino deportivo. <br />
            Adaptamos nuestras metodologías a diferentes edades y niveles de habilidad, desde principiantes hasta jugadores avanzados, siempre asegurándonos de ofrecer un ambiente seguro, inclusivo y divertido.
          </p>
          <a href="./about">
            <button>Más sobre nosotros</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
