import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  const primaryColor = '#4186fd';

  const PillarCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100 transform hover:scale-[1.02]">
      <div className={`w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 ${primaryColor} mb-4 text-2xl`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* 1. SECTION HERO */}
        <section className="relative md:pt-26 md:pb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="ml-6 text-center md:text-left">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Boostez votre carrière <span className={`text-[${primaryColor}]`}>par le sport.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Impulse vous ouvre la voie vers l'excellence professionnelle et personnelle grâce à des formations ciblées et innovantes.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                <Link
                  href="/formation"
                  className={`bg-[${primaryColor}] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105`}
                >
                  Découvrir nos formations
                </Link>
                <Link
                  href="/qui-sommes-nous"
                  className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-50 transition duration-300"
                >
                  Qui sommes-nous ?
                </Link>
              </div>
            </div>

            {/* Image (Placeholder) */}
            <div className="hidden md:block">
              {/* Image de sport ou de succès professionnel */}
              <Image
                src="/sport-home.png" 
                alt="Formations sportives Impulse"
                width={500}
                height={500}
                className="rounded-xl shadow-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. SECTION VALEURS / PILIERS */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Pourquoi choisir Impulse ?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre approche combine l'expertise sportive et la pédagogie moderne pour garantir votre succès.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PillarCard
              icon={<span className={`text-[${primaryColor}]`}>⚡</span>}
              title="Expertise Certifiée"
              description="Des formateurs qualifiés et des certifications reconnues dans le domaine du sport et du bien-être."
            />
            <PillarCard
              icon={<span className={`text-[${primaryColor}]`}>🎯</span>} 
              title="Apprentissage Personnalisé"
              description="Des parcours adaptés à votre niveau et à vos objectifs professionnels ou personnels spécifiques."
            />
            <PillarCard
              icon={<span className={`text-[${primaryColor}]`}>📱</span>} 
              title="Application Connectée"
              description="Accédez à vos ressources, suivez vos progrès et restez connecté à la communauté via notre appli dédiée."
            />
          </div>
        </section>

        {/* 3. SECTION CTA SECONDAIRE (Bas de page) */}
        <section className="py-16 bg-gray-50 rounded-xl mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Prêt à donner l'Impulsion ?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Regardez nos formations ou téléchargez notre application
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/formation" 
                className={`bg-[${primaryColor}] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300`}
              >
                Voir nos formations
              </Link>
              <Link
                href="/contact"
                className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
              >
                Application
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}