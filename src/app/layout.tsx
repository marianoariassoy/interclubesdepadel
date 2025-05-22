import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./header";
import Footer from "./footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Interclubes DePádel",
    template: "%s - Interclubes DePádel",
  },
  description:
    "Liga de clubes de pádel desarrollada desde el mes de Marzo hasta el mes de Diciembre en 2 torneos a jugarse los días Domingos, disputando en cada fecha 2 encuentros entre 2 equipos representantes de un club.",
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.png",
    apple: "/assets/favicon.png",
  },
  generator: "marianoarias.soy",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://interclubesdepadel.com.ar",
    title: "Interclubes DePádel",
    description:
      "Liga de clubes de pádel desarrollada desde el mes de Marzo hasta el mes de Diciembre en 2 torneos a jugarse los días Domingos, disputando en cada fecha 2 encuentros entre 2 equipos representantes de un club.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2133ff" />
      </head>
      <body
        className="bg-background text-foreground min-h-screen flex flex-col transition-colors"
        style={{ fontFamily: montserrat.style.fontFamily }}
      >
        <Header />
        <main className="flex-1 w-screen lg:w-full max-w-4xl mx-auto px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
