import Image from "next/image";
import Link from "next/link";
import instagram from "../../public/icons8-instagram-64.png";
import linkedin from "../../public/icons8-linkedin-50.png";
import wpp from "../../public/icons8-whatsapp-64.png";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container
      mainStyle={"bg-[url(../../public/img.jpg)] bg-center bg-cover"}
      sectionStyle="flex flex-col items-end"
    >
      {/* Hero section */}
      <section className="flex flex-col pr-32 my-auto">
        <h1 className="text-9xl uppercase font-light">Antonio</h1>
        <h1 className="text-9xl uppercase font-bold">Nascimento</h1>
        <h2 className="text-4xl tracking-[30px]">Web Developer</h2>
        <div className="flex gap-5">
          <Link
            className="flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
            href={"/resume"}
          >
            Resume
          </Link>

          <Link
            className="flex text-2xl justify-center items-center gap-2 border-[1px] w-fit py-2 px-8 rounded-full my-4 hover:bg-[#f1da8b] hover:text-zinc-600 transition-colors ease-in-out duration-500"
            href={"/portfolio"}
          >
            Portfolio
          </Link>
        </div>
      </section>
      {/* Social Media */}
      <section className="flex pr-32 pb-10 gap-2">
        <Link
          href={"https://www.linkedin.com/in/antonio-nascimento-851579237/"}
          target="_blank"
        >
          <Image src={linkedin} width={40} height={40} alt="link" />
        </Link>
        <Link target="_blank" href={"https://www.instagram.com/tonhohawk/"}>
          <Image src={instagram} width={40} height={40} alt="link" />
        </Link>
        <Link
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
