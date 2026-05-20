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
      { day: "Jour 1", content: "Bases de l’anatomie, rôle du coach et sécurité" },
      { day: "Jour 2", content: "Musculation, mouvements fondamentaux et techniques" },
      { day: "Jour 3", content: "Création de programmes et mise en situation pratique" },
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
      { day: "Jour 1", content: "Macronutriments, micronutriments et besoins sportifs" },
      { day: "Jour 2", content: "Plans alimentaires, compléments et cas pratiques" },
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
      { day: "Jour 1", content: "Physiologie de la performance et tests physiques" },
      { day: "Jour 2", content: "Force, puissance et vitesse" },
      { day: "Jour 3", content: "Prévention des blessures et mobilité" },
      { day: "Jour 4", content: "Réathlétisation et retour au sport" },
      { day: "Jour 5", content: "Études de cas et programmation avancée" },
    ],
    public: "Coachs expérimentés et préparateurs physiques",
    prerequis: "Expérience en coaching sportif",
  },
  {
    slug: "creation-contenu-digital-sportif",
    title: "Création de contenu digital sportif",
    shortDescription:
      "Apprenez les bases incontournables de la création de contenu sportif : techniques simples, outils efficaces et bonnes pratiques pour produire facilement et régulièrement des contenus de qualité.",
    category: "Création de contenu",
    level: "Tous niveaux",
    duration: "7h (1 jour)",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Maîtriser les bases de la prise de vue et du montage vidéo sur smartphone",
      "Utiliser les outils de création graphique simples (type Canva)",
      "Comprendre les codes des réseaux sociaux sportifs (Reels, TikTok, Instagram)",
      "Optimiser son temps avec un planning de publication efficace",
    ],
    programme: [
      { day: "Matin", content: "Stratégie éditoriale, storytelling et choix des plateformes" },
      { day: "Après-midi", content: "Atelier pratique : tournage, montage rapide et outils de design" },
    ],
    public: "Professionnels du sport, coachs et gérants de salles",
    prerequis: "Aucun prérequis technique",
  },
  {
    slug: "initiation-community-management",
    title: "Initiation au Community Management",
    shortDescription:
      "Apprends aux professionnels du sport à gérer et animer leurs réseaux sociaux, créer du contenu engageant et développer leur communauté.",
    category: "Réseaux Sociaux",
    level: "Professionnels",
    duration: "2 jours (2 x 4h)",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Comprendre le rôle du community management dans l'écosystème du sport",
      "Élaborer une stratégie social media complète (Instagram, TikTok, LinkedIn...)",
      "Planifier efficacement ses publications via un calendrier éditorial",
      "Animer une communauté et analyser l'impact de ses performances",
    ],
    programme: [
      { day: "Jour 1", content: "Introduction, panorama des réseaux du sport, stratégie et création de contenus (vidéos, stories)" },
      { day: "Jour 2", content: "Planification, animation de communauté, outils de mesure et atelier pratique sur calendrier réel" },
    ],
    public: "Professionnels du sport, athlètes, et gérants de structures sportives",
    prerequis: "Pratique régulière des réseaux sociaux à titre personnel",
  },
  {
    slug: "marketing-influence-sport",
    title: "Marketing d'Influence",
    shortDescription:
      "Apprends à identifier, collaborer et gérer des partenariats avec des influenceurs pour accroître ta visibilité et engager ta communauté sportive.",
    category: "Marketing & Image",
    level: "Professionnels",
    duration: "2 jours",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Comprendre les tendances actuelles du marketing d'influence dans le sport",
      "Identifier et sélectionner les influenceurs pertinents pour sa cible",
      "Maîtriser les mécaniques de négociation et les types de collaborations",
      "Mesurer précisément le ROI et les résultats d'une campagne",
    ],
    programme: [
      { day: "Jour 1", content: "Tendances du marché, ciblage des profils et typologies d'actions (challenges, sponsoring)" },
      { day: "Jour 2", content: "Négociation, contrats, analyse des metrics (reach, engagement) et simulation de campagne" },
    ],
    public: "Responsables marketing, gérants de marques ou clubs de sport",
    prerequis: "Bases en communication digitale",
  },
  {
    slug: "accompagnement-personnalise",
    title: "Accompagnement Personnalisé",
    shortDescription:
      "Bénéficie d'un suivi sur mesure pour t'aider à mettre en place ta stratégie digitale propre et optimiser ta communication selon tes contraintes.",
    category: "Coaching & Stratégie",
    level: "Tous niveaux",
    duration: "Sessions modulables (min. 2h)",
    nextSession: "À la demande",
    objectifs: [
      "Obtenir un diagnostic précis de ta présence digitale actuelle",
      "Bâtir un plan d'action immédiat et ultra-personnalisé",
      "Profiter d'un coaching individuel sur tes propres outils (réseaux, site)",
      "Ajuster tes actions en continu selon tes résultats réels",
    ],
    programme: [
      { day: "Session 1", content: "Diagnostic complet de ta présence en ligne et définition des objectifs" },
      { day: "Sessions Suivantes", content: "Coaching pratique pas-à-pas, création guidée de contenus et pilotage de ta stratégie" },
    ],
    public: "Professionnels du sport, coachs indépendants ou structures",
    prerequis: "Avoir un projet ou une activité sportive lancée ou en cours de lancement",
  }
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