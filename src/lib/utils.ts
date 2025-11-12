import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import linkedin from "../../public/social/icons8-linkedin-50.png";
import github from "../../public/social/github-white.png";
import wpp from "../../public/social/icons8-whatsapp-64.png";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const birthDate = new Date("1995-10-06");
const today = new Date();
const ageReturn = today.getFullYear() - birthDate.getFullYear();
export const checkingBirthday =
  today.getMonth() > birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() &&
    today.getDate() >= birthDate.getDate())
    ? ageReturn
    : ageReturn - 1;

export type StackName =
  | "cssEX"
  | "htmlEX"
  | "python"
  | "django"
  | "flask"
  | "js"
  | "nextEX"
  | "nodeEX"
  | "ts"
  | "prismaEX"
  | "prisma"
  | "postgresqlEX"
  | "postgreesql"
  | "reactEX"
  | "sass"
  | "expressEX"
  | "tailwind"
  | "next"
  | "supabase"
  | "vite"
  | "bulma"
  | "firebase"
  | "react";

export const socialMediaContents = [
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/antoniornneto/",
    source: linkedin,
    title: "Linkedin",
  },
  {
    id: "github",
    href: "https://github.com/antoniornneto",
    source: github,
    title: "Github",
  },
  {
    id: "whatsapp",
    href: "https://api.whatsapp.com/send/?phone=5527993118171&text&type=phone_number&app_absent=0",
    source: wpp,
    title: "Whatsapp",
  },
];
