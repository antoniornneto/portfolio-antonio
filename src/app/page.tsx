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
      mainStyle={"bg-[url(../../public/img.jpg)] bg-center bg-cover"}
      sectionStyle="flex flex-col items-end"
    >
      {/* Hero section */}
      <section className="flex flex-col pr-32 my-auto">
        <div className="flex gap-14">
          <div className="w-[300px] h-[300px] relative cursor-pointer hover:scale-125 duration-300 transition-all ease-in-out">
            <Image
              alt="Foto do Antonio"
              src={me}
              fill
              sizes="100vw"
              className="absolute object-cover w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col ">
            <h1 className="text-9xl uppercase font-light">Antonio</h1>
            <h1 className="text-9xl uppercase font-bold">Nascimento</h1>
            <h2 className="text-4xl tracking-[15px]">
              Full-Stack Developer
              <span className="text-4xl tracking-[30px]">...</span>
              <span className="text-4xl tracking-[30px] animate-[blink_1s_infinite]">
                |
              </span>
            </h2>
            <div className="flex gap-5">
              <Link
                className="flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
                href={"/resume"}
              >
                Experiências
              </Link>

              <Link
                className="flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
                href={"/portfolio"}
              >
                Portfólio
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Social Media */}
      <section className="flex pr-32 pb-10 gap-8">
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
