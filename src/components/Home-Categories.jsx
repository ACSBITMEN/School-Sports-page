// src/components/Home.jsx
import '../stylesheets/HomeCategories.css';

function HomeCategories() {
  return (
    <div id='HomeCategories' className='secction'>
      <div className='ContainerCategories'>
        <div className="ContainerText left">
          <h3>Selección de Categorias</h3>
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
        <div className="ContainerImg right">
          <img className='filtergreen' src="./img2.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;