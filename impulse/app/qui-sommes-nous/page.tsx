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
                        Impulse est un organisme de formation novateur, fondé sur la conviction que la rigueur, la résilience et l'engagement du monde sportif sont les meilleurs leviers pour la réussite professionnelle. Nous ne formons pas seulement des compétences, nous insufflons une véritable **culture de la performance**.
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
                            **Formations Professionnelles Certifiantes :** Parcours reconnus dans le domaine du coaching, de la nutrition et de la préparation physique. <Link href="/formation" className={`font-medium text-[${primaryColor}] hover:underline ml-1`}>Voir les programmes.</Link>
                        </li>
                        <li className="pl-2">
                            **Application et Réseau Social :** Notre plateforme dédiée connecte les membres, permet le suivi de formation à distance et facilite le réseautage entre professionnels et adhérents. <Link href="/appli" className={`font-medium text-[${primaryColor}] hover:underline ml-1`}>Découvrir l'App.</Link>
                        </li>
                        <li className="pl-2">
                            **Consulting et Expertise :** Offre de services de coaching sur-mesure pour les entreprises souhaitant intégrer la méthodologie de performance sportive à leurs équipes.
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
                    <Image src="/team-member-1.jpg" alt="Alexandre Dubois" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Alexandre Dubois</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Fondateur & Expert Coaching</p>
                </div>
                 <div className="text-center">
                    <Image src="/team-member-2.jpg" alt="Sophie Leclerc" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Sophie Leclerc</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Directrice Pédagogique</p>
                </div>
                 <div className="text-center">
                    <Image src="/team-member-3.jpg" alt="Marc Vidal" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Marc Vidal</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Responsable Relation Client</p>
                </div>
                 <div className="text-center">
                    <Image src="/team-member-4.jpg" alt="Julie Fournier" width={150} height={150} className="rounded-full mx-auto mb-3 object-cover" />
                    <h4 className="font-semibold text-lg">Julie Fournier</h4>
                    <p className={`text-sm text-[${primaryColor}]`}>Nutritionniste Sportive</p>
                </div>
            </div>
            
             <div className="text-center mt-12">
                <Link
                    href="/carrieres"
                    className="inline-flex items-center text-lg font-medium text-gray-800 hover:text-blue-600 transition"
                >
                    Voir nos opportunités de carrière &rarr;
                </Link>
            </div>
        </section>

      </div>
    </div>
  );
}