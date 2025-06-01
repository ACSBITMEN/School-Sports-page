// src/components/Home.jsx
import { useEffect, useRef, useState } from 'react';
import '../stylesheets/HomeSections.css';
import '../stylesheets/Animations.css';

const HomeCategories = () => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id='HomeCategories' className='secction'>
      <div className='ContainerCategories HomeSection'>
        <div className="ContainerText">
          <h3>Categorias</h3>
          <p>Contamos con <b>Todas las categorías</b> en formación mixta, estas están diseñadas para adaptarse a la edad y nivel de cada niño y niña, promoviendo su crecimiento en habilidades técnicas, tácticas y en valores como el trabajo en equipo:</p>
          <ul>
            <li><b>(4-6 años) Infantil </b>  Primer contacto con el balón, juegos y desarrollo motor básico.</li>
            <li><b>(7-8 años) Prebenjamín </b> Introducción a reglas, posición en la cancha y trabajo en equipo.</li>
            <li><b>(9-10 años) Benjamín </b> Enfoque en técnica, defensa y experiencia en partidos.</li>
            <li><b>(11-12 años) Alevín </b> Desarrollo táctico y físico para el juego competitivo.</li>
            <li><b>(13-15 años) Cadetes </b> Preparación avanzada para competencias, condición física y mental.</li>
            <li><b>(16-18 años) Juvenil </b> Entrenamiento de alto rendimiento, enfoque en táctica y profesionalización.</li>
          </ul>
        </div>
        <div
        ref={imgRef}
        className={`ContainerImg fromLeft ${isVisible ? 'show' : ''}`}
        style={{ backgroundImage: 'url(/public/img2.png)' }}
        ></div>
      </div>
    </section>
  );
}

export default HomeCategories;