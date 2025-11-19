// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <nav className="max-w-5xl mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="font-bold text-lg">
          Impulse
        </Link>
        <div className="flex gap-4 text-sm">
          <Link href="/">Accueil</Link>
          <Link href="/qui-sommes-nous">Qui sommes-nous</Link>
          <Link href="/formation">Formation</Link>
          <Link href="/application">Appli</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
