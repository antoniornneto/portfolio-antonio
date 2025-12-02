import Image from "next/image";
// import instagram from "../../public/social/icons8-instagram-64.png";

import Container from "@/components/Container";
import me from "../../public/antonio.jpg";
import { Button } from "@/components/Button";
import Link from "next/link";
import { socialMediaContents } from "@/lib/utils";

export default function Home() {
  const btnContents = [
    { id: "1", txt: "competências", href: "/resume" },
    { id: "2", txt: "portfólio", href: "/portfolio" },
  ];

  return (
    <Container
      titlePage="Home"
      sectionStyle="flex flex-col items-center justify-center flex-1"
    >
      {/* Hero section */}
      <section className="flex">
        <div className="flex items-center gap-14">
          <div className="hidden w-[300px] rounded-full h-[300px] overflow-hidden relative md:flex">
            <Image
              alt="Foto do Antonio"
              src={me}
              fill
              sizes="100vw"
              className="absolute object-cover object-[25%_25%] w-full h-full scale-150"
            />
          </div>
          <div className="flex flex-col gap-10">
            {/* name and tittle */}
            <div className="ml-3 md:ml-0">
              <h1 className="font-semibold md:text-6xl text-5xl">antonio</h1>
              <h1 className="font-semibold md:text-6xl text-5xl">nascimento</h1>
              <h2 className="tracking-[.3rem] font-light uppercase">
                Desenvolvedor Fullstack
              </h2>
            </div>
            {/* buttons */}
            <div className="flex flex-col gap-5 items-center md:flex-row">
              {btnContents.map((btn) => (
                <Button
                  classNameLink="flex-1"
                  className="max-[425px]:min-w-40"
                  variant="normal"
                  key={btn.id}
                  href={btn.href}
                >
                  {btn.txt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Social Media */}
      <section className="flex flex-col absolute bottom-10 right-64 pl-4 pb-4">
        <p>contato</p>
        <div className="flex mt-4 gap-3">
          {socialMediaContents.map((socialMedia) => (
            <Link target="_blank" key={socialMedia.id} href={socialMedia.href}>
              <Image
                src={socialMedia.source}
                width={40}
                height={40}
                alt="link"
              />
            </Link>
          ))}
        </div>
      </section>
    </Container>
  );
}
