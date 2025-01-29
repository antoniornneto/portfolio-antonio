import Link from "next/link";

export default function Header() {
  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Sobre",
      path: "/about",
    },
    {
      name: "Experiencia",
      path: "/resume",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
  ];
  return (
    <nav className="sticky z-10 text-[rgb(243,231,219)] w-screen backdrop-filter backdrop-blur-md py-3 shadow-lg">
      <ul className="flex gap-10 w-full justify-center items-center">
        {navList.map((item, index) => (
          <li className="" key={index}>
            <Link
              className="tracking-[3px] uppercase hover:text-[#f1da8b] hover:border-y-[#f1da8b] hover:border-y-[1px] transition-all ease-in-out duration-200"
              href={item.path}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
