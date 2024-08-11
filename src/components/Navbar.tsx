"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

export default function Navbar() {
  const navLinks = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  const currentPath = usePathname();

  return (
    <nav className="flex space-x-10 border-b mb-5 px-5 py-5 items-center">
      <Link href="/">
        <AiFillBug className="text-2xl" />
      </Link>
      <ul className="flex space-x-6">
        {navLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className={classnames({
                "hover:no-underline": link.href === currentPath,
                "opacity-50 hover:underline": link.href !== currentPath,
                "transition-colors font-medium": true,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
