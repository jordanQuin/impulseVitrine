import Link from 'next/link';
import Image from 'next/image';

const primaryColor = '#4186fd';

const FormationCard = ({ title, description, duration, level, imageSrc, link }: {
  title: string;
  description: string;
  duration: string;
  level: string;
  imageSrc: string;
  link: string;
}) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">
    
    <div className="relative h-48 w-full">
      <Image
        src={imageSrc}
        alt={`Image de la formation ${title}`}
        layout="fill"
        objectFit="cover"
        className="transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className={`text-2xl font-bold mb-3 text-gray-800 hover:text-blue-600 transition`}>
        <Link href={link}>{title}</Link>
      </h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <div className="flex items-center gap-1">
          ⏱️ {duration}
        </div>
        <div className="flex items-center gap-1">
          Niveau : **{level}**
        </div>
      </div>

      <Link
        href={link}
        className={`w-full inline-block text-center py-2 px-4 rounded-full font-semibold text-white bg-[${primaryColor}] hover:bg-blue-600 transition duration-300`}
      >
        Voir le programme
      </Link>
    </div>
  </div>
);


export default function FormationPage() {
  return (
    <div className="flex flex-grow flex-col">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-7xl">

        {/* 1. HERO SECTION : Objectif de la page */}
        <section className="text-center py-16 md:py-24 bg-gray-50 rounded-xl mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos Formations pour Dépasser Vos Limites
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Que vous soyez professionnel du sport ou simplement passionné, Impulse vous propose des parcours certifiants et évolutifs pour maîtriser les dernières méthodes de performance.
          </p>
          <Link
            href="/contact"
            className={`bg-white border-2 border-[${primaryColor}] text-[${primaryColor}] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-md`}
          >
            Aide au choix de formation
          </Link>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* 2. LISTE DES FORMATIONS (Grille) */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explorer les Programmes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Exemple 1 : Formation Pro */}
            <FormationCard
              title="Préparateur Physique Certifié"
              description="Devenez un expert de la performance. Maîtrisez la planification, la nutrition et la réathlétisation."
              duration="350h"
              level="Expert"
              imageSrc="/formation-prep-physique.jpg" 
              link="/formation/preparateur-physique"
            />

            {/* Exemple 2 : Formation Loisir/Personnel */}
            <FormationCard
              title="Nutrition Sportive Essentiels"
              description="Apprenez les bases de la diététique et optimisez vos performances et votre bien-être personnel."
              duration="60h"
              level="Débutant"
              imageSrc="/formation-nutrition.jpg" 
              link="/formation/nutrition-essentielle"
            />
            
            {/* Exemple 3 : Formation Courte/Spécialisée */}
            <FormationCard
              title="Atelier Coaching Digital"
              description="Utilisez l'application Impulse à son plein potentiel pour suivre et motiver vos clients à distance."
              duration="20h"
              level="Intermédiaire"
              imageSrc="/formation-digital.jpg" 
              link="/formation/coaching-digital"
            />

          </div>
        </section>

        <hr className="my-10 border-gray-200" />
        
        {/* 3. SECTION CTA FINAL / INFO CLÉS */}
        <section className="py-16 bg-[${primaryColor}]/10 rounded-xl mb-12 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                Des questions sur les financements ?
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
                Nos formations sont éligibles au CPF, Pôle Emploi et autres dispositifs. Contactez notre équipe pour une étude personnalisée de votre dossier.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className={`bg-[${primaryColor}] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-600 transition duration-300`}
              >
                Je demande un devis
              </Link>
              <Link
                href="/faq"
                className="bg-white text-gray-800 border border-gray-300 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 transition duration-300"
              >
                Consulter la FAQ
              </Link>
            </div>
        </section>

      </div>
    </div>
  );
}