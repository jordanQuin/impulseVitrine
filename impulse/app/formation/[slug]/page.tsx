"use client";

import { useParams } from "next/navigation";
import { FaClock, FaUsers, FaCalendarAlt } from "react-icons/fa";

/* =========================
   Données formations
========================= */

type ProgrammeItem = {
  day: string;
  content: string;
};

type Formation = {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  level: string;
  duration: string;
  nextSession: string;
  objectifs: string[];
  programme: ProgrammeItem[];
  public: string;
  prerequis: string;
};

const formations: Formation[] = [
  {
    slug: "coach-fitness-debutant",
    title: "Coach Fitness Débutant",
    shortDescription:
      "Apprends les bases du coaching sportif, de la musculation et des méthodes d'encadrement.",
    category: "Fitness & Coaching",
    level: "Débutant",
    duration: "3 jours",
    nextSession: "Prochaine session à venir",

    objectifs: [
      "Comprendre les bases du coaching sportif",
      "Maîtriser les mouvements fondamentaux de musculation",
      "Encadrer des pratiquants en toute sécurité",
      "Construire des séances adaptées aux débutants",
    ],

    programme: [
      {
        day: "Jour 1",
        content: "Bases de l’anatomie, rôle du coach et sécurité",
      },
      {
        day: "Jour 2",
        content: "Musculation, mouvements fondamentaux et techniques",
      },
      {
        day: "Jour 3",
        content: "Création de programmes et mise en situation pratique",
      },
    ],

    public: "Personnes souhaitant devenir coach fitness",
    prerequis: "Aucun prérequis",
  },

  {
    slug: "coach-nutrition-sportive",
    title: "Coach Nutrition Sportive",
    shortDescription:
      "Maîtrise l'alimentation sportive, le suivi nutritionnel et l’optimisation de la performance.",
    category: "Nutrition & Santé",
    level: "Intermédiaire",
    duration: "2 jours",
    nextSession: "Prochaine session à venir",

    objectifs: [
      "Comprendre les bases de la nutrition sportive",
      "Adapter l’alimentation aux objectifs sportifs",
      "Mettre en place un suivi nutritionnel",
      "Optimiser la récupération et la performance",
    ],

    programme: [
      {
        day: "Jour 1",
        content: "Macronutriments, micronutriments et besoins sportifs",
      },
      {
        day: "Jour 2",
        content: "Plans alimentaires, compléments et cas pratiques",
      },
    ],

    public: "Coachs sportifs et passionnés de nutrition",
    prerequis: "Bases en entraînement sportif",
  },

  {
    slug: "coach-preparation-physique",
    title: "Préparateur Physique Avancé",
    shortDescription:
      "Deviens expert de la performance physique, de la prévention et de la réathlétisation.",
    category: "Performance & Préparation",
    level: "Avancé",
    duration: "5 jours",
    nextSession: "Prochaine session à venir",

    objectifs: [
      "Optimiser la performance physique des athlètes",
      "Prévenir les blessures",
      "Maîtriser les protocoles de réathlétisation",
      "Analyser et individualiser l’entraînement",
    ],

    programme: [
      {
        day: "Jour 1",
        content: "Physiologie de la performance et tests physiques",
      },
      {
        day: "Jour 2",
        content: "Force, puissance et vitesse",
      },
      {
        day: "Jour 3",
        content: "Prévention des blessures et mobilité",
      },
      {
        day: "Jour 4",
        content: "Réathlétisation et retour au sport",
      },
      {
        day: "Jour 5",
        content: "Études de cas et programmation avancée",
      },
    ],

    public: "Coachs expérimentés et préparateurs physiques",
    prerequis: "Expérience en coaching sportif",
  },
];
/* =========================
   Page dynamique
========================= */

export default function FormationDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;

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

          <p className="text-gray-700 mb-4">
            {formation.shortDescription}
          </p>

          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold">
              {formation.category}
            </span>

            <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-xs font-semibold">
              Niveau : {formation.level}
            </span>
          </div>

          <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors">
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
        <h2 className="text-2xl font-bold text-gray-900">
          Objectifs pédagogiques
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {formation.objectifs.map((objectif, index) => (
            <li key={index}>{objectif}</li>
          ))}
        </ul>
      </section>

      {/* Programme */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Programme détaillé
        </h2>

        <div className="border-l-2 border-blue-200 pl-6 flex flex-col gap-6">
          {formation.programme.map((item, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-blue-600 rounded-full"></div>
             <div className="pl-6">
                <h3 className="font-semibold text-gray-800">
                  {item.day}
                </h3>

                <p className="text-gray-700">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Public & prérequis */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">
          Public & prérequis
        </h2>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex items-center gap-3 text-gray-700">
            <FaUsers />
            <span>{formation.public}</span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaClock />
            <span>{formation.prerequis}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
          S’inscrire ou demander un devis
        </button>
      </div>
    </section>
  );
}
