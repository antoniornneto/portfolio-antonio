import Container from "@/components/Container";
import Image from "next/image";
import brazil from "../../../public/languages/brazil-.png";
import eua from "../../../public/languages/usa.png";
import javascript from "../../../public/images/javascript.png";
import typescript from "../../../public/images/typescript.png";
import html5 from "../../../public/images/html5.png";
import css3 from "../../../public/images/css3.png";
import python from "../../../public/images/python.png";
import node from "../../../public/images/node.png";
import nextjs from "../../../public/images/nextjs.png";
import tailwind from "../../../public/images/tailwind.png";
import express from "../../../public/images/express.png";
import react from "../../../public/images/react.png";
import expo from "../../../public/images/expo.png";
import ios from "../../../public/images/ios.png";
import android from "../../../public/images/android.png";
import { Button } from "@/components/Button";

export default function Page() {
  return (
    <Container
      titlePage="Competências"
      sectionStyle="xl:w-[1200px] lg:[960px] m-auto"
    >
      <div className="flex-1 flex flex-col justify-center px-10 xl:px-0">
        <Button
          classNameLink="w-fit"
          href="/"
          className="w-12 h-12 text-2xl mb-8"
          variant="rounded"
        >
          {"<"}
        </Button>
        <h1 className="text-4xl font-semibold mb-4 lg:text-6xl">
          competências
        </h1>
        <div className="flex flex-1 flex-col lg:justify-between gap-8 ">
          <div className="overflow-y-auto xl:overflow-visible max-h-[60vh] xl:max-h-none pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
            <div className="flex flex-col xl:flex-row gap-8">
              {/* Formação e Experiência */}
              <div className="flex flex-1 flex-col gap-8">
                <div>
                  <h2 className="text-xl lg:text-2xl font-medium tracking-widest mb-2">
                    formação acadêmica
                  </h2>
                  <p className="text-[#DD9700] text-lg tracking-wide">
                    Análise e Desenvolvimento de Sistemas
                  </p>
                  <p className="tracking-wider font-extralight">
                    Universidade Anhanguera
                  </p>
                  <p className="tracking-wider font-extralight">
                    ago 2023 - dez 2025
                  </p>
                </div>
                <div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-medium lg:text-2xl tracking-widest mb-2">
                      experiências profissionais
                    </h2>
                    <p className="text-[#DD9700] text-lg tracking-wide">
                      Keap Staff / Bravo - Website comercial, CRM e app mobile
                    </p>
                    <p className="tracking-wider font-extralight">
                      Desenvolvedor FullStack - Freelancer
                    </p>
                    <p className="tracking-wider font-extralight">
                      fev 2025 - (atual)
                    </p>
                    <p className="text-[#DD9700] text-lg tracking-wide">
                      Dada Inova - Website comercial e Sistema de gerenciamento
                    </p>
                    <p className="tracking-wider font-extralight">
                      Desenvolvedor FullStack - Freelancer
                    </p>
                    <p className="tracking-wider font-extralight">
                      jan 2024 - fev 2025
                    </p>
                  </div>
                </div>
              </div>
              {/* Habilidades */}
              <div className="xl:w-64 flex flex-col gap-8">
                {/* Habilidades secundárias */}
                <div>
                  <h2 className="text-xl font-medium lg:text-2xl tracking-widest mb-2">
                    habilidades secundárias
                  </h2>
                  <p className="font-extralight">
                    Clean Code - Mobile First - Git/GitHub - Comunicativo -
                    Proatividade - Trabalho em equipe - Auto-didata - Organizado
                    - Facilidade em resolver problemas
                  </p>
                </div>
                {/* Idiomas */}
                <div>
                  <h2 className="text-2xl font-medium tracking-widest mb-2">
                    idiomas
                  </h2>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={brazil}
                        className="w-6 h-6"
                        alt="bandeira do brasil"
                      />
                      <p className="font-extralight">português</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image
                        src={eua}
                        className="w-6 h-6"
                        alt="bandeira do EUA"
                      />
                      <p className="font-extralight">inglês</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Stack */}
            <div className="flex flex-col items-center mt-4">
              <p className="text-lg tracking-widest">stack:</p>
              <div className="flex gap-4 items-center justify-center flex-row flex-wrap">
                <Image
                  src={javascript}
                  alt="logo javascript"
                  className="w-14 h-14"
                />
                <Image
                  src={typescript}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image src={node} alt="logo javascript" className="w-12 h-12" />
                <Image
                  src={python}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image
                  src={nextjs}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image
                  src={react}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image
                  src={android}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image src={ios} alt="logo javascript" className="w-12 h-12" />
                <Image src={expo} alt="logo javascript" className="w-12 h-12" />
                <Image
                  src={express}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image
                  src={tailwind}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image
                  src={html5}
                  alt="logo javascript"
                  className="w-12 h-12"
                />
                <Image src={css3} alt="logo javascript" className="w-12 h-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
