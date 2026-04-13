"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyLinks = ({ link }) => {
  const { href } = link;
  const pathName = usePathname();
  return (
    <Link
      className={`mr-3 p-1 px-1 rounded-md ${pathName === href ? "text-white bg-[#244D3F]" : ""}`}
      href={link.href}
    >
      <p className="flex items-center gap-1">
        {link.icon}
        {link.text}
      </p>
    </Link>
  );
};

export default MyLinks;
