import Image from "next/image";
import { Button } from "./Button";
import github from "../../public/github.png";

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
    <div
      className="
        flex flex-col justify-between
        backdrop-blur-md rounded-2xl
        bg-white/5 overflow-hidden
        max-w-72 lg:max-w-96
        h-[460px] md:h-[480px] lg:h-[520px]
        p-3
        transition-all duration-200
      "
    >
      <div className="relative overflow-hidden rounded-lg h-[180px] md:h-[200px] lg:h-[220px]">
        <Image
          src={image || `/Image-not-found.png`}
          alt={title}
          width={400}
          height={220}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between mt-4">
        <div className="flex flex-col gap-2 flex-1">
          <h1 className="font-medium tracking-wider text-[#DD9700] leading-tight">
            {title}
          </h1>
          <p className="text-sm font-extralight tracking-wider leading-snug line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {stack.map((value) => (
            <span
              key={`${title}_${value}`}
              className="text-black bg-[#DD9700] px-2 py-1 rounded-md text-xs font-medium"
            >
              {value}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 items-center mt-4">
        <Button
          href={link}
          variant="rounded"
          classNameLink="flex-1"
          className="w-full h-10"
        >
          visualizar
        </Button>
        <Button
          variant="rounded"
          className="w-10 h-10 flex items-center justify-center"
          href={gitLink}
        >
          <Image src={github} className="w-5 h-5" alt="logo do github" />
        </Button>
      </div>
    </div>
  );
}
