import { WhatsApp } from "@/lib/icons";

const footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col px-4 py-2 pb-4 text-primary mt-6">
      <div className="text-center flex flex-col text-sm">
        <span className="font-bold">Interclubes DePádel</span>

        <div className="flex items-center flex-wrap justify-center gap-x-1 pb-2">
          <a
            href="https://wa.me/5491169604530"
            className="hover:text-primary flex items-center gap-x-1"
          >
            <WhatsApp />
            11 6960 4530
          </a>
          <span>&bull;</span>
          <span>
            <a
              href="mailto:hola@imltenis.com.ar"
              className="hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              hola@interclubesdepadel.com.ar
            </a>
          </span>
          <span>&bull;</span>
          <span>Hecho con ❤︎ en {year}</span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
