// app/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Logo / Nom */}
        <div>
          <p className="font-semibold text-lg text-[#4186fd]">Impulse</p>
          <p className="text-sm text-gray-500">
            © {year} Impulse. Tous droits réservés.
          </p>
        </div>

        {/* Liens principaux */}
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/" className="text-gray-800 hover:text-[#4186fd] transition">
            Accueil
          </Link>
          <Link href="/qui-sommes-nous" className="text-gray-800 hover:text-[#4186fd] transition">
            Qui sommes-nous
          </Link>
          <Link href="/formation" className="text-gray-800 hover:text-[#4186fd] transition">
            Formation
          </Link>
          <Link href="/appli" className="text-gray-800 hover:text-[#4186fd] transition">
            Appli
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-[#4186fd] transition">
            Contact
          </Link>
        </div>

        {/* Réseaux / contact rapide */}
        <div className="flex flex-col gap-2 text-sm text-gray-500">
          <p>contact@impulse.com</p>
          <div className="flex gap-3">
            <a href="#" aria-label="LinkedIn" className="hover:text-[#4186fd] transition">
              LinkedIn
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#4186fd] transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
