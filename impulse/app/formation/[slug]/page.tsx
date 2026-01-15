"use client";

import { useParams } from "next/navigation";
import { FaClock, FaUsers, FaCalendarAlt } from "react-icons/fa";

const formations = [
  {
    slug: "initiation-nextjs",
    title: "Initiation à Next.js",
    level: "Débutant",
    duration: "2 jours",
    shortDescription:
      "Découvre les bases de Next.js et apprends à créer ton premier site moderne et performant.",
    category: "Développement web",
    nextSession: "12–13 février 2026",
  },
  {
    slug: "front-end-moderne",
    title: "Front-end moderne avec React & Tailwind",
    level: "Intermédiaire",
    duration: "3 jours",
    shortDescription:
      "Maîtrise les composants réactifs et une mise en page responsive avec Tailwind CSS.",
    category: "UI / UX & Front-end",
    nextSession: "20–22 mars 2026",
  },
  {
    slug: "architecture-nextjs",
    title: "Architecture avancée avec Next.js",
    level: "Avancé",
    duration: "2 jours",
    shortDescription:
      "Structure ton application, optimise les performances et prépare-la pour la scalabilité.",
    category: "Architecture & Performance",
    nextSession: "10–11 avril 2026",
  },
];

export default function FormationDetailPage() {
  const params = useParams();
  const slug = params?.slug;
  const formation = formations.find((f) => f.slug === slug);

  if (!formation) {
    return (
      <section className="max-w-4xl mx-auto py-12 px-4 text-center text-gray-500">
        Formation non trouvée 😅
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto py-12 px-4 space-y-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {formation.title}
          </h1>
          <p className="text-gray-700 mb-4">{formation.shortDescription}</p>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
              {formation.category}
            </span>
            <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
              Niveau : {formation.level}
            </span>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
            Demander le programme
          </button>
        </div>
        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-gray-700">
            <FaClock /> <span>{formation.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <FaCalendarAlt /> <span>{formation.nextSession}</span>
          </div>
        </div>
      </div>

      {/* Objectifs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Objectifs pédagogiques</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Comprendre les concepts clés de Next.js</li>
          <li>Créer une application complète de A à Z</li>
          <li>Appliquer les bonnes pratiques de performance et architecture</li>
          <li>Maîtriser le routage et les layouts modernes</li>
        </ul>
      </section>

      {/* Programme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Programme détaillé</h2>
        <div className="border-l-2 border-blue-200 pl-6 flex flex-col gap-6">
          <div className="relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">Jour 1</h3>
            <p className="text-gray-700">Introduction à Next.js et App Router</p>
          </div>
          <div className="relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">Jour 2</h3>
            <p className="text-gray-700">Pages, layouts, navigation et API</p>
          </div>
          <div className="relative">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
            <h3 className="font-semibold text-gray-800">Jour 3</h3>
            <p className="text-gray-700">Déploiement et bonnes pratiques</p>
          </div>
        </div>
      </section>

      {/* Public & prérequis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">Public & prérequis</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-3 text-gray-700">
            <FaUsers /> <span>Développeurs avec bases JS ou React</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <FaClock /> <span>Disponible à distance ou présentiel</span>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <div className="text-center">
        <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
          S’inscrire ou demander un devis
        </button>
      </div>
    </section>
  );
}


