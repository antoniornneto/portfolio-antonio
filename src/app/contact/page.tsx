import { Button } from "@/components/Button";
import Container from "@/components/Container";
import { socialMediaContents } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <Container
      titlePage="Contato"
      mainStyle={"bg-cover flex-1"}
      sectionStyle="xl:w-[1200px] lg:[960px] m-auto"
    >
      <section className="flex-1 flex flex-col justify-center px-10 xl:px-0">
        <Button
          classNameLink="w-fit"
          href="/"
          className="w-12 h-12 text-2xl mb-12"
          variant="rounded"
        >
          {"<"}
        </Button>
        <div className="mb-40">
          <h1 className="text-6xl font-semibold mb-4">contato</h1>
          <p className="text-xl tracking-widest font-light mb-2">
            Vamos conversar mais sobre o seu projeto?
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-xl font-light tracking-widest">
            Entre em contato via:
          </p>
          <div className="flex flex-col md:flex-row mt-4 gap-8">
            {socialMediaContents.map((socialMedia) => (
              <Link
                target="_blank"
                key={socialMedia.id}
                href={socialMedia.href}
                className="flex items-center gap-2"
              >
                <Image
                  src={socialMedia.source}
                  width={40}
                  height={40}
                  alt="link"
                />
                <p className="tracking-widest">{socialMedia.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
