"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/formation", label: "Formation" },
  { href: "/application", label: "Appli" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-white shadow-lg"> 
      <nav className="relative max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Impulse Logo"
            width={110} 
            height={36} 
            priority
          />
        </Link>

        <div className="hidden md:flex items-center space-x-6 text-sm">
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/qui-sommes-nous">Qui sommes-nous</NavLink>
          <NavLink href="/formation">Formation</NavLink>
          <NavLink href="/application">Appli</NavLink>
          
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-semibold text-white bg-[#4186fd] rounded-full hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Contactez-nous
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((current) => !current)}
            className="cursor-pointer text-gray-600 hover:text-[#4186fd] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4186fd] rounded"
          >
            Menu
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute z-50 top-full inset-x-0 mt-2 rounded-lg bg-white shadow-lg border border-gray-200 md:hidden"
        >
          <div className="flex flex-col gap-2 px-4 py-4 text-sm">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-[#f1f5ff] hover:text-[#1d4ed8]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-white bg-[#4186fd] text-center font-semibold hover:bg-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contactez-nous
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative text-gray-700 font-medium hover:text-blue-600 transition group"
    >
      {children}
      <span className="absolute left-0 bottom-[-4px] w-0 h-[3px] bg-blue-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
    </Link>
  );
}