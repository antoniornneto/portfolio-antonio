import Container from "@/components/Container";
import { Button } from "@/components/Button";
import Card from "@/components/Card";
import db from "../../../db.json";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <Container
      titlePage="Portfólio"
      sectionStyle="xl:w-[1200px] lg:w-[960px] m-auto"
    >
      <section className="flex-1 flex flex-col gap-10 justify-center px-6 xl:px-0">
        <Button
          classNameLink="w-fit"
          href="/"
          className="w-12 h-12 text-2xl"
          variant="rounded"
        >
          {"<"}
        </Button>

        <h1 className="text-5xl md:text-6xl font-semibold">portfolio</h1>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          className="xl:w-full relative max-[425px]:w-[320px] md:w-[700px] lg:w-[900px]"
        >
          <CarouselContent
            className="
              -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-8 xl:-ml-10
            "
          >
            {db.projects.map((project, index) => (
              <CarouselItem
                key={index}
                className="
                  pl-2 sm:pl-4 md:pl-12 lg:pl-8 xl:pl-10
                  basis-full

                  md:basis-[50%]
                  lg:basis-[33%]
                  xl:basis-1/3
                  flex justify-center
                "
              >
                <Card
                  key={project.id}
                  description={project.description}
                  gitLink={project.gitLink}
                  image={project.image}
                  link={project.link}
                  stack={project.stack}
                  title={project.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="lg:flex md:hidden absolute top-1/2 -translate-y-1/2 z-10 backdrop-blur-md w-8 h-8 rounded-full border" />
          <CarouselNext className="lg:flex md:hidden absolute top-1/2 -translate-y-1/2 z-10 backdrop-blur-md w-8 h-8 rounded-full border" />
          <CarouselPrevious className="hidden md:flex lg:hidden absolute left-1 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md w-8 h-8 rounded-full border" />
          <CarouselNext className="hidden md:flex lg:hidden absolute right-1 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md w-8 h-8 rounded-full border" />
        </Carousel>
      </section>
    </Container>
  );
}
