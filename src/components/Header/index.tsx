"use client";
import { HEADER_ITEMS } from "@/constants";
import { HeaderProps } from "@/types";
import { getRandomUser } from "@/utils/getRandomUser";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useEffect, useState } from "react";

const Header: FC<HeaderProps> = () => {
  const path = usePathname();

  const [isEligible, setIsEligible] = useState<boolean>(false);

  useEffect(() => {
    getRandomUser();

    const userCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("auth_user"))
      ?.split("=")[1];

    if (userCookie) {
      const user = JSON.parse(decodeURIComponent(userCookie));
      console.log(user.id);
      if (user?.id <= 5) {
        setIsEligible(true);
      }
    }
  }, []);

  const menuItems = isEligible
    ? HEADER_ITEMS.filter((item) => item !== "setting")
    : HEADER_ITEMS;

  return (
    <header className="flex flex-row justify-center w-[100%] bg-sky-300 p-5 gap-4">
      {menuItems.map((item: string, index: number) => (
        <Link key={index} href={`/${item}`}>
          <h3
            className={`text-xl text-white  ${
              path === "/" + item
                ? "text-indigo-800 scale-110"
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
