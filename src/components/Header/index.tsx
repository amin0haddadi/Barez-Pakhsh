"use client";
import { HEADER_ITEMS } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const path = usePathname();

  return (
    <header className="flex flex-row justify-center w-[100%] bg-sky-400 p-5 gap-4">
      {HEADER_ITEMS.map((item: string, index: number) => (
        <Link key={index} href={`/${item}`}>
          <h3
            className={`text-xl text-white  ${
              path === "/" + item
                ? "text-blue-800 scale-110"
                : "hover:text-blue-500 hover:scale-105"
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
