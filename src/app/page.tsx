import Image from "next/image";
// import instagram from "../../public/social/icons8-instagram-64.png";
import linkedin from "../../public/social/icons8-linkedin-50.png";
import github from "../../public/social/github-white.png";
import wpp from "../../public/social/icons8-whatsapp-64.png";
import Container from "@/components/Container";
import me from "../../public/antonio.jpg";
import { Button } from "@/components/Button";
import Link from "next/link";

export default function Home() {
  const btnContents = [
    { id: "1", txt: "competências", href: "/resume" },
    { id: "2", txt: "portfólio", href: "/portfolio" },
  ];

  const socialMediaContents = [
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/antoniornneto/",
      source: linkedin,
    },
    {
      id: "github",
      href: "https://github.com/antoniornneto",
      source: github,
    },
    {
      id: "whatsapp",
      href: "https://api.whatsapp.com/send/?phone=5527993118171&text&type=phone_number&app_absent=0",
      source: wpp,
    },
  ];
  return (
    <Container
      titlePage="Home"
      mainStyle={"bg-[url(../../public/img.jpg)] bg-center bg-cover h-screen"}
      sectionStyle="flex flex-col items-center justify-center"
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
                <Button type="normal" key={btn.id} href={btn.href}>
                  {btn.txt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Social Media */}
      <section className="flex flex-col absolute bottom-10 right-64">
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
