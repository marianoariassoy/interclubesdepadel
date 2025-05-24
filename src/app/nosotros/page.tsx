import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="flex flex-col gap-y-3 text-sm">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-6 px-6 text-center max-w-2xl mx-auto [&>p>span]:font-bold [&>p>span]:text-primary">
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
          <br /> <br />
          <span>Bienvenido a Interclubes DePádel</span>
        </p>
      </div>
    </section>
  );
};

export default page;
