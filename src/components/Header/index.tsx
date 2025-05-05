"use client";
import { HEADER_ITEMS } from "@/constants";
import { HeaderProps } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const Header: FC<HeaderProps> = () => {
  const path = usePathname();

  return (
    <header className="flex flex-row justify-center w-[100%] bg-sky-300 p-5 gap-4">
      {HEADER_ITEMS.map((item: string, index: number) => (
        <Link key={index} href={`/${index === 0 ? "" : item}`}>
          <h3
            className={`text-xl text-white  ${
              path.includes("/" + item) || (path === "/" && item === "Home")
                ? "text-blue-700 scale-110"
                : "hover:text-blue-400 hover:scale-105"
            }`}
          >
            {item}
          </h3>
        </Link>
      ))}
    </header>
  );
};

export default Header;
