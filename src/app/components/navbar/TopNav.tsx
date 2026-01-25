"use client";

import React from "react";
import {Link as HLink} from "@heroui/react";
import { Surface, Button } from "@heroui/react";
import { GiSelfLove } from "react-icons/gi";

import { NavLink } from "./NavLink";
// import { UserMenu } from "./UserMenu";
// import { FiltersWrapper } from "./FiltersWrapper";



export function TopNav() {
  const session = true; // or false
  const links = [
  { href: "/matches", label: "Matches" },
  { href: "/lists", label: "Lists" },
  { href: "/messages", label: "Messages" },
  ];

  const userInfo = null;
  return (
    <>
      <Surface
        as="header"
        className="
          w-full
          bg-gradient-to-r from-pink-400 via-red-400 to-pink-600
          px-6 py-4
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Brand */}
          <HLink
            href="/"
            className="flex items-center gap-2 text-white"
          >
            <GiSelfLove size={40} className="text-gray-200" />
            <span className="text-3xl font-bold uppercase text-gray-200">
              MatchMe
            </span>
          </HLink>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8">
            {session ? (
              links.map((item) => (
                <NavLink
                  key={item.href}
                  href={item.href}
                  label={item.label}
                />
              ))
            ) : null}

          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            {userInfo ? (
              <UserMenu userInfo={userInfo} />
            ) : (
              <>
                <Button
                  as={HLink}
                  href="/login"
                  variant="secondary"
                  className="text-white border-white"
                >
                  Login
                </Button>

                <Button
                  as={HLink}
                  href="/register"
                  variant="secondary"
                  className="text-white border-white"
                >
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </Surface>

      {/* Filters stay exactly like before */}
      {/* <FiltersWrapper /> */}
    </>
  );
}
