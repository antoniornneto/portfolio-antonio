import Container from "@/components/Container";

export default function Page() {
  return (
    <Container
      titlePage="Sobre mim"
      mainStyle={"bg-[url(../../public/profile.jpg)] bg-cover md:h-screen"}
      sectionStyle="flex items-center px-0 sm:px-40"
    >
      <section className="w-fit my-10 flex flex-col justify-between backdrop-blur-sm rounded-2xl p-5">
        <div>
          <h1 className="text-5xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
            Sobre
          </h1>
          <p className="text-xl pt-2">
            Antonio Nascimento, 30 anos - antonionascneto@gmail.com
          </p>
        </div>
        <p className="pt-10 text-justify md:text-xl md:w-[500px]">
          Desenvolvedor Web com experiência a mais de um ano em desenvolvimento,
          manutenção e sustentação de sistemas com tecnologias Fullstack,
          aplicando meu conhecimento técnico e minha habilidade em resolver
          problemas de forma eficaz.
        </p>
        <p className="pt-5 text-justify md:text-xl md:w-[500px]">
          Tenho experiência na área de FrontEnd com a linguagem de programação
          Javascript/Typescript e tecnologias como React, React com Vite, Next,
          que me permitem criar interfaces e implementações inovadoras,
          responsivas e otimizadas. Experiência também com ferramentas como Zod
          para formulários, ContextAPI e Zustand para controle de estados, e
          Tailwind e SASS para estilização.
        </p>
        <p className="pt-5 text-justify md:text-xl md:w-[500px]">
          Na área de Backend, possuo experiência com foco em desenvolvimento e
          integração de APIs escaláveis utilizando Node.js, Express.JS, Axios,
          Postman, API Router, PrismaORM, PostgreSQL e MongoDB. Minha abordagem
          técnica é complementada por boas práticas de programação, habilidades
          interpessoais, boa comunicação, facilidade para trabalhar em equipe e
          proatividade, o que me torna apto a identificar e solucionar desafios
          com eficiência.
        </p>
        <p className="mt-5">Anchieta, Espírito Santo - Brasil </p>
      </section>
    </Container>
  );
}
