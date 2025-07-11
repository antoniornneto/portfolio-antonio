import Image from "next/image";
import Link from "next/link";
// import instagram from "../../public/social/icons8-instagram-64.png";
import linkedin from "../../public/social/icons8-linkedin-50.png";
import github from "../../public/social/github.png";
import wpp from "../../public/social/icons8-whatsapp-64.png";
import Container from "@/components/Container";
import me from "../../public/antonio.jpg";

export default function Home() {
  return (
    <Container
      titlePage="Home"
      mainStyle={"bg-[url(../../public/img.jpg)] bg-center bg-cover h-screen"}
      sectionStyle="flex flex-col lg:items-end py-5"
    >
      {/* Hero section */}
      <section className="flex flex-col my-auto xl:pr-32">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start">
          <div className="hidden w-[300px] h-[300px] relative cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out md:flex">
            <Image
              alt="Foto do Antonio"
              src={me}
              fill
              sizes="100vw"
              className="absolute object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <div>
              <h1 className="text-5xl lg:text-7xl xl:text-9xl uppercase font-light">
                Antonio
              </h1>
              <h1 className="text-5xl lg:text-7xl xl:text-9xl uppercase font-bold">
                Nascimento
              </h1>
              <h2 className="tracking-widest md:tracking-[15px]">
                Full-Stack Developer
                <span className="tracking-widest md:tracking-[30px]">...</span>
                <span className="md:tracking-[30px] animate-[blink_1s_infinite]">
                  |
                </span>
              </h2>
            </div>
            <div className="flex flex-col items-center md:flex-row md:gap-5">
              <Link
                className="min-w-44 flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
                href={"/resume"}
              >
                Experiências
              </Link>

              <Link
                className="min-w-44 flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
                href={"/portfolio"}
              >
                Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media */}
      <section className="flex justify-center gap-5 md:justify-end md:pr-32 md:pb-10 md:gap-8">
        <Link
          href={"https://github.com/antoniornneto"}
          target="_blank"
          className="animate-[wiggle_1s_ease-in-out_infinite] duration-300 transition-all ease-in-out"
        >
          <Image
            src={github}
            width={40}
            height={40}
            alt="link"
            className="bg-white rounded-xl p-1"
          />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/antoniornneto/"}
          target="_blank"
          className="animate-[wiggle_1s_ease-in-out_infinite] duration-300 transition-all ease-in-out"
        >
          <Image src={linkedin} width={40} height={40} alt="link" />
        </Link>
        {/* <Link
          className="animate-[wiggle_1s_ease-in-out_infinite] duration-300 transition-all ease-in-out"
          target="_blank"
          href={"https://www.instagram.com/tonhohawk/"}
        >
          <Image src={instagram} width={40} height={40} alt="link" />
        </Link> */}
        <Link
          className="animate-[wiggle_1s_ease-in-out_infinite] duration-300 transition-all ease-in-out"
          target="_blank"
          href={
            "https://api.whatsapp.com/send/?phone=5527993118171&text&type=phone_number&app_absent=0"
          }
        >
          <Image src={wpp} width={40} height={40} alt="link" />
        </Link>
      </section>
    </Container>
  );
}
