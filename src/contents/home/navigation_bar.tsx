"use client";

import { logo } from "@/assets";
import Image from "next/image";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { NavbarItem } from "@/components/home/navbar_item";
import { useState } from "react";

export const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav>
      <div className="flex h-24 w-full items-center justify-between px-8">
        <Image src={logo.board} alt="logo" />
        <button onClick={() => setExpanded(true)}>
          <BiMenuAltRight size={30} />
        </button>
      </div>
      <div
        className={`fixed top-0 flex h-screen w-full flex-col gap-8 bg-background px-8 py-12 transition-transform duration-300 ${expanded ? "translate-x-0" : "translate-x-full"}`}
      >
        <button className="self-end" onClick={() => setExpanded(false)}>
          <BiX size={40} />
        </button>
        <div className="flex h-full flex-col justify-between">
          <ul className="flex flex-col gap-6">
            <NavbarItem label="Products" section="features" />
            <NavbarItem label="Apps & games" section="apps" />
            <NavbarItem label="Features" section="features" />
            <NavbarItem label="Support" section="support" />
            <NavbarItem label="About" section="about" />
          </ul>
          <Image src={logo.board} alt="logo" className="self-center" />
        </div>
      </div>
    </nav>
  );
};
