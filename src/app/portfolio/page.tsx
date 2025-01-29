import Container from "@/components/Container";
import db from "../../../db.json";
import Card from "@/components/Card";

export default function Home() {
  return (
    <Container
      mainStyle={"bg-[url(../../public/portfolio.jpg)] bg-center bg-cover"}
      sectionStyle="flex flex-wrap mx-auto max-w-[1200px] gap-5 items-center max-md:flex-col"
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
    </Container>
  );
}
