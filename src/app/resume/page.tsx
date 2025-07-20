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
  VitejsOriginal,
  BulmaPlain,
  FirebaseOriginal,
  SupabaseOriginal,
  TailwindcssOriginal,
  FlaskOriginal,
  DjangorestPlainWordmark,
  PythonOriginal,
} from "devicons-react";
import Image from "next/image";
import brazil from "../../../public/languages/brazil-.png";
import eua from "../../../public/languages/usa.png";
import Experience from "@/components/Experience";

export default function Page() {
  const size = 55;
  return (
    <Container
      titlePage="Experiência"
      mainStyle={
        "bg-[url(../../public/resume.jpg)] bg-cover bg-center xl:h-screen"
      }
      sectionStyle="flex flex-col px-2 py-10 gap-5 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:px-24 lg:max-h-[850px]"
    >
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit md:text-3xl">
          Linguagens e Tecnologias
        </h1>
        <div className="flex flex-wrap gap-5 justify-center">
          <JavascriptOriginal size={size} />
          <NodejsOriginalWordmark size={size} />
          <ExpressOriginalWordmark size={size} />
          <TypescriptOriginal size={size} />
          <FlaskOriginal size={size} />
          <DjangorestPlainWordmark size={size} />
          <PythonOriginal size={size} />
          <ReactOriginalWordmark size={size} />
          <NextjsOriginalWordmark size={size} />
          <Html5OriginalWordmark size={size} />
          <Css3OriginalWordmark size={size} />
          <SassOriginal size={size} />
          <PrismaOriginalWordmark size={size} />
          <PostgresqlOriginalWordmark size={size} />
          <VitejsOriginal size={size} />
          <BulmaPlain size={size} />
          <FirebaseOriginal size={size} />
          <SupabaseOriginal size={size} />
          <TailwindcssOriginal size={size} />
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5 col-span-1 row-span-2">
        <h1 className="uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit md:text-3xl">
          Experiência
        </h1>
        <Experience
          startDate="02/2025"
          endDate="07/2025"
          vacancy="Desenvolvedor FullStack - Freelancer"
          description="Keap Staff / Bravo - Website comercial, CRM e app mobile."
          stacks={[
            "react",
            "vite",
            "js",
            "python",
            "nodeEX",
            "bulma",
            "firebase",
            "flask",
          ]}
        />
        <Experience
          startDate="01/2024"
          endDate="02/2025"
          vacancy="Desenvolvedor FullStack - Freelancer"
          description="Dada Inova - Website comercial e Sistema de gerenciamento"
          stacks={[
            "next",
            "ts",
            "prisma",
            "postgreesql",
            "supabase",
            "tailwind",
          ]}
        />
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit md:text-3xl">
          Idiomas
        </h1>
        <div className="flex gap-5 flex-wrap py-5">
          <Image width={80} alt="bandeira do Brasil" src={brazil} />
          <Image width={80} alt="bandeira do EUA" src={eua} />
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit md:text-3xl">
          Formação
        </h1>
        <div className="flex flex-wrap py-5 flex-col">
          <span className="text-xl">Análise e Desenvolvimento de Sistemas</span>
          <span className="text-sm font-light">
            Universidade Anhanguera (08/2023 - 12/2025)
          </span>
        </div>
      </section>
      <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 p-5 space-y-5">
        <h1 className="uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit md:text-3xl">
          Habilidades
        </h1>
        <div className="flex flex-wrap py-5 flex-col">
          <span className="text-xl font-light">
            Clean Code - Mobile First - Git/GitHub - Comunicativo - Proatividade
            - Trabalho em equipe - Auto-didata - Organizado - Facilidade em
            resolver problemas
          </span>
        </div>
      </section>
    </Container>
  );
}
