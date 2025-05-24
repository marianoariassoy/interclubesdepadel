"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Instagram, Menu } from "@/lib/icons";
import Link from "next/link";
import Nav from "./nav";
import { usePathname } from "next/navigation";
// import ReactGA from "react-ga4";

const Header = () => {
  const pathname = usePathname();

  useEffect(() => {
    const header = document.querySelector("#header") as HTMLElement;

    if (pathname === "/") {
      header.classList.remove("backdrop-blur");
    } else {
      header.classList.add("backdrop-blur");
    }
  }, [pathname]);

  // useEffect(() => {
  //   ReactGA.initialize("G-G1DBH0K86R");
  // }, []);

  const handleMenu = () => {
    const nav = document.querySelector("#menu") as HTMLElement;
    nav.classList.toggle("hidden");
  };

  return (
    <>
      <header
        className="sticky top-0 flex w-full items-center gap-x-4 px-4 py-2 z-50 mb-2"
        id="header"
      >
        <div className="flex-1">
          <button
            className="hover:text-primary"
            aria-label="Menu"
            onClick={handleMenu}
          >
            <Menu />
          </button>
        </div>
        <div className=" flex justify-center text-primary logo-main transition-all">
          <Link href="/" aria-label="Logo">
            <Image
              src="/assets/logo.svg"
              alt="Logo IDP"
              className="w-20"
              width={80}
              height={80}
            />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-x-4 flex-1">
          <a
            href="https://www.instagram.com/interclubesdepadelok/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
            aria-label="Instagram"
          >
            <Instagram />
          </a>
        </div>
      </header>

      <Nav />
    </>
  );
};

export default Header;
