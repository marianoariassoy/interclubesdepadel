import { WhatsApp } from "@/lib/icons";
import Item from "./Item";
import Whatsapp from "@/components/WhatsApp";

const Presentacion = () => {
  const data = [
    {
      title: "🤔 ¿Qué necesito para realizar la inscripción?",
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un mínimo de 5 participantes en la lista de buena fe. Tener o alquilar 2 canchas de Padel de la misma superficie para poder hacer de local.`,
    },
    {
      title: "📅 Fechas",
      text: `Inicio de torneo: <strong>5 de Julio</strong><br />
Cierre de Inscripción: <strong>22 de Junio</strong><br />
Cierre de listas de buena fe: <strong>3 de Julio</strong>`,
    },
    {
      title: "🏆 ¿Cómo es el formato de juego y del torneo?",
      text: `En todas las categorias se jugaran dos partidos (cada partido ganado sumara 1 punto).
      Todos los partidos se disputarán al mejor de 3 sets completos con punto de oro. 
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.
      `,
    },
    {
      title: "🚀 ¿En qué categorías puedo inscribirme?",
      text: `<strong>Caballeros y Damas:</strong> 8va a 3ra <br/> 
      <strong>Mixtos:</strong> M15 M13 M11 M9.  
      `,
    },
    {
      title: "🔞 ¿Hay restricciones por edad?",
      text: `Todas las categorías son libres de edad (mayores de 14 años).`,
    },
    {
      title: "🌍 ¿Dónde se juega?",
      text: `Cada equipo <strong>representará a un club</strong> donde jugará de local.<br/> Cada club podrá tener más de 1 equipos en cada categoría.<br/>
      Zonas de juego: Zona Oeste, Zona Norte de Buenos Aires.`,
    },

    {
      title: "🕛 ¿Qué día y horario se juega por categoría?",
      text: `<strong>Los dias domingos de 9hs a 17hs.</strong> <br/>
      Cada equipo podrá elegir el horario en condición de local. En caso de que una institución presente más de un equipo, la organización lo tendrá presente a la hora de las programaciones para no superponer horarios.
      `,
    },
    {
      title: "🤔 ¿Hay un mínimo de fechas o encuentros a disputar?",
      text: `No podemos saber con exactitud cuantas fechas se disputarán por categoría pero garantizamos un minimo de 8 fechas por equipo.`,
    },
    {
      title: "🎉 ¿Que premios hay?",
      text: `Los equipos campeones obtendrán la copa del torneo Interclubes DePádel Clausura 2025, medallas,  equipo completo de indumentaria para cada jugador, descuentos en ordenes de compra y otros premios, los equipos subcampeones obtendrán medallas, regalos y descuentos en ordenes de compra.
      `,
    },
    {
      title: "🎾 Pelotas",
      text: `El equipo local será el encargado de aportar las pelotas oficiales YUKA del torneo provistas por la organización.`,
    },
    {
      title:
        "💵 ¿Cuál es el valor y como abonar la inscripción de cada jugador?",
      text: `El valor por jugador es de <strong>$25.000- </strong> <br/><br/>
      <strong>Datos para transferencia bancaria:</strong> <br/>
      Alias: interclubesdepadel <br/> Nombre: Mariano Arias
      <br/> 
      Enviar comprobante al área administrativa +54 9 11 3017 1475.
      `,
    },
    {
      title: "💵 ¿Cuál es el valor a abonar cada partido?",
      text: `Pago por Partido $8.000 cada jugador`,
    },
    {
      title: "😀 ¿Cómo llevo adelante la inscripción?",
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `,
    },
  ];
  return (
    <section className="fade-in flex flex-col gap-y-6 text-sm max-w-xl m-auto">
      <div className="flex flex-col gap-y-3">
        <div className="text-center flex flex-col items-center">
          <h1 className="font-bold text-primary text-lg">
            Torneo Clausura 2025
          </h1>
          <div className="text-2xl text-center">🏆</div>
        </div>

        <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
          <img
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM2t6cmtkZThhdXU0dnloenJvcm9lNnV2N2NpMWE1MzFtYWVnbnNqcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L1z2sFxmuNdA8lxkHu/giphy.gif"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="[&>p>span]:font-bold [&>p>span]:text-primary">
        <p>
          <span>DePádel</span>, creador de uno de los circuitos de pádel más
          importantes de Argentina, e <span>IML Tenis</span>, líder en torneos
          de tenis por equipos, se unen para impulsar los interclubes de pádel
          en todo el país.
          <br />
          <br />
          Vas a poder formar parte de{" "}
          <span>una nueva forma de competir en el pádel.</span> Participá con tu
          grupo de amigos representando tu club, jugando en tus canchas, también
          conociendo nuevos lugares y jugadores cada semana. Siempre con
          resultados y rankings actualizados en nuestro sitio web.
          <br />
          <br />
          No te pierdas la oportunidad de ser elegido como el jugador destacado
          de la fecha o de recibir importantes premios al finalizar la
          temporada, liderando el <span>ranking de jugadores.</span> Además, vas
          a poder ayudar a tu club a conquistar el título anual en el{" "}
          <span>ranking de clubes.</span>
          <br />
          <br />Y eso no es todo: valoramos profundamente a nuestra comunidad,
          por eso también sumamos espacios de entretenimiento como{" "}
          <span>La Batalla de los Clubes</span>, la elección de{" "}
          <span>Los Mejores Capitanes</span> y los nuevos{" "}
          <span>DePadel Awards.</span>
          <br />
          <br />
          Todo culmina con una <span>gran jornada de finales</span>, donde todas
          las categorías participan de un evento de cierre con entrega de
          premios y sorteos.
        </p>
      </div>

      {data.map((item, index) => (
        <Item key={index} title={item.title} text={item.text} />
      ))}

      <div className="font-medium">
        <a
          href="https://wa.me/5491169604530"
          className="hover:underline flex items-center gap-x-2 flex-wrap text-primary"
          target="_blank"
        >
          <span>Contactate por</span>
          <span className="flex items-center gap-x-1">
            <WhatsApp /> WhatsApp haciendo click acá
          </span>
        </a>
      </div>
      <div className="mb-3 font-bold text-primary">
        ¡Nos vemos en la cancha! 😉
      </div>

      <div className="aspect-square lg:aspect-video overflow-hidden rounded-xl">
        <img
          src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3Zuem8wZW1xM2FkNGwzcWdlZWNqbmJkdWtsczVwODQzMjQ4MHF3aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/HjfFs253fqrU3pfQg7/giphy.gif"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <Whatsapp />
    </section>
  );
};

export default Presentacion;
