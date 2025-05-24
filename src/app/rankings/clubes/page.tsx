import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";

export const metadata = {
  title: "Ranking de Clubes",
  description: "Ranking de Clubes en Interclubes DePádel",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://interclubesdepadel.com.ar/rankings/clubes",
    title: "Ranking de Clubes",
    description: "Ranking de Clubes en Interclubes DePádel",
    images: [
      {
        url: "/assets/cover.png",
        width: 500,
        height: 500,
        alt: "Interclubes DePádel",
      },
    ],
  },
};

interface data {
  id: string;
  image: string;
  name: string;
  club_id: string;
  matches_won: string;
  series_won: string;
  series_total: string;
  matches_total: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/rankings/clubes",
    {
      cache: "no-store",
    }
  );
  const data = (await response.json()) as data[];
  if (!data) return;

  const labels = [
    {
      name: "Club",
      value: "",
    },
    {
      name: "Pts.",
      value: "Puntos (Parciales ganados)",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
  ];

  return (
    <section className="flex flex-col gap-y-6">
      <Title title="Ranking de Clubes 2025" emoji="🥇" />

      <div className="overflow-x-auto text-sm">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index === 0 ? "text-primary" : ""}`}
              >
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/clubes/${item.id}`}
                    active={false}
                  />
                </td>
                <td className="font-semibold">{item.matches_won}</td>
                <td>{item.series_total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  );
};

export default page;
