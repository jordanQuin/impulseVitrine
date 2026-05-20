"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  FaClock, 
  FaUsers, 
  FaCalendarAlt, 
  FaCheckCircle, 
  FaGraduationCap, 
  FaBullseye,
  FaArrowLeft,
  FaEuroSign,
  FaInfoCircle
} from "react-icons/fa";

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
  price?: string;
  image: string;
};

const formations: Formation[] = [
  {
    slug: "coach-fitness-debutant",
    title: "Coach Fitness Débutant",
    shortDescription: "Apprends les bases du coaching sportif, de la musculation et des méthodes d'encadrement.",
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
    price: "Sur devis",
    image: "/coach-beginner.jpg",
  },
  {
    slug: "coach-nutrition-sportive",
    title: "Coach Nutrition Sportive",
    shortDescription: "Maîtrise l'alimentation sportive, le suivi nutritionnel et l’optimisation de la performance.",
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
    price: "Sur devis",
    image: "/nutrition-coach.png",
  },
  {
    slug: "coach-preparation-physique",
    title: "Préparateur Physique Avancé",
    shortDescription: "Deviens expert de la performance physique, de la prévention et de la réathlétisation.",
    category: "Performance & Preparation",
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
    price: "Sur devis",
    image: "/physical-trainer.png",
  },
  {
    slug: "creation-contenu-digital-sportif",
    title: "Création de contenu digital sportif",
    shortDescription: "Apprenez les bases incontournables de la création de contenu sportif : techniques simples, outils efficaces et bonnes pratiques.",
    category: "Création de contenu",
    level: "Tous niveaux",
    duration: "7h (1 jour)",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Maîtriser les bases de la prise de vue et du montage vidéo",
      "Utiliser les outils de création graphique simples (Canva)",
      "Comprendre les codes des réseaux sociaux sportifs",
      "Optimiser son temps avec un planning de publication",
    ],
    programme: [
      { day: "Matin", content: "Stratégie éditoriale, storytelling et choix des plateformes" },
      { day: "Après-midi", content: "Atelier pratique : tournage, montage rapide et outils de design" },
    ],
    public: "Professionnels du sport, coachs et gérants de salles",
    prerequis: "Aucun prérequis technique",
    price: "910 € / personne",
    image: "/digital-sportif-content.jpg",
  },
  {
    slug: "initiation-community-management",
    title: "Initiation au Community Management",
    shortDescription: "Apprends aux professionnels du sport à gérer et animer leurs réseaux sociaux, créer du contenu engageant et développer leur communauté.",
    category: "Réseaux Sociaux",
    level: "Professionnels",
    duration: "2 jours (2 x 4h)",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Comprendre le rôle du CM dans l'écosystème du sport",
      "Élaborer une stratégie social media complète",
      "Planifier efficacement ses publications",
      "Animer une communauté et analyser l'impact",
    ],
    programme: [
      { day: "Jour 1", content: "Introduction, panorama des réseaux, stratégie et création de contenus" },
      { day: "Jour 2", content: "Planification, animation, outils de mesure et atelier pratique" },
    ],
    public: "Professionnels du sport, athlètes, structures sportives",
    prerequis: "Pratique régulière des réseaux sociaux",
    price: "1 200 € / personne",
    image: "/management.png",
  },
  {
    slug: "marketing-influence-sport",
    title: "Marketing d'Influence",
    shortDescription: "Apprends à identifier, collaborer et gérer des partenariats avec des influenceurs pour accroître ta visibilité.",
    category: "Marketing & Image",
    level: "Professionnels",
    duration: "2 jours",
    nextSession: "Prochaine session à venir",
    objectifs: [
      "Comprendre les tendances du marketing d'influence",
      "Identifier les influenceurs pertinents pour sa cible",
      "Maîtriser les négociations et types de collaborations",
      "Mesurer précisément le ROI d'une campagne",
    ],
    programme: [
      { day: "Jour 1", content: "Tendances du marché, ciblage des profils et typologies d'actions" },
      { day: "Jour 2", content: "Négociation, contrats, analyse des metrics et simulation" },
    ],
    public: "Responsables marketing, marques ou clubs de sport",
    prerequis: "Bases en communication digitale",
    price: "1 200 € / personne",
    image: "/marketing_influence.jpg",
  },
  {
    slug: "accompagnement-personnalise",
    title: "Accompagnement Personnalisé",
    shortDescription: "Bénéficie d'un suivi sur mesure pour t'aider à mettre en place ta stratégie digitale propre.",
    category: "Coaching & Stratégie",
    level: "Tous niveaux",
    duration: "Sessions modulables (min. 2h)",
    nextSession: "À la demande",
    objectifs: [
      "Obtenir un diagnostic précis de ta présence digitale",
      "Bâtir un plan d'action immédiat et ultra-personnalisé",
      "Profiter d'un coaching individuel sur tes propres outils",
      "Ajuster tes actions en continu",
    ],
    programme: [
      { day: "Session 1", content: "Diagnostic complet de ta présence en ligne et définition des objectifs" },
      { day: "Sessions Suivantes", content: "Coaching pratique pas-à-pas, création guidée de contenus" },
    ],
    public: "Professionnels du sport, coachs indépendants",
    prerequis: "Avoir un projet ou une activité sportive lancée",
    price: "À partir de 300 €",
    image: "/com_sport.jpg",
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
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Formation non trouvée 😅</h2>
        <p className="text-gray-500 mb-6">La formation que vous cherchez n'existe pas ou a été déplacée.</p>
        <Link href="/formation" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Retour aux formations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* 🟦 HERO SECTION (Corrigée : Hauteur dynamique h-auto et padding pb-24 pour laisser respirer le texte) */}
      <section className="relative h-auto min-h-[440px] pt-16 pb-24 md:pt-20 md:pb-28 w-full bg-gray-900 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image 
            src={formation.image} 
            alt={formation.title} 
            layout="fill" 
            objectFit="cover" 
            className="opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/formation" className="inline-flex items-center text-blue-300 hover:text-white mb-6 transition">
            <FaArrowLeft className="mr-2" /> Retour aux formations
          </Link>
          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-blue-600/80 text-white text-sm font-semibold backdrop-blur-sm">
              {formation.category}
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              Niveau : {formation.level}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            {formation.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto drop-shadow leading-relaxed">
            {formation.shortDescription}
          </p>
        </div>
      </section>

      {/* 🟦 BARRE D'INFOS FLOTTANTE */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-row justify-center items-center gap-8 md:gap-16 border border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
              <FaClock />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Durée</p>
              <p className="text-lg font-bold text-gray-800">{formation.duration}</p>
            </div>
          </div>
          
          <div className="w-px h-12 bg-gray-200"></div>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 text-xl flex-shrink-0">
              <FaCalendarAlt />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">Prochaine session</p>
              <p className="text-lg font-bold text-gray-800">{formation.nextSession}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 🟦 CONTENU PRINCIPAL EN GRILLE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLONNE GAUCHE (Contenu Principal) */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Objectifs */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <FaBullseye className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Objectifs pédagogiques</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formation.objectifs.map((objectif, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition">
                    <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
                    <span className="text-gray-700 font-medium">{objectif}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Programme Timeline */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-10">
                <FaGraduationCap className="text-3xl text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Programme détaillé</h2>
              </div>
              
              <div className="relative border-l-4 border-blue-100 ml-6 space-y-10">
                {formation.programme.map((item, index) => (
                  <div key={index} className="relative pl-10">
                    <div className="absolute -left-[22px] top-0 w-10 h-10 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center shadow-sm">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {item.day}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLONNE DROITE (Sidebar Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Carte Infos Pratiques */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Infos pratiques</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                      <FaUsers className="text-blue-600" /> Pour qui ?
                    </div>
                    <p className="text-gray-600 text-sm">{formation.public}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                      <FaInfoCircle className="text-blue-600" /> Prérequis
                    </div>
                    <p className="text-gray-600 text-sm">{formation.prerequis}</p>
                  </div>

                  {formation.price && (
                    <div>
                      <div className="flex items-center gap-2 text-gray-900 font-bold mb-2">
                        <FaEuroSign className="text-blue-600" /> Tarif
                      </div>
                      <p className="text-gray-600 text-sm font-semibold bg-gray-100 inline-block px-3 py-1 rounded-lg">
                        {formation.price}
                      </p>
                    </div>
                  )}
                </div>

                {/* Bouton d'inscription grisé / désactivé */}
                <div className="mt-8 pt-6 border-t">
                  <button 
                    disabled 
                    className="w-full py-4 bg-gray-200 text-gray-400 font-bold rounded-xl cursor-not-allowed mb-3 text-center"
                  >
                    S’inscrire à la session
                  </button>
                  <p className="text-xs text-center text-red-500 font-medium">
                    Aucune session planifiée actuellement
                  </p>
                </div>
              </div>

              {/* Carte Besoin d'aide */}
              <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 text-center">
                <h4 className="font-bold text-blue-900 mb-2">Une question ?</h4>
                <p className="text-sm text-blue-700 mb-4">Notre équipe pédagogique reste disponible pour répondre à vos questions.</p>
                <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
                  Nous contacter →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}