import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  const accentColor = "text-[#4186fd]";

  return (
    <footer className="bg-gray-800 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-700 pb-6">
          
          {/* Colonne 1 : Info de l'entreprise */}
          <div>
            <p className={`font-extrabold text-xl ${accentColor}`}>Impulse</p>
            <p className="mt-1 text-sm text-gray-400">
              Formations professionnelles et personnelles liées au sport.
            </p>
            
            {/* Contact rapide */}
            <div className="mt-3 flex flex-col gap-0.5 text-sm text-gray-300">
              <a href="mailto:impulse.ydays@gmail.com" className="hover:text-white transition">
                {/* [Icône Mail] */} impulse.ydays@gmail.com
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div>
            <h4 className="font-semibold text-base mb-2 text-white">Navigation</h4>
            <div className="flex flex-col space-y-1.5 text-sm text-gray-400">
              <Link href="/" className="hover:text-white transition">Accueil</Link>
              <Link href="/qui-sommes-nous" className="hover:text-white transition">Qui sommes-nous</Link>
              <Link href="/formation" className="hover:text-white transition">Nos Formations</Link>
              <Link href="/application" className="hover:text-white transition">L'Application</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>

          {/* Colonne 3 : Informations Légales */}
          <div>
            <h4 className="font-semibold text-base mb-2 text-white">Ressources & Légal</h4>
            <div className="flex flex-col space-y-1.5 text-sm text-gray-400">
              <Link href="/mentions-legales" className="hover:text-white transition">Mentions Légales</Link>
              <Link href="/politique-confidentialite" className="hover:text-white transition">Politique de Confidentialité</Link>
            </div>
          </div>
          
          {/* Colonne 4 : Réseaux Sociaux */}
          <div>
            <h4 className="font-semibold text-base mb-2 text-white">Suivez-nous</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
                {/* [Icône LinkedIn] */}
                LinkedIn
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-white transition">
                {/* [Icône Instagram] */}
                Instagram
              </a>
            </div>
          </div>

        </div>

        {/* Section Copyright */}
        <div className="pt-4 text-center text-sm text-gray-500">
          <p>
            © {year} Impulse. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}