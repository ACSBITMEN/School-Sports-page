import { useState, useEffect } from 'react';
import '../stylesheets/HomeCarrusel.css';

function HomeCarrusel({ src, alt }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: 'https://storage.googleapis.com/olv-pp-public-38e706f-prod/2d40d622023%20Soccer%20School%20Large%20Banner.jpg',
      caption: '¡Inscripciones abiertas!',
      description: 'No pierdas la oportunidad de formar parte de nuestro equipo y comenzar tu camino en el fútbol con la mejor preparación.',
    },
    {
      src: 'https://storage.googleapis.com/olv-pp-public-38e706f-prod/ee0406a2023_adi_pred_banner2.jpg',
      caption: 'Adquiere tu equipación',
      description: 'Viste la armadura de un guerrero en la cancha: adquiere tu uniforme y siéntete imparable.',
    },
    {
      src: 'https://storage.googleapis.com/olv-pp-public-38e706f-prod/e48bfd12023firstskillsbanner.jpg',
      caption: 'Próximos Torneos',
      description: 'Descubre las próximas competencias que te esperan y únete a la acción. ¡Averigua e inscríbete para jugar los próximos torneos y demuestra tu pasión en la cancha!',
    },
  ];

  // Cambiar automáticamente las imágenes cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 50000);
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [currentIndex]);

  // Navegación manual
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id="HomeCarrusel" className="carousel-container">
      {/* Botón Anterior */}
      <button className="carousel-control prev" onClick={goToPrevious}>
        &#8249;
      </button>

      {/* Slides */}
      <div className="carousel-slides"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide image-container ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image.src} alt={`Slide ${index + 1}`} className="carousel-image" />
            <div className="carousel-caption">
              <h5>{image.caption}</h5>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Botón Siguiente */}
      <button className="carousel-control next" onClick={goToNext}>
        &#8250;
      </button>
      {/* Indicadores */}
      <div className="carousel-indicators">
        {images.map((_, index) => (
        <button
        key={index}
        className={`indicator ${index === currentIndex ? 'active' : ''}`}
        onClick={() => goToIndex(index)}
        ></button>
        ))}
        </div>
    </div>
    
  );
}

export default HomeCarrusel;
