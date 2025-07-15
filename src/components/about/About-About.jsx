import "../../stylesheets/AboutAbout.css";
import border01 from '../../assets/img/Borde01.png';

const AboutAbout = () => {
  return (
    <>
    <section id="AboutAbout" className="soccer-school">
      <div className="overlay-degradado"></div>

      <div className="contenido-About">

        <div className="texto-encabezado">
          <h2 className="titulo"> SOCCER SCHOOL</h2>
          <p className="subtitulo"><strong>School</strong> and Club profesional</p>
        </div>

        <div className="cuerpo">
          <div className="escudo">
            <img src="https://soccerlifemastery.com/wp-content/uploads/2022/08/SoccerLifeMastery_NEW_NoCircle-917x1024.png" alt="Escudo" />
          </div>
          <div className="descripcion">
            <p>
              La Escuela y Club de Fútbol fue creado para dar a los jugadores en juveniles, una alternativa para el fútbol competitivo, contamos con <strong>7 sedes a nivel nacional</strong> ubicadas estratégicamente en las principales ciudades del país. Nuestro objetivo es que el fútbol sea accesible para todos, brindando espacios seguros y bien equipados para que tus hijos disfruten de su entrenamiento.
            </p> <br />
            <p>La misión de <strong>Soccer School</strong> es proporcionar un programa ideal para fomentar el desarrollo de jugadores para atletas jóvenes. Nos esforzamos por mantener un entorno que se centre en el desarrollo físico, mental y emocional de cada jugador con el objetivo de cultivar una pasión de por vida por el juego.</p>
          </div>
        </div>

        <div className="sponsors">
          <p>PATROCINADORES:</p>
          <img src="https://images.seeklogo.com/logo-png/50/3/ea-sports-fc-logo-png_seeklogo-503896.png" alt="Sponsorship" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Dimayor_Colombia_logo.svg/1781px-Dimayor_Colombia_logo.svg.png" alt="Dimayor" />
          <img src="https://i0.wp.com/gpng.net/wp-content/uploads/Adidas-Logo-Png-White.png?fit=2048%2C2048&ssl=1" alt="Adidas" />
          <img src="https://acsbitmen.github.io/MyPageWeb/assets/images/logo-asb.png" alt="AndresSuarez.com" />
        </div>
      </div>
    </section>
    <div className="borde-rasgado">
      <img src={border01} alt="" />
    </div>
      </>
  );
};

export default AboutAbout;
