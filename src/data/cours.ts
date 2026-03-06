// src/data/cours.ts
// Source de vérité pour les cours et chapitres

export interface Chapitre {
  id: string;
  num: number;
  titre: string;
  resume: string;
  duree?: string;
  slug: string;
}

export interface Cours {
  id: string;
  titre: string;
  description: string;
  emoji: string;
  color: string;
  chapitres: Chapitre[];
}

export const COURS: Cours[] = [
  {
    id: 'legislation-sociale',
    titre: 'Aspects de législation sociale appliquée au domaine de la comptabilité',
    description: "Droit du travail, contrats, rémunérations et obligations sociales de l'employeur",
    emoji: '⚖️',
    color: 'color-peach',
    chapitres: [
      {
        id: 'ls-intro-contrat',
        num: 1,
        titre: 'Introduction et conclusion du contrat de travail',
        resume: 'Définition du droit social, juridictions, organes de concertation, normes et types de contrats',
        slug: 'legislation-sociale/introduction-contrat',
      },
      {
        id: 'ls-suspension',
        num: 2,
        titre: 'La suspension du contrat de travail',
        resume: 'Maladie, accident, maternité, vacances annuelles, chômage temporaire et grève',
        slug: 'legislation-sociale/suspension',
      },
      {
        id: 'ls-rupture',
        num: 3,
        titre: 'La rupture du contrat de travail',
        resume: 'Préavis, indemnités, faute grave et licenciement manifestement déraisonnable',
        slug: 'legislation-sociale/rupture',
      },
      {
        id: 'ls-reglementation',
        num: 4,
        titre: 'Réglementation du travail : durée, congés et rémunération',
        resume: 'Heures de travail, heures supplémentaires, jours fériés, fiche de paie et avantages en nature',
        slug: 'legislation-sociale/reglementation',
      },
      {
        id: 'ls-atn-deplacement',
        num: 5,
        titre: 'Avantages de toute nature, déplacements et saisie',
        resume: 'Voiture de société, PC, GSM, frais de déplacement et quotités saisissables',
        slug: 'legislation-sociale/atn-deplacement-saisie',
      },
      {
        id: 'ls-secu-sociale',
        num: 6,
        titre: 'La sécurité sociale',
        resume: "Assujettissement à l'ONSS, cotisations de base, cotisation spéciale et réductions patronales",
        slug: 'legislation-sociale/securite-sociale',
      },
    ],
  },
  {
    id: 'communication-francais',
    titre: 'Communication en langue française',
    description: "Expression écrite et orale, rédaction professionnelle et communication d'entreprise",
    emoji: '✍️',
    color: 'color-sage',
    chapitres: [],
  },
  {
    id: 'comptabilite-analytique',
    titre: 'Comptabilité analytique — Partim 1',
    description: "Calcul des coûts, centres d'analyse et méthodes d'imputation",
    emoji: '🔢',
    color: 'color-lavender',
    chapitres: [],
  },
  {
    id: 'comptabilite-generale',
    titre: 'Comptabilité générale et droit comptable',
    description: 'Principes fondamentaux, états financiers et cadre légal belge',
    emoji: '📒',
    color: 'color-sky',
    chapitres: [],
  },
  {
    id: 'droit-civil',
    titre: 'Droit civil',
    description: 'Personnes, biens, obligations et contrats dans le droit civil belge',
    emoji: '🏛️',
    color: 'color-rose',
    chapitres: [],
  },
  {
    id: 'droit-enregistrement',
    titre: "Droit d'enregistrement et droit de succession",
    description: "Droits d'enregistrement, donation et fiscalité successorale",
    emoji: '📜',
    color: 'color-butter',
    chapitres: [],
  },
  {
    id: 'droit-societes',
    titre: 'Droit des sociétés',
    description: 'Formes sociales, constitution, fonctionnement et dissolution des sociétés',
    emoji: '🏢',
    color: 'color-peach',
    chapitres: [],
  },
  {
    id: 'economie-financiere',
    titre: 'Économie financière',
    description: "Marchés financiers, taux d'intérêt, financement et politique monétaire",
    emoji: '💹',
    color: 'color-sage',
    chapitres: [],
  },
  {
    id: 'economie-generale',
    titre: 'Économie générale',
    description: 'Microéconomie, macroéconomie, marché du travail et politique économique',
    emoji: '🌍',
    color: 'color-lavender',
    chapitres: [],
  },
  {
    id: 'gestion-budgetaire',
    titre: 'Gestion budgétaire',
    description: "Élaboration des budgets, contrôle budgétaire et analyse des écarts",
    emoji: '📊',
    color: 'color-sky',
    chapitres: [],
  },
  {
    id: 'gestion-rh',
    titre: 'Gestion des ressources humaines',
    description: 'Recrutement, formation, évaluation et gestion des compétences',
    emoji: '👥',
    color: 'color-rose',
    chapitres: [],
  },
  {
    id: 'impot-personnes-physiques',
    titre: 'Impôt des personnes physiques',
    description: "Revenus imposables, calcul de l'IPP, déductions et déclaration fiscale",
    emoji: '🧾',
    color: 'color-butter',
    chapitres: [],
  },
  {
    id: 'informatique',
    titre: 'Informatique',
    description: "Outils bureautiques, tableurs comptables et systèmes d'information",
    emoji: '💻',
    color: 'color-peach',
    chapitres: [],
  },
  {
    id: 'droit-fiscal',
    titre: 'Introduction au droit fiscal',
    description: 'Principes généraux de la fiscalité belge, sources et mécanismes d\'imposition',
    emoji: '📋',
    color: 'color-sage',
    chapitres: [],
  },
  {
    id: 'organisation-gestion',
    titre: "Organisation et gestion de l'entreprise — Introduction",
    description: "Structures organisationnelles, fonctions de l'entreprise et management",
    emoji: '🗂️',
    color: 'color-lavender',
    chapitres: [],
  },
  {
    id: 'statistique',
    titre: 'Statistique',
    description: 'Statistiques descriptives, probabilités et analyse de données économiques',
    emoji: '📈',
    color: 'color-sky',
    chapitres: [],
  },
];

// Génère l'index de recherche plat
export function buildSearchIndex() {
  const index: Array<{
    type: 'cours' | 'chapitre';
    id: string;
    titre: string;
    description: string;
    emoji?: string;
    coursId?: string;
    coursTitre?: string;
    slug: string;
  }> = [];

  for (const cours of COURS) {
    index.push({
      type: 'cours',
      id: cours.id,
      titre: cours.titre,
      description: cours.description,
      emoji: cours.emoji,
      slug: `/cours/${cours.id}`,
    });

    for (const ch of cours.chapitres) {
      index.push({
        type: 'chapitre',
        id: ch.id,
        titre: ch.titre,
        description: ch.resume,
        emoji: cours.emoji,
        coursId: cours.id,
        coursTitre: cours.titre,
        slug: `/cours/${ch.slug}`,
      });
    }
  }

  return index;
}
