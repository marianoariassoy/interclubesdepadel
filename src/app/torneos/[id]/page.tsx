import Title from "@/components/Title";
import Campeon from "./campeon";
import Groups from "./groups";
import Fixture from "./fixture";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `${data.name} ${data.season}`,
    description: `Torneo ${data.name} ${data.season} de la liga Interclubes DePádel`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://interclubesdepadel.com.ar/torneos/${id}`,
      title: `${data.name} ${data.season}`,
      description: `Torneo ${data.name} ${data.season} de la liga Interclubes DePádel`,
      images: [
        {
          url: "https://interclubesdepadel.com.ar/assets/cover.png",
          width: 500,
          height: 500,
          alt: "Interclubes DePádel",
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id}`
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getServerSideProps(id);
  if (!data) return null;

  return (
    <section className="flex flex-col gap-y-6">
      <Title title={data.name + " " + data.season} emoji="🏆" />

      {data.team_champion_id && <Campeon data={data} />}

      <Suspense fallback={<Loader />}>
        <Groups id_tournament={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Fixture title={true} id_tournament={id} />
      </Suspense>
    </section>
  );
};

export default Page;
