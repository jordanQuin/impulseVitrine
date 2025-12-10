import Image from 'next/image';
import Link from 'next/link';

export default function QuiSommesNousPage() {
  const primaryColor = '#4186fd';

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl pt-12">
        
        {/* NOUVELLE SECTION : L'Entreprise et ses Services (Textuel/Détaillé) */}
        <section className="pb-16 pt-8 mb-12">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 text-center mb-4">
                Qui sommes-nous : L'ADN d'Impulse
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-gray-50 p-8 rounded-xl shadow-lg">
                
                {/* Colonne 1 : Description de l'Entreprise et de la Mission */}
                <div>
                    <span className={`text-sm font-semibold uppercase text-[${primaryColor}]`}>Notre Raison d'Être</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                        Nous fusionnons l'Excellence Sportive et le Développement Professionnel.
                    </h2>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Impulse est un organisme de formation novateur, fondé sur la conviction que la rigueur, la résilience et l'engagement du monde sportif sont les meilleurs leviers pour la réussite professionnelle. Nous ne formons pas seulement des compétences, nous insufflons une véritable <strong>culture de la performance</strong>.
                    </p>
                    <p className="text-gray-700 italic leading-relaxed">
                        Notre mission est de rendre l'expertise de haut niveau accessible à tous, que ce soit pour faire progresser une carrière, améliorer la gestion d'équipe ou optimiser son bien-être personnel.
                    </p>
                </div>

                {/* Colonne 2 : Services Clés (Liste détaillée, style minimaliste) */}
                <div>
                    <span className={`text-sm font-semibold uppercase text-[${primaryColor}]`}>Nos Services Clés</span>
                    <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-6">
                        Ce que nous apportons concrètement
                    </h2>
                    
                    {/* UTILISATION DE BULLET POINTS CLASSIQUES ET TAILWIND POUR L'ESPACEMENT */}
                    <ul className="space-y-4 text-gray-700 text-lg list-disc list-inside ml-4">
                        <li className="pl-2">
                            <strong>Formations Professionnelles Certifiantes :</strong> Parcours reconnus dans le domaine du coaching, de la nutrition et de la préparation physique. <Link href="/formation" className={`font-medium text-[${primaryColor}] hover:underline ml-1`}>Voir les programmes.</Link>
                        </li>
                        <li className="pl-2">
                            <strong>Application et Réseau Social :</strong> Notre plateforme dédiée connecte les membres, permet le suivi de formation à distance et facilite le réseautage entre professionnels et adhérents. <Link href="/appli" className={`font-medium text-[${primaryColor}] hover:underline ml-1`}>Découvrir l'App.</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="text-center mt-12">
                <Link
                    href="/contact"
                    className={`bg-[${primaryColor}] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-blue-600 transition`}
                >
                    Contactez-nous pour une étude personnalisée
                </Link>
            </div>
        </section>

        <hr className="my-10 border-gray-200" />
        
        {/* 4. PRÉSENTATION DE L'ÉQUIPE (Code original de l'utilisateur) */}
        <section className="py-12 mb-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                Rencontrez les Experts derrières Impulse
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
                Impulse est dirigée par des professionnels passionnés : des coachs certifiés, des experts en nutrition et des pédagogues.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                    <Image src="/guillaume.png" alt="Guillaume" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Guillaume</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeur web</p>
                </div>
                <div className="text-center">
                    <Image src="/anthony.png" alt="Anthony" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Anthony</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeur mobile</p>
                </div>
                 <div className="text-center">
                    <Image src="/manon.png" alt="Manon" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Manon</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Community manager</p>
                </div>
                <div className="text-center">
                    <Image src="/Ghaith.png" alt="Ghaith" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Ghaith</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeur web</p>
                </div>
                <div className="text-center">
                    <Image src="/Rawan.png" alt="Rawan" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Rawan</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeuse backend</p>
                </div>
                <div className="text-center">
                    <Image src="/Quentin.png" alt="Quentin" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Quentin</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Chef de projet</p>
                </div>
                <div className="text-center">
                    <Image src="/Marianne.png" alt="Marianne" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Marianne</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Chargée événementiel</p>
                </div>
                <div className="text-center">
                    <Image src="/Nicolas.png" alt="Nicolas" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Nicolas</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeur mobile</p>
                </div>
                <div className="text-center">
                    <Image src="/Jordan.png" alt="Jordan" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Jordan</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Développeur web</p>
                </div>
                <div className="text-center">
                    <Image src="/Andrea.png" alt="Andrea" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Andrea</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Chargée marketing</p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}