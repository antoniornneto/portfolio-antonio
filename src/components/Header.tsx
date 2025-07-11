"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Ou use SVGs diretamente

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Experiencia", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  const linkClass =
    "tracking-[3px] uppercase hover:text-[#f1da8b] hover:border-y-[#f1da8b] hover:border-y-[1px] transition-all ease-in-out duration-200";

  return (
    <nav className="sticky top-0 z-10 w-full backdrop-filter backdrop-blur-md py-3 shadow-lg bg-black/40 text-[rgb(243,231,219)]">
      <div className="flex justify-between items-center px-4 md:px-10">
        {/* Botão hamburguer mobile */}
        <button
          className="md:hidden text-[rgb(243,231,219)]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <ul className="hidden md:flex gap-10 items-center">
          {navList.map((item, index) => (
            <li key={index}>
              <Link className={linkClass} href={item.path}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-6 mt-4 pb-4">
          {navList.map((item, index) => (
            <li key={index}>
              <Link
                className={`${linkClass} block text-lg`}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
