"use client";

import Link from 'next/link';
import Image from 'next/image';

const primaryColor = '#4186fd';

const formations = [
  {
    slug: "coach-fitness-debutant",
    title: "Coach Fitness Débutant",
    category: "Fitness & Coaching",
    description:
      "Apprends les bases du coaching sportif, de la musculation et des méthodes d'encadrement.",
    duration: "3 jours",
    level: "Débutant",
    image: "/formation-fitness.jpg",
  },
  {
    slug: "coach-nutrition-sportive",
    title: "Coach Nutrition Sportive",
    category: "Nutrition & Santé",
    description:
      "Maîtrise l'alimentation sportive, le suivi nutritionnel et l’optimisation de la performance.",
    duration: "2 jours",
    level: "Intermédiaire",
    image: "/formation-nutrition.jpg",
  },
  {
    slug: "coach-preparation-physique",
    title: "Préparateur Physique Avancé",
    category: "Performance & Préparation",
    description:
      "Deviens expert de la performance physique, de la prévention et de la réathlétisation.",
    duration: "5 jours",
    level: "Avancé",
    image: "/formation-prep-physique.jpg",
  },
];


const FormationCard = ({ f }: { f: typeof formations[number] }) => (
  <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-gray-100">

    <div className="relative h-48 w-full">
      <Image
        src={f.image}
        alt={f.title}
        layout="fill"
        objectFit="cover"
        className="transition duration-500 group-hover:scale-105"
      />
    </div>

    <div className="p-6">
      <span className="inline-block text-xs py-1 px-3 rounded-full bg-blue-50 text-blue-700">
        {f.category}
      </span>

      <h3 className="text-2xl font-bold text-gray-800 mt-3 mb-3">
        <Link href={`/formation/${f.slug}`} className="hover:text-blue-600">
          {f.title}
        </Link>
      </h3>

      <p className="text-gray-600 mb-4 text-sm line-clamp-3">
        {f.description}
      </p>

      <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
        <div>⏱️ {f.duration}</div>
        <div>Niveau : {f.level}</div>
      </div>

      <Link
        href={`/formation/${f.slug}`}
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

        {/* 🟦 HERO */}
        <section className="text-center py-16 md:py-24 bg-gray-50 rounded-xl mt-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nos Formations Professionnelles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Montez en compétences avec des programmes créés par des experts,
            adaptés aux développeurs modernes.
          </p>

          <Link
            href="/contact"
            className={`bg-white border-2 border-[${primaryColor}] text-[${primaryColor}] px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300 shadow-md`}
          >
            Aide au choix de formation
          </Link>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* 🟦 GRID des formations */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Explorer les Programmes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {formations.map((f) => (
              <FormationCard key={f.slug} f={f}/>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
