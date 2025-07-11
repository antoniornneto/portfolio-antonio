import { GithubOriginal } from "devicons-react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import notfoundimage from "../../public/Image-not-found.png";

type ProjectCardProps = {
  id?: number;
  title: string;
  image: string;
  link: string;
  gitLink: string;
  description: string;
  stack: string[];
};

export default function Card({
  title,
  image,
  description,
  stack,
  gitLink,
  link,
}: ProjectCardProps) {
  return (
    <section className="backdrop-blur-md rounded-2xl backdrop-contrast-50 flex flex-col max-w-96 group overflow-hidden min-h-[420px] transition-colors">
      <Link className="flex-2" href={link} target="_blank">
        <div className="relative overflow-hidden rounded-t-2xl">
          <Image
            src={image || notfoundimage}
            alt={title}
            width={400}
            height={200}
            className="object-fill w-full h-[200px] transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <ExternalLink className="text-white w-6 h-6" />
          </div>
        </div>
      </Link>
      <div className="flex-1 p-2 flex flex-col justify-between gap-1">
        <div className="flex gap-2 items-center">
          <h1 className="font-bold md:text-xl">{title}</h1>
          <Link
            className="bg-zinc-200 p-2 rounded-xl"
            target="_blank"
            href={gitLink}
          >
            <GithubOriginal />
          </Link>
        </div>
        <p className="text-sm font-light text-zinc-100">{description}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((item, index) => (
            <p
              className="bg-zinc-300 text-xs text-zinc-900 rounded-2xl px-2"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
        <Link
          className="flex items-center justify-center bg-black rounded-xl p-2 text-lg hover:bg-black/70 ease-in-out transition-all duration-400"
          href={link}
          target="_blank"
        >
          Visualizar Projeto
        </Link>
      </div>
    </section>
  );
}
