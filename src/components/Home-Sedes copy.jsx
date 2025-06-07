// src/components/Home.jsx
import { useState } from 'react';
import '../stylesheets/HomeSedes.css';

function HomeSedes() {
  // Definir el arreglo de sedes
  const sedes = [
    {
      nombre: 'Sede Principal (Bogotá)',
      direccion: 'Avenida Central 123, Ciudad Principal',
      horarios: 'Lunes a Viernes de 4:00 pm a 7:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9735.252605074385!2d-74.0967257641361!3d4.657245813165368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Metropolitano%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sus!4v1730315141613!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Norte (Bogotá)',
      direccion: 'Calle Norte 456, Ciudad Norte',
      horarios: 'Martes y Jueves de 5:00 pm a 7:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.39649203431!2d-74.13578844848524!3d4.678450564318074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab976327625%3A0x98bcd3bce5b7ec24!2sLa%2010%20Indoor%20Soccer!5e0!3m2!1ses-419!2sus!4v1730315258629!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Sur (Bogotá)',
      direccion: 'Avenida Sur 789, Ciudad Sur',
      horarios: 'Miércoles y Viernes de 4:00 pm a 6:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63628.86628511814!2d-74.18333864990123!3d4.629003980837079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c0061d887bd%3A0xd558e4ce4a615d13!2s5%20Site%20F%C3%BAtbol%20Am%C3%A9ricas!5e0!3m2!1ses-419!2sus!4v1730315316261!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Barranquilla',
      direccion: 'Carrera 10 #20-30, Villavicencio',
      horarios: 'Sábados de 9:00 am a 12:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60895.87013217651!2d-74.81719893757126!3d10.92433948252825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d35e6ab152fd%3A0x432dea950e1d49b9!2sEstadio%20Metropolitano%20Roberto%20Mel%C3%A9ndez!5e0!3m2!1ses-419!2sus!4v1730319138106!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Cali',
      direccion: 'Carrera 10 #20-30, Villavicencio',
      horarios: 'Sábados de 9:00 am a 12:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.671682315679!2d-76.54361388872965!3d3.4298632965302276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a69bc40cba09%3A0x4ac54a6d820c91bf!2sEstadio%20Ol%C3%ADmpico%20Pascual%20Guerrero!5e0!3m2!1ses-419!2sus!4v1730321245635!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Medellin',
      direccion: 'Carrera 10 #20-30, Villavicencio',
      horarios: 'Sábados de 9:00 am a 12:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.105722963049!2d-75.59275318871438!3d6.256766993705608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290e4f870f69%3A0xf57f97b59ef52c39!2sEstadio%20de%20F%C3%BAtbol%20Atanasio%20Girardot!5e0!3m2!1ses-419!2sus!4v1730321329690!5m2!1ses-419!2sus',
    },
    {
      nombre: 'Sede Villavicencio',
      direccion: 'Carrera 10 #20-30, Villavicencio',
      horarios: 'Sábados de 9:00 am a 12:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.632016875043!2d-73.63563043331936!3d4.139877639310975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e77b90b2019%3A0xb51ab5be13ab4052!2sEstadio%20Bello%20Horizonte!5e0!3m2!1ses-419!2sus!4v1730321389334!5m2!1ses-419!2sus',
    },
  ];

  // Estado para la sede seleccionada
  const [sedeSeleccionada, setSedeSeleccionada] = useState(sedes[0]);

  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    const sede = sedes.find(s => s.nombre === event.target.value);
    setSedeSeleccionada(sede);
  };

  return (
    <div id='HomeSedes' className='secction'>
      <h3>Conoce Nuestras Sedes Y Horarios</h3>
      <p className='textoIntroSedes'>En Soccer School, contamos con <b>7 sedes a nivel nacional</b> ubicadas estratégicamente para tu comodidad en las principales ciudades del país y ofrecemos horarios flexibles adaptados a las necesidades de cada familia. Nuestro objetivo es que el fútbol sea accesible para todos, brindando espacios seguros y bien equipados para que tus hijos disfruten de su entrenamiento.</p>
      <div className="sedes">
        <p>Selecciona la sede:</p>
        <select name="SelectSede" id="SelectSede" onChange={handleChange}>
          {sedes.map((sede, index) => (
            <option key={index} value={sede.nombre}>{sede.nombre}</option>
          ))}
        </select>
        <div className="Container-Sedes">
          <h4>{sedeSeleccionada.nombre}</h4>
          <div className='SubContainerSedes'>
            <div id='MapSede'>
              <iframe
                src={sedeSeleccionada.mapaEmbedUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de la Sede"
              ></iframe>
            </div>
            <div id='InfoSede'>
              <p><strong>Dirección:</strong> {sedeSeleccionada.direccion}</p>
              <p><strong>Horarios:</strong> {sedeSeleccionada.horarios}</p>
              <p><strong>Telefono:</strong> {sedeSeleccionada.telefono}</p>
              {/* Puedes agregar más información aquí */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSedes;
