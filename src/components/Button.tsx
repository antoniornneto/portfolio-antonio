import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Button = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: string;
  key?: string;
  target?: "_self" | "_blank";
  variant: "normal" | "rounded";
  className?: string;
  classNameLink?: string;
};

export const Button = ({
  children,
  href,
  key,
  target = "_self",
  variant,
  className,
  classNameLink,
}: Button) => {
  if (href) {
    return (
      <Link target={target} href={href} className={classNameLink}>
        <button
          key={key}
          className={`border-[1px] border-[#9C5300] rounded-full bg-[#FFFFFF12] hover:bg-[#DD970080] hover:border-[#E59500] transition-all ease-out duration-300 active:bg-[#DD970059] active:border-[#855600] ${
            variant === "rounded" ? "p-2" : "px-6 py-2"
          } ${className}`}
        >
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        className={`border-[1px] border-[#9C5300] rounded-full bg-[#FFFFFF12] hover:bg-[#DD970080] hover:border-[#E59500] transition-all ease-out text-center duration-300 active:bg-[#DD970059] active:border-[#855600] ${className}`}
      >
        {children}
      </button>
    );
  }
};
