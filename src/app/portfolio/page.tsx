import Container from "@/components/Container";
import db from "../../../db.json";
import Card from "@/components/Card";

export default function Home() {
  return (
    <Container
      titlePage="Portfólio"
      mainStyle={"bg-[url(../../public/portfolio.jpg)] bg-center bg-cover xl:h-screen"}
      sectionStyle="flex flex-col px-2 gap-5 items-center lg:flex-row lg:flex-wrap lg:justify-center"
    >
      {db.projects.map((project) => (
        <Card
          key={project.id}
          description={project.description}
          gitLink={project.gitLink}
          image={project.image}
          link={project.link}
          stack={project.stack}
          title={project.title}
        />
      ))}

      <div className="flex"></div>
    </Container>
  );
}
