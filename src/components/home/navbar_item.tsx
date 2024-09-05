"use client";

import { Link } from "react-scroll";

type NavbarItemProps = {
  label: string;
  section: string;
};
export const NavbarItem = ({ label, section }: NavbarItemProps) => {
  return (
    <li className="cursor-pointer text-3xl font-bold">
      <Link to={section} smooth={true}>
        {label.toUpperCase()}
      </Link>
    </li>
  );
};
