"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItems = () => {
  const pathName = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col gap-5 md:flex-row">
      {headerLinks.map((link, i) => {
        const isActive = pathName === link.route;
        return (
          <li
            className={`${
              isActive && "text-primary-500 border-b border-b-primary-500 w-fit"
            }`}
            key={i}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
