import Link from "next/link";
import { ReactNode } from "react";

type Button = {
  children: ReactNode;
  href?: string;
  key?: string;
  target?: "_self" | "_blank";
  type: "normal" | "rounded";
};

export const Button = ({
  children,
  href,
  key,
  target = "_self",
  type,
}: Button) => {
  if (href) {
    return (
      <Link target={target} href={href}>
        <button
          key={key}
          className={`border-[1px] border-[#9C5300] rounded-full max-[425px]:min-w-40 bg-[#FFFFFF12] hover:bg-[#DD970080] hover:border-[#E59500] transition-all ease-out duration-300 active:bg-[#DD970059] active:border-[#855600] ${
            type === "rounded" ? "p-2" : "px-6 py-2"
          }`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`border-[1px] border-[#9C5300] rounded-full px-6 py-2 bg-[#FFFFFF12] hover:bg-[#DD970080] hover:border-[#E59500] transition-all ease-out duration-300 active:bg-[#DD970059] active:border-[#855600]`}
      >
        {children}
      </button>
    );
  }
};
