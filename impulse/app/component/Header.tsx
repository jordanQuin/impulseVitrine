// app/components/Header.tsx
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gray-200 shadow-md">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Impulse Logo"
            width={96} // Reduced from 120 to 96 (20% reduction)
            height={32} // Reduced from 40 to 32 (20% reduction)
            priority
          />
        </Link>
        <div className="flex gap-4 text-7px">
          <Link
            href="/"
            className="relative text-gray-800 hover:text-[#4186fd] transition group"
          >
            Accueil
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#4186fd] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/qui-sommes-nous"
            className="relative text-gray-800 hover:text-[#4186fd] transition group"
          >
            Qui sommes-nous
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#4186fd] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/formation"
            className="relative text-gray-800 hover:text-[#4186fd] transition group"
          >
            Formation
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#4186fd] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/application"
            className="relative text-gray-800 hover:text-[#4186fd] transition group"
          >
            Appli
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#4186fd] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link
            href="/contact"
            className="relative text-gray-800 hover:text-[#4186fd] transition group"
          >
            Contact
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-[#4186fd] transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
