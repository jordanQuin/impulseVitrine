import Image from 'next/image';
import Link from 'next/link';

const primaryColor = '#4186fd';

const BenefitCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="text-center p-6">
    <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-2xl bg-blue-100 text-[${primaryColor}] mb-4 text-3xl`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function AppliPage() {

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        
        {/* 1. HERO SECTION : La Communauté Impulse */}
        <section className="py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mt-[-8rem] mb-2">
                    Impulse : Votre réseau social <span className={`text-[${primaryColor}]`}>de la performance.</span>
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                    Connectez-vous à la communauté des professionnels, suivez vos athlètes préférés et accédez à vos ressources de formation où que vous soyez.
                </p>
                
                <div className="flex justify-center gap-20 items-center">
                    <a href="#download-link-ios" aria-label="Télécharger sur l'App Store">
                        <Image src="/apple-store.png" alt="Disponible sur l'App Store" width={70} height={45} />
                    </a>
                    <a href="#download-link-android" aria-label="Télécharger sur Google Play">
                        <Image src="/google-play.png" alt="Disponible sur Google Play" width={220} height={45} />
                    </a>
                </div>
            </div>

            <div className="relative mx-auto max-w-sm mt-[-2rem]">
                <Image src="/mockup1.png" alt="Interface principale de l'application Impulse" width={350} height={700} className="rounded-[30px] shadow-2xl border-8 border-gray-900 rotate-3 transform hover:rotate-0 transition duration-500"/>
            </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* 2. BÉNÉFICES CLÉS (Le "Pourquoi" de l'App) */}
        <section className="py-16 bg-gray-50 rounded-xl mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Les 3 raisons d'être connecté
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <BenefitCard
              icon={<span>🤝</span>} 
              title="Réseautage Certifié"
              description="Trouvez des professionnels qualifiés, des mentors ou des partenaires d'entraînement directement dans la communauté Impulse."
            />
            <BenefitCard
              icon={<span>📚</span>} 
              title="Accès illimité aux modules"
              description="Retrouvez toutes les ressources de vos formations Impulse, vos quizz et vos rappels de révision où et quand vous le souhaitez."
            />
            <BenefitCard
              icon={<span>💬</span>}
              title="Interaction directe Pro/Adhérent"
              description="Communiquez en temps réel avec vos coachs, posez vos questions à la communauté et partagez vos réussites."
            />
          </div>
        </section>
        
        {/* 3. SHOWCASE : Fonctionnalité en détail (Image + Texte) */}
        <section className="py-16">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
                Le Coeur de l'Expérience Impulse
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                <div className="order-2 md:order-1">
                    <span className={`text-sm font-semibold uppercase ${primaryColor}`}>Pour les Pros</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                        Gérez vos clients et partagez votre expertise.
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Grâce à votre profil certifié, accédez à un tableau de bord pour suivre les progrès de vos clients, partager des exercices personnalisés et vous positionner comme un expert reconnu par la communauté.
                    </p>
                    <Link href="/qui-sommes-nous" className={`text-sm font-medium text-[${primaryColor}] hover:underline`}>
                        En savoir plus sur la certification Impulse &rarr;
                    </Link>
                </div>
                <div className="order-1 md:order-2">
                    <Image src="/app-screenshot-pro.png" alt="Interface professionnelle" width={500} height={300} className="rounded-xl shadow-xl border border-gray-200" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <Image src="/app-screenshot-feed.png" alt="Fil de discussion communautaire" width={500} height={300} className="rounded-xl shadow-xl border border-gray-200" />
                </div>
                <div className="order-1 md:order-2">
                    <span className={`text-sm font-semibold uppercase ${primaryColor}`}>Pour tous</span>
                    <h3 className="text-3xl font-bold text-gray-800 mt-2 mb-4">
                        Un fil d'actualité pour rester inspiré et informé.
                    </h3>
                    <p className="text-gray-600 mb-4">
                        Partagez vos victoires, posez des questions complexes et découvrez les dernières actualités du monde du sport et des formations. La bienveillance et l'entraide sont au cœur de notre communauté.
                    </p>
                    <Link href="/contact" className={`text-sm font-medium text-[${primaryColor}] hover:underline`}>
                        Une question sur la communauté ? Contactez-nous &rarr;
                    </Link>
                </div>
            </div>
        </section>

        {/* 4. FINAL CTA : Télécharger l'App */}
        <section className="py-12 bg-gray-900 rounded-xl mb-12 shadow-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
                Prêt à rejoindre le mouvement ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
                L'application Impulse est gratuite et indispensable pour tous les membres de la communauté.
            </p>
            <div className="flex justify-center gap-6">
                <a href="#download-link-ios" aria-label="Télécharger sur l'App Store">
                    [Icône App Store]
                    <Image src="/apple-store.png" alt="Disponible sur l'App Store" width={60} height={50} />
                </a>
                <a href="#download-link-android"  aria-label="Télécharger sur Google Play">
                    [Icône Google Play]
                    <Image src="/google-play.png" className="bg-white p-4 rounded-xl" alt="Disponible sur Google Play" width={170} height={70} />
                </a>
            </div>
        </section>

      </div>
    </div>
  );
}