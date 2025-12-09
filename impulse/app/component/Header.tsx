import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-lg"> 
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 sm:px-6 lg:px-8">
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
            <button className="text-gray-600 hover:text-[#4186fd]">
                Menu
            </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const accentColor = '#4186fd';
  
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