import { useState, useEffect } from "react";
import "../../stylesheets/HomeArticulos.css";

const articulos = [
  {
    id: 1,
    titulo: "CampSoccer 2025",
    descripcion: "Disfruta y desmuestra tus habilidades este 27, 28 y 30",
    imagen: "https://i.pinimg.com/736x/c2/c9/bf/c2c9bf456edb64322da500ef8a67ad0d.jpg",
  },
  {
    id: 2,
    titulo: "Liga Poni Futbol",
    descripcion: "Liga de clausura Poni Futbol 2025 ¡Inscripciones Abiertas!",
    imagen: "https://mir-s3-cdn-cf.behance.net/projects/404/06639360880017.Y3JvcCwyMDc0LDE2MjMsNDMwLDIw.png",
  },
    {
    id: 3,
    titulo: "Torneo Fenemino",
    descripcion: "Vuelven el torneo Dominical de futbol Femenino ¡Nuevo formato!",
    imagen: "https://www.uptc.edu.co/sitio/export/sites/default/portal/sitios/universidad/rectoria/bie_uni/.galleries/gal_eventos/1/torneo-femenino-nocturno-1.png_133113592.png",
  },
  {
    id: 4,
    titulo: "Torneo Departamental",
    descripcion: "Participa y clasifica al Torneo Nacional de Futbol Infantil",
    imagen: "https://i.pinimg.com/736x/44/86/4f/44864f8e545eb6f8658654461fda8683.jpg",
  },
    {
    id: 5,
    titulo: "Indumentaria 2025",
    descripcion: "El amor a la camiseta ♥ mira la nueva indumentaria 2025",
    imagen: "https://i.pinimg.com/736x/c0/48/4a/c0484a18e597a4613ba24214f8ce3648.jpg",
  },
    {
    id: 6,
    titulo: "El 11 semanal",
    descripcion: "Mira los jugadores que la estan ¡Rompiendo! cada fin de semana",
    imagen: "https://i.pinimg.com/736x/08/f8/9d/08f89d65135ea2db9a402b5eb9a86cd7.jpg",
  },

];

const HomeArticulos = () => {
  const [indice, setIndice] = useState(0);
  const [tarjetasVisibles, setTarjetasVisibles] = useState(getCantidadVisible());

  // Ajusta la cantidad visible en función del ancho de pantalla
  function getCantidadVisible() {
    return window.innerWidth < 768 ? 2 : 3;
  }

  useEffect(() => {
    const manejarResize = () => {
      setTarjetasVisibles(getCantidadVisible());
    };
    window.addEventListener("resize", manejarResize);
    return () => window.removeEventListener("resize", manejarResize);
  }, []);

  const avanzar = () => {
    setIndice((prev) => (prev + tarjetasVisibles) % articulos.length);
  };

  const retroceder = () => {
    let nuevoIndice = indice - tarjetasVisibles;
    if (nuevoIndice < 0) {
      nuevoIndice = (articulos.length + nuevoIndice) % articulos.length;
    }
    setIndice(nuevoIndice);
  };


  const obtenerGrupo = () => {
    const grupo = [];
    for (let i = 0; i < tarjetasVisibles; i++) {
      const pos = (indice + i) % articulos.length;
      grupo.push(articulos[pos]);
    }
    return grupo;
  };

  return (
    <section className="home-articulos">
      <h3>Artículos Destacados</h3>
      <div className="carrusel-container">
        <button className="flecha izquierda" onClick={retroceder}>
          &#10094;
        </button>

        <div className="tarjetas-grupo">
          {obtenerGrupo().map((articulo) => (
            <div className="tarjeta" key={articulo.id}>
              <img src={articulo.imagen} alt={articulo.titulo} />
              <div className="contenido">
                <h4>{articulo.titulo}</h4>
                <p>{articulo.descripcion}</p>
                <button className="saber-mas">Saber más</button>
              </div>
            </div>
          ))}
        </div>

        <button className="flecha derecha" onClick={avanzar}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default HomeArticulos;