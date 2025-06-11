// HomeSedes.jsx (versión con acordeón por ciudad)
import { useState, useEffect } from 'react';
import '../../stylesheets/HomeSedes.css';

function HomeSedes() {
  
  const sedesPorCiudad = {
    'Bogotá': [
      {
      nombre: 'Sede Principal',
      direccion: 'Avenida Central 123, Ciudad Principal',
      horarios: 'Lunes a Viernes de 4:00 pm a 7:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9735.252605074385!2d-74.0967257641361!3d4.657245813165368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f85921810393d%3A0x1d953f644042b03b!2sParque%20Metropolitano%20Sim%C3%B3n%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sus!4v1730315141613!5m2!1ses-419!2sus',
      },
      {
      nombre: 'Sede Norte',
      direccion: 'Calle Norte 456, Ciudad Norte',
      horarios: 'Martes y Jueves de 5:00 pm a 7:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63624.39649203431!2d-74.13578844848524!3d4.678450564318074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9ab976327625%3A0x98bcd3bce5b7ec24!2sLa%2010%20Indoor%20Soccer!5e0!3m2!1ses-419!2sus!4v1730315258629!5m2!1ses-419!2sus',
      },
      {
      nombre: 'Sede Sur',
      direccion: 'Avenida Sur 789, Ciudad Sur',
      horarios: 'Miércoles y Viernes de 4:00 pm a 6:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63628.86628511814!2d-74.18333864990123!3d4.629003980837079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c0061d887bd%3A0xd558e4ce4a615d13!2s5%20Site%20F%C3%BAtbol%20Am%C3%A9ricas!5e0!3m2!1ses-419!2sus!4v1730315316261!5m2!1ses-419!2sus',
    },
    ],
    'Barranquila': [
      {
      nombre: 'Sede Metropolitana',
      direccion: 'Carrera 10 #20-30, Villavicencio',
      horarios: 'Sábados de 9:00 am a 12:00 pm',
      telefono: '018000 123 456',
      mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60895.87013217651!2d-74.81719893757126!3d10.92433948252825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef5d35e6ab152fd%3A0x432dea950e1d49b9!2sEstadio%20Metropolitano%20Roberto%20Mel%C3%A9ndez!5e0!3m2!1ses-419!2sus!4v1730319138106!5m2!1ses-419!2sus',
    },
    ],
    'Cali': [
      {
        nombre: 'Sede Pascual Guerrero',
        direccion: 'Carrera 10 #20-30, Villavicencio',
        horarios: 'Sábados de 9:00 am a 12:00 pm',
        telefono: '018000 123 456',
        mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.671682315679!2d-76.54361388872965!3d3.4298632965302276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a69bc40cba09%3A0x4ac54a6d820c91bf!2sEstadio%20Ol%C3%ADmpico%20Pascual%20Guerrero!5e0!3m2!1ses-419!2sus!4v1730321245635!5m2!1ses-419!2sus',
      },
    ],
    'Medellin': [
      {
        nombre: 'Sede Atanasio Girardot',
        direccion: 'Carrera 10 #20-30, Villavicencio',
        horarios: 'Sábados de 9:00 am a 12:00 pm',
        telefono: '018000 123 456',
        mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.105722963049!2d-75.59275318871438!3d6.256766993705608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290e4f870f69%3A0xf57f97b59ef52c39!2sEstadio%20de%20F%C3%BAtbol%20Atanasio%20Girardot!5e0!3m2!1ses-419!2sus!4v1730321329690!5m2!1ses-419!2sus',
      },
    ],
    'Villavicencio': [
      {
        nombre: 'Sede Bello Horizonte',
        direccion: 'Carrera 10 #20-30, Villavicencio',
        horarios: 'Sábados de 9:00 am a 12:00 pm',
        telefono: '018000 123 456',
        mapaEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.632016875043!2d-73.63563043331936!3d4.139877639310975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3e2e77b90b2019%3A0xb51ab5be13ab4052!2sEstadio%20Bello%20Horizonte!5e0!3m2!1ses-419!2sus!4v1730321389334!5m2!1ses-419!2sus',
      },
    ],
  };

  const [sedeSeleccionada, setSedeSeleccionada] = useState(sedesPorCiudad['Bogotá'][0]);
  const [ciudadesAbiertas, setCiudadesAbiertas] = useState({});
  const [esMovil, setEsMovil] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setEsMovil(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleCiudad = (ciudad) => {
    setCiudadesAbiertas((prev) => ({
      ...prev,
      [ciudad]: !prev[ciudad],
    }));
  };

  const seleccionarSede = (sede) => {
    setSedeSeleccionada(sede);
  };

  return (
    <div id='HomeSedes' className=''>
      <div className='containerSedes section'>
        <div className='bloque b1'>
          <h3 className='titulo-principal'>NUESTRAS SEDES</h3>
          <p className='textoIntroSedes'>
            En <b>Soccer School</b>, contamos con <b>7 sedes a nivel nacional</b> ubicadas estratégicamente para tu comodidad en las principales ciudades del país y ofrecemos horarios flexibles adaptados a las necesidades de cada familia. Nuestro objetivo es que el fútbol sea accesible para todos, brindando espacios seguros y bien equipados para que tus hijos disfruten de su entrenamiento.
          </p>
        </div>

        <div className='bloque b2'>
          {!esMovil ? (
            <div className='accordion'>
              {Object.entries(sedesPorCiudad).map(([ciudad, sedes]) => (
                <div key={ciudad} className='ciudad'>
                  <button
                    className={`ciudad-titulo ${ciudadesAbiertas[ciudad] ? 'abierta' : ''}`}
                    onClick={() => toggleCiudad(ciudad)}
                  >
                    <span className='icono-flecha'>
                      {ciudadesAbiertas[ciudad] ? '◄' : '►'}
                    </span>
                    {`SEDES ${ciudad.toUpperCase()}`}
                  </button>
                  <div className={`ciudad-sedes ${ciudadesAbiertas[ciudad] ? 'mostrar' : ''}`}>
                    {sedes.map((sede, index) => (
                      <button
                        key={index}
                        className={`boton-sede ${sedeSeleccionada?.nombre === sede.nombre ? 'activo' : ''}`}
                        onClick={() => seleccionarSede(sede)}
                      >
                        {sede.nombre.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='listado-movil'>
              <label htmlFor='selectorSede'><strong>Selecciona una sede:</strong></label>
              <select
                id='selectorSede'
                className='select'
                onChange={(e) => {
                  const valor = e.target.value;
                  const [ciudad, index] = valor.split('_');
                  seleccionarSede(sedesPorCiudad[ciudad][index]);
                }}
              >
                <option value=''>-- Elige una sede --</option>
                {Object.entries(sedesPorCiudad).map(([ciudad, sedes]) =>
                  sedes.map((sede, idx) => (
                    <option key={`${ciudad}_${idx}`} value={`${ciudad}_${idx}`}>
                      {`${ciudad} - ${sede.nombre}`}
                    </option>
                  ))
                )}
              </select>
            </div>
          )}
        </div>

        {sedeSeleccionada && (
          <div className='bloque b3'>
            <div className='info-sede'>
              <div className='detalle-sede'>
                <div className='mapa'>
                  <iframe
                    src={sedeSeleccionada.mapaEmbedUrl}
                    width='100%'
                    height='300'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                    title='Mapa de la Sede'
                  ></iframe>
                </div>
                <p className='tituloSedeMap'><strong>{sedeSeleccionada.nombre}</strong></p>
                <p><strong>Dirección:</strong> {sedeSeleccionada.direccion}</p>
                <p><strong>Horarios:</strong> {sedeSeleccionada.horarios}</p>
                <p><strong>Teléfono:</strong> {sedeSeleccionada.telefono}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeSedes;
