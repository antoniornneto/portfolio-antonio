import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { checkingBirthday } from "@/lib/utils";

export default function Page() {
  return (
    <Container
      titlePage="Sobre mim"
      sectionStyle="xl:w-[1200px] lg:[960px] m-auto"
    >
      <div className="flex-1 flex flex-col justify-center px-10 xl:px-0">
        <Button
          classNameLink="w-fit"
          href="/"
          className="w-12 h-12 text-2xl mb-12"
          variant="rounded"
        >
          {"<"}
        </Button>
        <div className="mb-4">
          <h1 className="text-4xl font-semibold mb-4 lg:text-6xl">sobre</h1>
          <h2 className="text-xl lg:text-2xl tracking-widest mb-2">
            Antonio Nascimento
          </h2>
          <p className="tracking-widest">{checkingBirthday} anos</p>
          <p className="tracking-widest">Anchieta, Espírito Santo - Brasil </p>
        </div>
        <div className="flex gap-4 flex-col xl:flex-row overflow-y-auto xl:overflow-visible max-h-[60vh] xl:max-h-none pr-2 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
          <p className="flex-1 tracking-widest font-light">
            Desenvolvedor Web com experiência a mais de um ano em
            desenvolvimento, manutenção e sustentação de sistemas com
            tecnologias Fullstack, aplicando meu conhecimento técnico e minha
            habilidade em resolver problemas de forma eficaz.
          </p>
          <p className="flex-1 tracking-widest font-light">
            Tenho experiência na área de FrontEnd com a linguagem de programação
            Javascript/Typescript e tecnologias como React, React com Vite,
            Next, que me permitem criar interfaces e implementações inovadoras,
            responsivas e otimizadas. Experiência também com ferramentas como
            Zod para formulários, ContextAPI e Zustand para controle de estados,
            e Tailwind e SASS para estilização.
          </p>
          <p className="flex-1 tracking-widest font-light">
            Na área de Backend, possuo experiência com foco em desenvolvimento e
            integração de APIs escaláveis utilizando Node.js, Express.JS, Axios,
            Postman, API Router, PrismaORM, PostgreSQL e MongoDB. Minha
            abordagem técnica é complementada por boas práticas de programação,
            habilidades interpessoais, boa comunicação, facilidade para
            trabalhar em equipe e proatividade, o que me torna apto a
            identificar e solucionar desafios com eficiência.
          </p>
        </div>
        <Button
          className="px-6 py-2 text-xl"
          variant="normal"
          href="/contact"
          classNameLink="self-center mt-8"
        >
          entrar em contato
        </Button>
      </div>
    </Container>
  );
}
