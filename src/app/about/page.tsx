import Container from "@/components/Container";

export default function Page() {
  return (
    <Container
      mainStyle={"bg-[url(../../public/profile.jpg)] bg-cover"}
      sectionStyle="flex items-center px-40"
    >
      <section className="w-fit h-fit flex flex-col justify-center p-20 backdrop-blur-sm border-[1px] rounded-2xl">
        <h1 className="text-5xl uppercase font-bold border-b-[#f1da8b] border-b-[2px] pb-1 w-fit">
          Sobre
        </h1>
        <p className="text-xl pt-2">antonionascneto@gmail.com</p>
        <p className="w-[500px] text-xl pt-20 text-justify">
          Desenvolvedor Web com experiência em desenvolvimento, manutenção e
          sustentação de sistemas com tecnologias Fullstack, aplicando meu
          conhecimento técnico e minha habilidade em resolver problemas de forma
          eficaz. Tenho experiência na área de FrontEnd com a linguagem de
          programação Javascript/Typescript e tecnologias como React.JS,
          Next.JS, que me permitem criar interfaces e implementações inovadoras,
          responsivas e otimizadas. Tenho experiência na área de Backend, com
          foco em desenvolvimento de APIs escaláveis utilizando Node.js e
          tecnologias como Express.JS, Postman, PrismaORM, PostgreSQL e MongoDB.
          Minha abordagem técnica é complementada por boas práticas de
          programação, habilidades interpessoais, boa comunicação, facilidade
          para trabalhar em equipe e proatividade, o que me torna apto a
          identificar e solucionar desafios com eficiência.
        </p>
      </section>
    </Container>
  );
}
