"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type TeamMember = {
  name: string;
  role: string;
  img: string;
  bio?: string;
  skills?: string[];
};

function SectionHeader({
  primaryColor,
  eyebrow,
  title,
  subtitle,
}: {
  primaryColor: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center">
      <p
        className="text-xs font-semibold uppercase tracking-wider"
        style={{ color: primaryColor }}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-bold text-gray-900">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ProjectOverview({ primaryColor }: { primaryColor: string }) {
  const cards = [
    {
      title: "Impulse",
      subtitle: "Agence digitale spécialisée sport",
      desc: "Impulse accompagne les acteurs du sport dans le développement de leur image, de leur visibilité et de leur communauté à travers des stratégies digitales adaptées.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 20h16" />
          <path d="M6 20V8" />
          <path d="M10 20V4" />
          <path d="M14 20v-6" />
          <path d="M18 20V10" />
        </svg>
      ),
    },
    {
      title: "Stratégie & communication",
      subtitle: "Visibilité & engagement",
      desc: "Nous concevons des stratégies digitales cohérentes, pensées pour les clubs, athlètes, marques et structures sportives.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18" />
          <path d="M7 15l4-4 4 4 4-6" />
        </svg>
      ),
    },
    {
      title: "Formations professionnelles",
      subtitle: "Autonomie & montée en compétence",
      desc: "Impulse propose des formations dédiées aux acteurs du sport souhaitant comprendre et maîtriser les enjeux du digital.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10L12 4 2 10l10 6 10-6z" />
          <path d="M6 12v5c0 1 3 3 6 3s6-2 6-3v-5" />
        </svg>
      ),
    },
    {
      title: "Ypulse",
      subtitle: "Réseau social fitness",
      desc: "Ypulse est une plateforme dédiée aux sportifs, permettant de partager des performances, suivre des programmes et interagir avec une communauté engagée.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21s-7-4.35-9.5-8.5C.5 8.5 3 6 6 6c1.54 0 3.04.82 4 2.09C10.96 6.82 12.46 6 14 6c3 0 5.5 2.5 3.5 6.5C19 16.65 12 21 12 21z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="pb-16">
      <SectionHeader
        primaryColor={primaryColor}
        eyebrow="Notre positionnement"
        title="Une agence, une vision, une plateforme dédiée au sport"
        subtitle="Impulse combine accompagnement stratégique, formations professionnelles et développement de solutions digitales dédiées au secteur sportif."
      />

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div
              className="flex h-12 w-12 items-center justify-center rounded-2xl"
              style={{
                background: "rgba(65,134,253,0.12)",
                color: primaryColor,
              }}
            >
              <div className="h-6 w-6">{c.icon}</div>
            </div>

            <h3 className="mt-5 text-lg font-bold text-gray-900">{c.title}</h3>
            <p className="text-sm font-semibold text-gray-500">{c.subtitle}</p>
            <p className="mt-3 leading-relaxed text-gray-600">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function OfferSection({ primaryColor }: { primaryColor: string }) {
  const items = [
    {
      title: "Stratégie digitale",
      desc: "Définition des objectifs, positionnement, contenus, canaux et plan d’action adapté aux réalités du terrain.",
    },
    {
      title: "Community management",
      desc: "Animation et développement d’une communauté engagée, avec une ligne éditoriale cohérente et orientée performance.",
    },
    {
      title: "Audit & recommandations",
      desc: "Analyse de l’existant, axes d’amélioration, optimisation et plan de progression clair.",
    },
  ];

  return (
    <section className="pb-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Notre mission
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Accompagner les acteurs du sport dans leur image, leur visibilité et leur
            communauté.
          </h3>

          <p className="mt-5 leading-relaxed text-gray-700">
            Impulse est une agence de communication spécialisée dans le sport, qui a pour
            objectif d’accompagner les acteurs du sport — clubs, athlètes, marques, salles
            de sport et structures sportives — dans le développement de leur présence
            digitale grâce à des stratégies adaptées.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Sport & performance
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Stratégie digitale
            </span>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              Communauté
            </span>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4"
              style={{
                backgroundColor: primaryColor,
                boxShadow: "0 10px 25px rgba(65,134,253,0.25)",
              }}
            >
              Contactez-nous
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Nos services
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Une offre claire, orientée résultats
          </h3>

          <ul className="mt-6 space-y-5 text-gray-700">
            {items.map((it) => (
              <li key={it.title} className="flex gap-3">
                <span
                  className="mt-2 h-2 w-2 flex-none rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                <div>
                  <p className="font-semibold text-gray-900">{it.title}</p>
                  <p className="mt-1 leading-relaxed text-gray-600">{it.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DifferentiationSection({ primaryColor }: { primaryColor: string }) {
  const cards = [
    {
      title: "Des formations professionnelles",
      desc: "Pour permettre aux professionnels du sport de gagner en autonomie et de comprendre les enjeux du digital.",
    },
    {
      title: "Une stratégie, pas juste des posts",
      desc: "Impulse vise à construire une stratégie adaptée à chaque structure accompagnée, selon ses objectifs et ses contraintes.",
    },
    {
      title: "Ypulse : un réseau social dédié",
      desc: "Un espace exclusivement sport/fitness, pour partager, progresser, interagir et créer des micro-communautés engagées.",
    },
  ];

  return (
    <section className="pb-16">
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-8 sm:p-10 shadow-sm">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-15 blur-3xl"
          style={{ background: primaryColor }}
        />

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: primaryColor }}
            >
              Différenciation
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              Pourquoi Impulse n’est pas une agence comme les autres
            </h2>
            <p className="mt-3 max-w-2xl text-lg leading-relaxed text-gray-600">
              Notre positionnement combine accompagnement, montée en compétence et plateforme communautaire spécialisée.
            </p>
          </div>

          <Link
            href="/appli"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4"
            style={{
              backgroundColor: primaryColor,
              boxShadow: "0 10px 25px rgba(65,134,253,0.25)",
            }}
          >
            Découvrir Ypulse
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-gray-900">{c.title}</p>
              <p className="mt-2 leading-relaxed text-gray-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemAndStakes({ primaryColor }: { primaryColor: string }) {
  return (
    <section className="pb-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Problématique
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Les structures sportives n’ont pas toujours les ressources pour gérer leur communication digitale.
          </h3>

          <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
            <p>
              De nombreuses structures sportives, notamment amateurs ou semi-professionnelles,
              manquent de temps, de budget et de compétences pour développer une présence digitale efficace.
            </p>
            <p>
              Pourtant, la présence sur les réseaux sociaux est devenue indispensable pour attirer des licenciés,
              des partenaires, des sponsors et valoriser les performances sportives.
            </p>
            <p className="italic text-gray-600">
              Les réseaux sociaux généralistes sont saturés : il est difficile d’y gagner en visibilité
              et de créer une communauté réellement engagée autour du sport.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-md">
          <p
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: primaryColor }}
          >
            Enjeux
          </p>
          <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
            Visibilité, professionnalisation, communauté
          </h3>

          <ul className="mt-6 space-y-5 text-gray-700">
            <li className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 flex-none rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <div>
                <p className="font-semibold text-gray-900">Visibilité</p>
                <p className="mt-1 text-gray-600 leading-relaxed">
                  Aider les acteurs du sport à se faire connaître dans un environnement numérique concurrentiel.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 flex-none rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <div>
                <p className="font-semibold text-gray-900">Professionnalisation</p>
                <p className="mt-1 text-gray-600 leading-relaxed">
                  Proposer des outils, des formations et des stratégies adaptées aux réalités du terrain.
                </p>
              </div>
            </li>

            <li className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 flex-none rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <div>
                <p className="font-semibold text-gray-900">Création de communauté</p>
                <p className="mt-1 text-gray-600 leading-relaxed">
                  Fédérer sportifs et structures autour d’une plateforme spécialisée favorisant l’échange et l’engagement.
                </p>
              </div>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/formation"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-4"
              style={{ outlineColor: primaryColor }}
            >
              Voir les formations
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4"
              style={{
                backgroundColor: primaryColor,
                boxShadow: "0 10px 25px rgba(65,134,253,0.25)",
              }}
            >
              Demander un accompagnement
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection({
  primaryColor,
  team,
  onSelect,
}: {
  primaryColor: string;
  team: TeamMember[];
  onSelect: (m: TeamMember) => void;
}) {
  return (
    <section className="pb-16">
      <SectionHeader
        primaryColor={primaryColor}
        eyebrow="L’équipe"
        title="Rencontrez les experts derrière Impulse"
        subtitle="Une équipe pluridisciplinaire pour construire une expérience complète : communication, plateforme et accompagnement."
      />

      <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {team.map((m) => (
          <button
            key={m.name}
            type="button"
            onClick={() => onSelect(m)}
            className="group rounded-2xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-4"
            style={{ outlineColor: primaryColor }}
            aria-label={`Voir les détails de ${m.name}`}
          >
            <div
              className="mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-transparent transition group-hover:ring-4"
              style={{ boxShadow: "0 10px 22px rgba(0,0,0,0.06)" }}
            >
              <Image
                src={m.img}
                alt={m.name}
                width={96}
                height={96}
                className="h-full w-full object-contain"
              />
            </div>

            <h4 className="mt-4 text-base font-semibold text-gray-900">{m.name}</h4>
            <p className="mt-1 text-sm font-medium" style={{ color: primaryColor }}>
              {m.role}
            </p>

            <p className="mt-3 text-xs text-gray-500 opacity-0 transition group-hover:opacity-100">
              Cliquer pour voir le profil
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}

function MemberModal({
  primaryColor,
  member,
  onClose,
}: {
  primaryColor: string;
  member: TeamMember;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Fermer"
      />

      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white shadow-2xl">
        <div className="h-1.5 w-full" style={{ backgroundColor: primaryColor }} />
        <div className="p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="h-16 w-16 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50">
              <Image
                src={member.img}
                alt={member.name}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold" style={{ color: primaryColor }}>
                {member.role}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4"
              style={{ outlineColor: primaryColor }}
            >
              ✕
            </button>
          </div>

          {member.bio ? (
            <p className="mt-5 leading-relaxed text-gray-700">{member.bio}</p>
          ) : null}

          {member.skills?.length ? (
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-900">Compétences</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {member.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 focus:outline-none focus:ring-4"
              style={{ outlineColor: primaryColor }}
            >
              Fermer
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4"
              style={{
                backgroundColor: primaryColor,
                boxShadow: "0 10px 25px rgba(65,134,253,0.25)",
              }}
            >
              Contacter Impulse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function QuiSommesNousPage() {
  const primaryColor = "#4186fd";

  const team: TeamMember[] = useMemo(
    () => [
      {
        name: "Guillaume",
        role: "Développeur web",
        img: "/guillaume.png",
        bio: "Développement web orienté performance et expérience utilisateur.",
        skills: ["Next.js", "TypeScript", "UI/UX"],
      },
      {
        name: "Anthony",
        role: "Développeur mobile",
        img: "/anthony.png",
        bio: "Développement d’applications mobiles modernes, stables et fluides.",
        skills: ["Mobile", "UX", "API"],
      },
      {
        name: "Manon",
        role: "Community manager",
        img: "/manon.png",
        bio: "Gestion de communauté, contenu et animation des réseaux sociaux.",
        skills: ["Social media", "Contenu", "Engagement"],
      },
      {
        name: "Ghaith",
        role: "Développeur web",
        img: "/Ghaith.png",
        bio: "Conception et développement de solutions web robustes et modernes.",
        skills: ["Next.js", "Architecture", "Intégration"],
      },
      {
        name: "Rawan",
        role: "Développeuse backend",
        img: "/Rawan.png",
        bio: "Back-end solide, APIs et structuration des données.",
        skills: ["API", "Data", "Sécurité"],
      },
      {
        name: "Quentin",
        role: "Chef de projet",
        img: "/Quentin.png",
        bio: "Organisation, coordination et suivi des livrables.",
        skills: ["Kanban", "Planning", "Coordination"],
      },
      {
        name: "Marianne",
        role: "Chargée événementiel",
        img: "/Marianne.png",
        bio: "Organisation et coordination d’événements.",
        skills: ["Organisation", "Logistique", "Communication"],
      },
      {
        name: "Nicolas",
        role: "Développeur mobile",
        img: "/Nicolas.png",
        bio: "Développement mobile orienté fiabilité et expérience utilisateur.",
        skills: ["Mobile", "Tests", "UI"],
      },
      {
        name: "Jordan",
        role: "Développeur web",
        img: "/Jordan.png",
        bio: "Intégration front, composants et responsive.",
        skills: ["React", "Tailwind", "Accessibilité"],
      },
      {
        name: "Andrea",
        role: "Chargée marketing",
        img: "/Andrea.png",
        bio: "Marketing digital, acquisition et valorisation de l’offre.",
        skills: ["Acquisition", "Branding", "Analyse"],
      },
    ],
    []
  );

  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="flex flex-grow flex-col bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <section className="pt-14 pb-10">
          <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-gradient-to-b from-gray-50 to-white p-8 sm:p-10 shadow-sm">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{ background: primaryColor }}
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full opacity-10 blur-3xl"
              style={{ background: primaryColor }}
            />

            <p
              className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide"
              style={{ color: primaryColor }}
            >
              Qui sommes-nous
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Impulse :{" "}
              <span style={{ color: primaryColor }}>
                communication sportive & communauté dédiée
              </span>
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Impulse est une agence de communication digitale spécialisée dans le sport, qui accompagne clubs, athlètes,
              marques, salles de sport et structures sportives dans le développement de leur image, de leur visibilité
              et de leur communauté.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition focus:outline-none focus:ring-4"
                style={{
                  backgroundColor: primaryColor,
                  boxShadow: "0 10px 25px rgba(65,134,253,0.25)",
                }}
              >
                Travailler avec Impulse
              </Link>

              <Link
                href="/appli"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-4"
                style={{ outlineColor: primaryColor }}
              >
                Découvrir Ypulse
              </Link>
            </div>
          </div>
        </section>

        {/* SECTIONS */}
        <ProjectOverview primaryColor={primaryColor} />
        <OfferSection primaryColor={primaryColor} />
        <DifferentiationSection primaryColor={primaryColor} />
        <ProblemAndStakes primaryColor={primaryColor} />

        <hr className="my-14 border-gray-200" />

        {/* TEAM */}
        <TeamSection
          primaryColor={primaryColor}
          team={team}
          onSelect={(m) => setSelectedMember(m)}
        />
      </div>

      {selectedMember ? (
        <MemberModal
          primaryColor={primaryColor}
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      ) : null}
    </div>
  );
}
