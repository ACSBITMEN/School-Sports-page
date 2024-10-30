// src/components/Home.jsx
import '../stylesheets/HomeCategories.css';

function HomeCategories() {
  return (
    <div id='HomeCategories' className='secction'>
      <h3>Categorias</h3>
      <div className='ContainerCategories'>
        <div className="ContainerText">
          <p>Contamos con <b>Todas las categorías</b> en formación mixta, estas están diseñadas para adaptarse a la edad y nivel de cada niño y niña, promoviendo su crecimiento en habilidades técnicas, tácticas y en valores como el trabajo en equipo:</p>
          <ul>
            <li><b>Infantil (4-6 años)</b>: Primer contacto con el balón, juegos y desarrollo motor básico.</li>
            <li><b>Prebenjamín (7-8 años)</b>: Introducción a reglas, posición en la cancha y trabajo en equipo.</li>
            <li><b>Benjamín (9-10 años)</b>: Enfoque en técnica, defensa y experiencia en partidos.</li>
            <li><b>Alevín (11-12 años)</b>: Desarrollo táctico y físico para el juego competitivo.</li>
            <li><b>Cadetes (13-15 años)</b>: Preparación avanzada para competencias, condición física y mental.</li>
            <li><b>Juvenil (16-18 años)</b>: Entrenamiento de alto rendimiento, enfoque en táctica y profesionalización.</li>
          </ul>
        </div>
        <div className="ContainerImg">
          <img src="https://www.ocregister.com/wp-content/uploads/migration/ni8/ni8o88-b88308088z.120150115140755000g8j7dbhn.10.jpg?w=640" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomeCategories;