"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Link as HLink } from "@heroui/react";

type Props ={
  href: string;
  label:string;
};

export function NavLink({
  href,
  label,
}: Props) {
  const pathname = usePathname();
  console.log("pathname :", pathname);
  return (
    <HLink
      as={Link}
      href={href}
      className="text-white text-lg hover:text-yellow-200 transition"
    >
      {label}
    </HLink>
  );
}
