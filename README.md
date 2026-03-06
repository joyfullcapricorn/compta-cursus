# ComptaCursus — Cursus de Comptabilité Générale

Projet Astro avec MDX, thème pastel, dark mode et composant Excel réutilisable.

## Lancer le projet

```bash
npm install
npm run dev
```

## Structure

```
src/
├── components/
│   └── ExcelViewer.astro    # Composant réutilisable pour tableurs Excel
├── data/
│   └── cours.ts             # Données des cours et index de recherche
├── layouts/
│   ├── Layout.astro         # Layout principal avec nav + dark mode
│   └── ChapterLayout.astro  # Layout chapitre avec sidebar + recherche in-page
├── pages/
│   ├── index.astro          # Page d'accueil avec recherche globale
│   └── cours/
│       ├── [coursId].astro  # Page liste des chapitres
│       └── [cours]/         # Chapitres MDX par cours
└── styles/
    └── global.css           # Thème pastel + dark mode
```

## Utiliser ExcelViewer dans un chapitre MDX

```mdx
import ExcelViewer from '../../../components/ExcelViewer.astro';

<!-- Mode upload (drag & drop) -->
<ExcelViewer title="Mon tableau" type="upload" />

<!-- Mode données inline -->
<ExcelViewer
  title="Plan Comptable"
  type="inline"
  data={{
    sheets: [{
      name: "Comptes",
      rows: [
        ["N°", "Intitulé", "Classe"],
        ["512", "Banque", "5"],
      ]
    }]
  }}
/>

<!-- Mode fichier statique (/public/data/mon-fichier.xlsx) -->
<ExcelViewer title="Exercice" file="/data/exercice.xlsx" />
```

## Ajouter un cours

1. Ajouter le cours dans `src/data/cours.ts`
2. Créer un dossier `src/pages/cours/[id-du-cours]/`
3. Créer les fichiers `.mdx` des chapitres avec le frontmatter approprié

## Technologies

- **Astro** + MDX
- **SheetJS** (xlsx) pour le rendu des tableurs
- **CSS custom** avec variables pastel + dark mode
- Polices : Instrument Serif + DM Sans
