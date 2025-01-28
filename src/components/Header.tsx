import Link from "next/link";

export default function Header() {
  const navList = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Portfolio",
      path: "/portfolio",
    },
    {
      name: "Skills",
      path: "/skills",
    },
  ];
  return (
    <nav className="sticky z-10 text-[rgb(243,231,219)] w-screen backdrop-filter backdrop-blur-md py-3">
      <ul className="flex gap-10 w-full justify-center items-center">
        {navList.map((item, index) => (
          <li key={index}>
            <Link
              className="tracking-[3px] uppercase transition-all ease-in-out duration-300 hover:text-[#f1da8b]"
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
