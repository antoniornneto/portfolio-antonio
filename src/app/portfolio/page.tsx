
import Container from "@/components/Container";
import db from "../../../db.json";
import Card from "@/components/Card";

export default function Home() {
  return (
    <Container
      mainStyle={"bg-[url(../../public/img.jpg)] bg-center bg-cover"}
      sectionStyle="flex flex-wrap gap-5 py-5 justify-center"
    >
      {db.projects.map((project, index) => (
        <Card
          id={project.id}
          key={index}
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
