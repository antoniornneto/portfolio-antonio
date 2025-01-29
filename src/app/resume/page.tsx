import Container from "@/components/Container";
import {
  Css3OriginalWordmark,
  Html5OriginalWordmark,
  JavascriptOriginal,
  NextjsOriginalWordmark,
  NodejsOriginalWordmark,
  TypescriptOriginal,
  PrismaOriginalWordmark,
  PostgresqlOriginalWordmark,
  ReactOriginalWordmark,
  SassOriginal,
  ExpressOriginalWordmark,
} from "devicons-react";
import Image from "next/image";
import brazil from "../../../public/languages/brazil-.png";
import eua from "../../../public/languages/usa.png";

export default function Page() {
  return (
    <Container
      mainStyle={"bg-[url(../../public/resume.jpg)] bg-cover bg-center"}
      sectionStyle="grid grid-cols-3 grid-rows-2 px-40 max-h-[850px] py-10 gap-5"
    >
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="text-3xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Linguagens e Tecnologias
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <JavascriptOriginal size={80} />
          <NodejsOriginalWordmark size={80} />
          <ExpressOriginalWordmark size={80} />
          <TypescriptOriginal size={80} />
          <ReactOriginalWordmark size={80} />
          <NextjsOriginalWordmark size={80} />
          <Html5OriginalWordmark size={80} />
          <Css3OriginalWordmark size={80} />
          <SassOriginal size={80} />
          <PrismaOriginalWordmark size={80} />
          <PostgresqlOriginalWordmark size={80} />
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5 col-span-1 row-span-2">
        <h1 className="text-3xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Experiência
        </h1>
        <div className="flex gap-5 flex-wrap py-5">
          <div className="rounded-full bg-[#f1da8b] w-20 h-20 flex flex-col items-center justify-center text-black">
            <p>2023</p>
            <p>-</p>
            <p>2024</p>
          </div>
          <div>
            <p className="text-xl">Desenvolvedor FullStack - Freelancer</p>
            <p className="text-ms font-light">Dada Inova</p>
          </div>
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="text-3xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Idiomas
        </h1>
        <div className="flex gap-5 flex-wrap py-5">
          <Image width={80} alt="bandeira do Brasil" src={brazil} />
          <Image width={80} alt="bandeira do EUA" src={eua} />
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="text-3xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Formação
        </h1>
        <div className="flex flex-wrap py-5 flex-col">
          <span className="text-xl">Análise e Desenvolvimento de Sistemas</span>
          <span className="text-sm font-light">Universidade Anhanguera</span>
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="text-3xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Habilidades
        </h1>
        <div className="flex flex-wrap py-5 flex-col">
          <span className="text-xl font-light">
            Clean Code - Mobile First - Git/GitHub - Comunicativo - Proatividade
            - Trabalho em equipe
          </span>
        </div>
      </section>
    </Container>
  );
}
