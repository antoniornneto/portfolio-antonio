"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    { name: "Home", path: "/" },
    { name: "Sobre", path: "/about" },
    { name: "Competências", path: "/resume" },
    { name: "Portfolio", path: "/portfolio" },
    // { name: "Contato", path: "/contato" },
  ];

  const linkClass =
    "tracking-[3px] uppercase hover:text-[#DD9700] hover:border-b-[#DD9700] hover:border-b-[1px] transition-all duration-300";

  return (
    <>
      <nav className="sticky top-0 z-10 w-full backdrop-filter backdrop-blur-md py-3 border-[] shadow-lg bg-black/80 text-[rgb(243,231,219)]">
        <div className="flex justify-around items-center px-4 md:px-10">
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
          <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">pt</Label>
            <Switch
              id="airplane-mode"
              color="#DD9700"
              className="data-[state=unchecked]:bg-transparent data-[state=checked]:bg-[#DD9700] border-[#DD9700]"
            />
            <Label htmlFor="airplane-mode">en</Label>
          </div>
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
      <hr className="h-[1px] border-0 bg-gradient-to-r from-[#DD970000] via-[#dd9700] to-[#DD970000]" />
    </>
  );
}
