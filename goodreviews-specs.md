# GoodReviews — Spécifications complètes pour le site web

## Table des matières
1. [Vue d'ensemble du projet](#1-vue-densemble-du-projet)
2. [Architecture et structure du projet](#2-architecture-et-structure-du-projet)
3. [Design system](#3-design-system)
4. [Contenu par section](#4-contenu-par-section)
5. [Comportement responsive](#5-comportement-responsive)
6. [Interactions et animations](#6-interactions-et-animations)
7. [Internationalisation (i18n)](#7-internationalisation-i18n)
8. [Déploiement](#8-déploiement)
9. [Wireframe HTML de référence](#9-wireframe-html-de-référence)
10. [Règles pour claude.md](#10-règles-pour-claudemd)

---

## 1. Vue d'ensemble du projet

### Description
Site vitrine one-page pour GoodReviews, une entreprise suisse qui aide les restaurants et chaînes de restauration à améliorer leur note Google en optimisant la récolte d'avis clients.

### Stack technique
- **Framework** : React (Create React App ou Vite)
- **Langage** : JavaScript (pas TypeScript)
- **Styling** : CSS Modules ou styled-components
- **i18n** : react-i18next (détection automatique de la langue du navigateur)
- **Routing** : react-router-dom (pour les pages légales et futures landing pages persona)
- **Hébergement** : GitHub Pages
- **Responsive** : Mobile-first, adapté desktop

### Pages
- `/` — Homepage (one-page)
- `/privacy-policy` — Privacy Policy
- `/terms-of-use` — Terms of Use
- `/google-api-disclosure` — Google API Disclosure

---

## 2. Architecture et structure du projet

L'organisation doit suivre les bonnes pratiques d'un développeur senior. Structure claire, séparation des responsabilités, composants réutilisables.

```
goodreviews-website/
├── claude.md                          # Instructions et journal d'erreurs pour l'agent
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── fonts/                         # Fichiers de polices locales
│   │   ├── LeagueSpartan-Variable.ttf
│   │   ├── Quicksand-Variable.ttf
│   │   └── Helvetica.ttf
│   ├── images/
│   │   ├── logos/                     # Logos clients (Burger King, etc.)
│   │   │   ├── burger-king.png
│   │   │   ├── brasserie-du-cercle.png
│   │   │   └── ...
│   │   ├── photo-engel.jpg            # Photo du fondateur
│   │   └── og-image.png              # Image pour les réseaux sociaux
│   └── locales/
│       ├── fr/
│       │   └── translation.json
│       ├── en/
│       │   └── translation.json
│       └── de/
│           └── translation.json
├── src/
│   ├── index.js                       # Point d'entrée
│   ├── App.js                         # Router principal
│   ├── i18n.js                        # Configuration i18next
│   ├── styles/
│   │   ├── variables.css              # Variables CSS (couleurs, polices, espacements)
│   │   ├── global.css                 # Reset et styles globaux
│   │   └── fonts.css                  # @font-face declarations
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js              # Barre de navigation sticky
│   │   │   ├── Navbar.module.css
│   │   │   ├── Footer.js              # Pied de page
│   │   │   └── Footer.module.css
│   │   ├── sections/
│   │   │   ├── Hero.js                # Section accroche
│   │   │   ├── Hero.module.css
│   │   │   ├── Problem.js             # Section problème
│   │   │   ├── Problem.module.css
│   │   │   ├── Solution.js            # Section solution (timeline)
│   │   │   ├── Solution.module.css
│   │   │   ├── Results.js             # Section résultats
│   │   │   ├── Results.module.css
│   │   │   ├── Trust.js               # Section confiance (logos)
│   │   │   ├── Trust.module.css
│   │   │   ├── About.js               # Section à propos + stats + CTA
│   │   │   └── About.module.css
│   │   └── ui/
│   │       ├── Button.js              # Bouton CTA réutilisable
│   │       ├── Button.module.css
│   │       ├── StatCard.js            # Card de statistique réutilisable
│   │       ├── StatCard.module.css
│   │       ├── ResultCard.js          # Card de résultat client
│   │       ├── ResultCard.module.css
│   │       ├── LanguageSwitcher.js    # Sélecteur de langue
│   │       └── LanguageSwitcher.module.css
│   ├── pages/
│   │   ├── HomePage.js                # Page d'accueil (assemble les sections)
│   │   ├── PrivacyPolicy.js
│   │   ├── TermsOfUse.js
│   │   └── GoogleApiDisclosure.js
│   ├── data/
│   │   ├── results.js                 # Données des résultats clients
│   │   └── stats.js                   # Données des statistiques
│   └── utils/
│       └── scrollUtils.js             # Utilitaires de scroll
└── package.json
```

### Principes d'organisation
- **Un composant = un fichier JS + un fichier CSS Module**
- **Les données (résultats, stats) sont séparées des composants** dans `/data`
- **Les composants UI réutilisables** (Button, StatCard) sont dans `/components/ui`
- **Les sections de page** sont dans `/components/sections`
- **Le layout** (Navbar, Footer) est dans `/components/layout`
- **Pas de logique métier dans les composants** — les composants ne font que de l'affichage

---

## 3. Design system

### Couleurs

```css
:root {
  /* Couleurs principales */
  --color-primary: #7469cd;           /* Violet — couleur de marque */
  --color-black: #0A0A0A;             /* Noir profond */
  --color-white: #FFFFFF;             /* Blanc pur */
  
  /* Fonds */
  --color-bg-white: #FFFFFF;          /* Fond blanc */
  --color-bg-grey: #E5E7EB;          /* Fond gris (sections alternées) */
  --color-bg-light-grey: #f6f6f6;    /* Fond gris clair (cards internes) */
  --color-bg-black: #0A0A0A;         /* Fond noir (footer) */
  --color-bg-purple-light: #f6f3ff;  /* Fond violet très léger */
  
  /* Texte */
  --color-text-primary: #0A0A0A;      /* Texte principal */
  --color-text-secondary: #333333;    /* Texte secondaire */
  --color-text-muted: #888888;        /* Texte discret */
  --color-text-white: #FFFFFF;        /* Texte sur fond sombre */
  --color-text-success: #1D9E75;      /* Texte résultats positifs (vert) */
  
  /* Bordures et accents */
  --color-border-light: #ccd5e2;      /* Bordure légère */
  --color-accent-blue: #ccd5e2;       /* Accent bleu-gris */
}
```

### Polices

```css
/* Titres de sections (Le problème ?, La solution ?, etc.) */
font-family: 'League Spartan', sans-serif;
font-weight: 800;

/* Sous-titres et titres de blocs */
font-family: 'Quicksand', sans-serif;
font-weight: 700;

/* Corps de texte */
font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
font-weight: 400;
```

### Tailles de texte

```css
/* Mobile */
--font-size-hero-accent: 56px;        /* "2 FOIS" dans le hero */
--font-size-hero-text: 22px;          /* Texte du hero */
--font-size-stat-number: 52px;        /* Gros chiffres (97%, 1 sur 2) */
--font-size-stat-sub: 22px;           /* "personne sur" */
--font-size-section-title: 18px;      /* Titres de sections */
--font-size-block-title: 17px;        /* Titres des blocs (timeline) */
--font-size-sub-title: 14px;          /* Sous-titres (Mesurez, Comparez) */
--font-size-body: 14px;               /* Corps de texte */
--font-size-stat-card-number: 22px;   /* Chiffres dans les stat cards */
--font-size-stat-card-label: 9px;     /* Labels des stat cards */
--font-size-result-name: 14px;        /* Nom du client résultat */
--font-size-result-value: 13px;       /* Valeur du résultat */
--font-size-cta: 16px;                /* Texte des boutons CTA */
--font-size-nav-logo: 18px;           /* Logo dans la navbar */
--font-size-footer-small: 10px;       /* Texte footer légal */
--font-size-footer-copyright: 11px;   /* Copyright */
```

### Espacements et arrondis

```css
/* Arrondis */
--radius-section: 48px;              /* Arrondis des transitions entre sections */
--radius-card: 16px;                 /* Cards */
--radius-button: 12px;               /* Boutons CTA */
--radius-navbar: 16px;               /* Navbar */
--radius-photo: 24px;                /* Photo du fondateur */
--radius-stat-card: 12px;            /* Stat cards */
--radius-result-card: 12px;          /* Result cards */
--radius-logo: 4px;                  /* Logos clients */
--radius-timeline-dot: 50%;          /* Points de la timeline */

/* Padding sections */
--padding-section-x: 24px;           /* Padding horizontal des sections */
--padding-section-y: 50px;           /* Padding vertical des sections */

/* Navbar */
--navbar-padding-x: 20px;
--navbar-padding-y: 14px;
--navbar-top-offset: 8px;
--navbar-side-margin: 12px;
```

### Ombres

```css
--shadow-card: 0 4px 15px rgba(0, 0, 0, 0.05);
--shadow-cta: 0 10px 20px rgba(116, 105, 205, 0.3);
--shadow-photo: 0 10px 30px rgba(0, 0, 0, 0.1);
--shadow-hero-text: 0px 10px 30px rgba(0, 0, 0, 0.2);
```

---

## 4. Contenu par section

### Section 1 — Hero (Accroche)

**Fond** : `--color-primary` (#7469cd)
**Arrondi** : en bas uniquement (border-radius: 0 0 48px 48px)
**Texte couleur** : blanc

**Contenu FR** :
```
Un client [mécontent] a
[2 FOIS]
plus de chance de laisser un avis.
```

**Mise en forme** :
- "mécontent" : font-weight 900, border-bottom 3px solid rgba(255,255,255,0.5), padding-bottom 2px
- "2 FOIS" : font-size 56px, font-weight 900, display block, text-shadow, margin 12px 0
- Reste du texte : font-size 22px, font-weight 500
- Tout centré

---

### Section 2 — Le problème ?

**Fond** : blanc (#FFFFFF), contenu dans un parent gris (#E5E7EB)
**Le blanc descend sur le gris** avec border-radius 0 0 48px 48px
**margin-top: -40px** pour recouvrir la section précédente

**Contenu FR** :
```
[Titre] Le problème ?
→ Aligné à gauche, couleur violet, font-weight 800, font-size 18px

[Stat 1]
97%
des personnes consultent les avis avant de se rendre dans un établissement.

[Séparateur] — Barre violette de 40px de large, 3px de haut, centrée

[Stat 2]
1 personne sur 2
se tourne vers la concurrence à cause d'avis négatifs.
```

**Mise en forme stats** :
- Chiffres : font-size 52px, font-weight 900, color noir, centré
- "personne sur" : font-size 22px, font-weight 500, color #888
- Texte explicatif : font-size 14px, font-weight 500, max-width 280px, centré

---

### Section 3 — La solution ? (Timeline)

**Fond** : gris (#E5E7EB), contenu dans un parent blanc
**Le gris descend sur le blanc** avec border-radius 0 0 48px 48px

**Contenu FR** :
```
[Titre] La solution ?
→ Aligné à gauche, couleur violet, font-weight 800, font-size 18px

[Timeline — Point 1]
Titre : Donner la parole à vos clients satisfaits
Texte : On vous accompagne afin de trouver LA méthode adaptée à vos besoins.
[saut de ligne]
L'objectif : Automatiser la récolte d'avis positifs, sans bouleverser vos habitudes.

[Timeline — Point 2]
Titre : Ne devinez plus.
Mesurez, comparez, progressez.

  [Mesurez]
  Combien d'avis vous faut-il pour passer de 4.2 à 4.3 ?
  Durant quel mois avez-vous récolté le plus d'avis ? ...
  [saut de ligne]
  L'app Good Reviews répond à toutes vos questions !

  [Comparez]
  La performance Google de chacun de vos établissements et identifiez ceux qui ont le plus besoin de votre attention.

  [Progressez]
  Avec les bonnes données, vous prenez les bonnes décisions.
  [EN GRAS] Google vous dit où vous êtes, notre app vous dit où vous allez.
```

**Design de la timeline** :
- Ligne verticale violette : 2px de large, position absolute à gauche
- Points/cercles violets : 18px de diamètre, background violet, border 3px solid #E5E7EB
- Padding-left du contenu : 32px
- Points positionnés à left: -32px du contenu

**Sous-sections Mesurez/Comparez/Progressez** :
- Titres : font-size 14px, font-weight 800, color violet
- Texte : font-size 14px, color #333
- Séparés par border-bottom 1px solid #ccd5e2
- Dernier élément (Progressez) sans border-bottom

---

### Section 4 — Est-ce que ça marche vraiment ? (Résultats)

**Fond** : blanc, contenu dans un parent gris
**Le blanc descend sur le gris** avec border-radius 0 0 48px 48px

**Contenu FR** :
```
[Titre] Est-ce que ça marche vraiment ?
→ Aligné à gauche, couleur violet

[Résultats — liste verticale]
Burger King Suisse | Groupe     | +21% note    | +101% avis/mois
Brasserie du Cercle | Restaurant | +8.5% note   | +207% avis/mois
Chauffage Compris   | Bistrot    | +9.2% note   | +78% avis/mois
Brasserie Dumas     | Restaurant | +14.6% note  | +502% avis/mois

[CTA 1] En savoir plus → lien vers Calendly
```

**Design des result cards** :
- Background : #f6f6f6
- Border-radius : 12px
- Padding : 16px 18px
- Flexbox : space-between
- Nom client : font-size 14px, font-weight 800, noir
- Type : font-size 11px, font-weight 500, #888
- Valeurs : font-size 13px, font-weight 800, color #1D9E75

**CTA** :
- Background : violet
- Color : blanc
- Padding : 18px vertical
- Border-radius : 12px
- Font-size : 16px, font-weight 800
- Box-shadow : var(--shadow-cta)
- Width : 100%

---

### Section 5 — Ils nous font confiance

**Fond** : gris (#E5E7EB), contenu dans un parent blanc
**Le gris descend sur le blanc** avec border-radius 0 0 48px 48px

**Contenu FR** :
```
[Titre] Ils nous font confiance
→ Aligné à gauche, font-weight 800, font-size 18px, noir

[Logos] — 1 seule ligne, centrés, opacity 0.4, grayscale
```

**Design** :
- Section compacte : padding 36px 24px 32px
- Logos : height 30px, padding horizontal 10px, fond blanc, border-radius 4px
- Logos en flexbox centré avec gap 10px
- Filter : grayscale(100%), opacity 0.4

---

### Section 6 — À propos + Stats + CTA 2

**Fond** : blanc, contenu dans un parent noir (#0A0A0A)
**Le blanc descend sur le noir** avec border-radius 0 0 48px 48px

**Contenu FR** :
```
[Titre] À propos
→ Aligné à gauche, couleur violet

[Photo] — Placeholder pour photo d'Engel Kyrian
→ width 100%, height 200px, border-radius 24px
→ filter: grayscale(100%) contrast(120%)
→ box-shadow

[Texte — tronqué avec fade-out]
L'idée derrière Good Reviews est née d'une frustration personnelle.

En 2023, lorsque ma mère a ouvert son magasin de fleurs, elle y a mis tout son coeur. Elle ne comptait pas ses heures et portait une attention particulière à chaque client. Pourtant sa note Google ne reflétait pas tous ses efforts.

Cette injustice m'a fait prendre conscience d'un problème plus profond...

[Texte complet — révélé au clic sur "Lire la suite"]
...Avoir des clients satisfaits est une chose, le faire savoir en ligne en est une autre.

C'est pourquoi j'ai décidé de fonder Good Reviews avec une mission claire : Faire en sorte que votre note Google reflète enfin la qualité de votre travail.

Aujourd'hui, l'aventure continue avec plus de 60 établissements accompagnés à travers toute la Suisse.

— Engel Kyrian, Fondateur

[+ Lire la suite] → couleur violet, font-weight 800, font-size 13px
→ Au clic : révèle le texte complet et change en "- Réduire"

[Stats — 3 cards en ligne]
+60 | établissements accompagnés
+12.9% | en moyenne sur la note Google
+38K | avis récoltés

[CTA 2] Prenez rendez-vous → lien vers Calendly
```

**Design stats** :
- Flex, gap 8px
- Background : #f6f6f6
- Border-radius : 12px
- Padding : 14px 8px
- Chiffre : font-size 22px, font-weight 900, color violet
- Label : font-size 9px, color #555

**Texte tronqué** :
- max-height : 180px (quand fermé)
- overflow : hidden
- Fade-out : gradient de transparent à blanc, height 50px, position absolute en bas

---

### Section 7 — Footer

**Fond** : noir (#0A0A0A), pas d'arrondi, va jusqu'en bas de la page

**Contenu** :
```
[Logo] good.reviews | © 2026

[Liens légaux — centrés, séparés par un trait horizontal]
Privacy Policy | Terms of Use | Google API Disclosure
```

**Design** :
- Padding : 24px horizontal, 16px vertical
- Logo : font-weight 800, 14px, blanc, "reviews" en violet 11px
- Copyright : font-size 11px, color #888
- Liens légaux : font-size 10px, color #888, séparés par border-top 1px solid #222, padding-top 12px, centered, gap 16px

---

### Navbar

**Design** :
- Position : sticky, top 8px
- Margin : 8px 12px 0 (détachée des bords)
- Background : violet (#7469cd)
- Border-radius : 16px
- Padding : 14px 20px
- Z-index : 100
- Contenu : logo à gauche, menu hamburger (☰) à droite
- Logo : "good." en blanc 18px bold, "reviews" en blanc 14px opacity 0.7
- Sur mobile : menu hamburger → ouvre un menu avec les liens de navigation + sélecteur de langue
- Sur desktop : liens de navigation visibles + sélecteur de langue (FR | EN | DE)

---

## 5. Comportement responsive

### Mobile (< 768px)
- C'est le design par défaut (mobile-first)
- Tout le wireframe tel que décrit ci-dessus
- Menu hamburger dans la navbar
- Sections empilées verticalement
- Stats cards sur 3 colonnes (flex)
- Logos clients sur 1 ligne (flex-wrap si nécessaire)

### Desktop (≥ 768px)
- Max-width du contenu : 1200px, centré
- Navbar : toujours sticky, même style mais les liens de navigation sont visibles (pas de hamburger)
- Hero : même layout mais plus de padding vertical, texte plus grand
- Section problème : les 2 stats peuvent être côte à côte
- Section résultats : rester en liste verticale (comme demandé)
- Section confiance : logos sur une ligne avec plus d'espace
- Section à propos : photo et texte peuvent être côte à côte
- Les arrondis (48px) restent identiques
- Les transitions entre sections (blanc sur gris, etc.) restent identiques

### Breakpoints
```css
/* Mobile first */
/* Tablet */
@media (min-width: 768px) { ... }
/* Desktop */
@media (min-width: 1024px) { ... }
/* Large desktop */
@media (min-width: 1440px) { ... }
```

---

## 6. Interactions et animations

### Navbar
- Sticky en haut avec 8px de marge
- Pas de changement de style au scroll (reste violet, même opacité)

### Menu hamburger (mobile)
- Au clic : ouvre un menu plein écran ou dropdown
- Contenu : liens internes (sections), sélecteur de langue
- Animation : slide ou fade

### Bouton "Lire la suite" (À propos)
- Au clic : le texte se déplie (max-height passe de 180px à auto)
- Le gradient fade-out disparaît
- Le texte du bouton change de "+ Lire la suite" à "- Réduire"
- Animation : transition smooth sur max-height

### Boutons CTA
- Hover : léger scale(1.02) ou opacité
- Active : scale(0.98)
- Les deux CTA redirigent vers le lien Calendly (URL à configurer)

### Scroll
- Scroll smooth entre les sections si des liens internes sont ajoutés dans la navbar
- Pas d'animations au scroll (pas de fade-in, pas de slide-in) — le contenu est visible immédiatement

### Sélecteur de langue
- Au clic : change la langue du site
- Langue active visuellement distinguée (bold, underline, ou couleur différente)

---

## 7. Internationalisation (i18n)

### Configuration
- Utiliser `react-i18next` avec `i18next-browser-languagedetector`
- Détection automatique de la langue du navigateur
- Fallback : français (fr)
- Langues supportées : fr, en, de

### Structure des fichiers de traduction
```
public/locales/
  fr/translation.json
  en/translation.json
  de/translation.json
```

### Contenu FR (translation.json)

```json
{
  "nav": {
    "logo": "good.",
    "logoSuffix": "reviews"
  },
  "hero": {
    "line1": "Un client",
    "highlight": "mécontent",
    "line2": "a",
    "accent": "2 FOIS",
    "line3": "plus de chance de laisser un avis."
  },
  "problem": {
    "title": "Le problème ?",
    "stat1Number": "97%",
    "stat1Text": "des personnes consultent les avis avant de se rendre dans un établissement.",
    "stat2Number1": "1",
    "stat2Middle": "personne sur",
    "stat2Number2": "2",
    "stat2Text": "se tourne vers la concurrence à cause d'avis négatifs."
  },
  "solution": {
    "title": "La solution ?",
    "step1Title": "Donner la parole à vos clients satisfaits",
    "step1Text1": "On vous accompagne afin de trouver LA méthode adaptée à vos besoins.",
    "step1Text2": "L'objectif : Automatiser la récolte d'avis positifs, sans bouleverser vos habitudes.",
    "step2Title1": "Ne devinez plus.",
    "step2Title2": "Mesurez, comparez, progressez.",
    "measureTitle": "Mesurez",
    "measureText1": "Combien d'avis vous faut-il pour passer de 4.2 à 4.3 ?",
    "measureText2": "Durant quel mois avez-vous récolté le plus d'avis ? ...",
    "measureText3": "L'app Good Reviews répond à toutes vos questions !",
    "compareTitle": "Comparez",
    "compareText": "La performance Google de chacun de vos établissements et identifiez ceux qui ont le plus besoin de votre attention.",
    "progressTitle": "Progressez",
    "progressText1": "Avec les bonnes données, vous prenez les bonnes décisions.",
    "progressText2": "Google vous dit où vous êtes, notre app vous dit où vous allez."
  },
  "results": {
    "title": "Est-ce que ça marche vraiment ?",
    "cta": "En savoir plus"
  },
  "trust": {
    "title": "Ils nous font confiance"
  },
  "about": {
    "title": "À propos",
    "text1": "L'idée derrière Good Reviews est née d'une frustration personnelle.",
    "text2": "En 2023, lorsque ma mère a ouvert son magasin de fleurs, elle y a mis tout son coeur. Elle ne comptait pas ses heures et portait une attention particulière à chaque client. Pourtant sa note Google ne reflétait pas tous ses efforts.",
    "text3": "Cette injustice m'a fait prendre conscience d'un problème plus profond. Avoir des clients satisfaits est une chose, le faire savoir en ligne en est une autre.",
    "text4": "C'est pourquoi j'ai décidé de fonder Good Reviews avec une mission claire : Faire en sorte que votre note Google reflète enfin la qualité de votre travail.",
    "text5": "Aujourd'hui, l'aventure continue avec plus de 60 établissements accompagnés à travers toute la Suisse.",
    "signature": "— Engel Kyrian, Fondateur",
    "readMore": "+ Lire la suite",
    "readLess": "- Réduire",
    "stat1Number": "+60",
    "stat1Label": "établissements accompagnés",
    "stat2Number": "+12.9%",
    "stat2Label": "en moyenne sur la note Google",
    "stat3Number": "+38K",
    "stat3Label": "avis récoltés",
    "cta": "Prenez rendez-vous"
  },
  "footer": {
    "copyright": "© 2026",
    "privacy": "Privacy Policy",
    "terms": "Terms of Use",
    "googleApi": "Google API Disclosure"
  }
}
```

### Contenu EN et DE
À compléter par le client. La structure JSON sera identique, seules les valeurs changent.

---

## 8. Déploiement

### GitHub Pages
1. Créer un repo GitHub `goodreviews-website`
2. Configurer `homepage` dans `package.json` : `"homepage": "https://[username].github.io/goodreviews-website"`
3. Installer `gh-pages` : `npm install --save-dev gh-pages`
4. Ajouter les scripts dans `package.json` :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
5. Déployer avec `npm run deploy`

### Variables d'environnement
```
REACT_APP_CALENDLY_URL=https://calendly.com/[lien-a-configurer]
```

---

## 9. Wireframe HTML de référence

Ce code HTML est le wireframe validé. Il sert de **référence visuelle exacte** pour le site à coder en React. Le résultat final doit reproduire ce design fidèlement.

```html
<div style="max-width: 400px; margin: 0 auto; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #0A0A0A; overflow: hidden;">

<!-- Navbar -->
<div style="position: sticky; top: 8px; z-index: 100; margin: 8px 12px 0; display: flex; justify-content: space-between; align-items: center; padding: 14px 20px; background: #7469cd; border-radius: 16px;">
<div style="font-weight: 800; font-size: 18px; color: #FFFFFF;">good.<span style="font-size: 14px; opacity: 0.7;">reviews</span></div>
<div style="font-size: 20px; color: #FFFFFF;">☰</div>
</div>

<!-- Section 1: Hero violet -->
<div style="background: #7469cd; color: #FFFFFF; padding: 80px 24px 70px; border-radius: 0 0 48px 48px; position: relative; z-index: 10; text-align: center; margin-top: -60px; padding-top: 120px;">
<div style="font-size: 22px; font-weight: 500; line-height: 1.3;">
Un client
<span style="font-weight: 900; border-bottom: 3px solid rgba(255,255,255,0.5); padding-bottom: 2px;">mécontent</span>
a
<span style="display: block; color: #FFFFFF; font-size: 56px; font-weight: 900; line-height: 1; margin: 12px 0; text-shadow: 0px 10px 30px rgba(0,0,0,0.2);">2 FOIS</span>
plus de chance de laisser un avis.
</div>
</div>

<!-- Section 2: Problème -->
<div style="background: #E5E7EB; position: relative; z-index: 5;">
<div style="background: #FFFFFF; padding: 70px 24px 60px; margin-top: -40px; border-radius: 0 0 48px 48px; position: relative; z-index: 6;">
<div style="color: #7469cd; font-weight: 800; font-size: 18px; margin-bottom: 32px; text-align: left;">Le problème ?</div>
<div style="text-align: center; margin-bottom: 32px;">
<div style="font-size: 52px; font-weight: 900; color: #0A0A0A; line-height: 1;">97%</div>
<div style="font-size: 14px; color: #0A0A0A; font-weight: 500; line-height: 1.5; margin-top: 8px; max-width: 280px; margin-left: auto; margin-right: auto;">des personnes consultent les avis avant de se rendre dans un établissement.</div>
</div>
<div style="width: 40px; height: 3px; background: #7469cd; margin: 0 auto 32px; border-radius: 2px;"></div>
<div style="text-align: center;">
<div style="font-weight: 900; color: #0A0A0A; line-height: 1;"><span style="font-size: 52px;">1</span> <span style="font-size: 22px; font-weight: 500; color: #888;">personne sur</span> <span style="font-size: 52px;">2</span></div>
<div style="font-size: 14px; color: #0A0A0A; font-weight: 500; line-height: 1.5; margin-top: 8px; max-width: 280px; margin-left: auto; margin-right: auto;">se tourne vers la concurrence à cause d'avis négatifs.</div>
</div>
</div>

<!-- Section 3: Solution - Timeline -->
<div style="background: #FFFFFF;">
<div style="background: #E5E7EB; padding: 40px 24px 50px; border-radius: 0 0 48px 48px;">
<div style="text-align: left; margin-bottom: 32px;">
<div style="color: #7469cd; font-weight: 800; font-size: 18px;">La solution ?</div>
</div>
<div style="position: relative; padding-left: 32px;">
<div style="position: absolute; left: 10px; top: 8px; bottom: 8px; width: 2px; background: #7469cd;"></div>
<div style="position: relative; margin-bottom: 32px;">
<div style="position: absolute; left: -32px; top: 4px; width: 18px; height: 18px; border-radius: 50%; background: #7469cd; border: 3px solid #E5E7EB;"></div>
<div style="font-size: 17px; font-weight: 800; margin-bottom: 12px; color: #0A0A0A; line-height: 1.3;">Donner la parole à vos clients satisfaits</div>
<div style="font-size: 14px; color: #333; line-height: 1.6;">On vous accompagne afin de trouver LA méthode adaptée à vos besoins.<br><br>L'objectif : Automatiser la récolte d'avis positifs, sans bouleverser vos habitudes.</div>
</div>
<div style="position: relative;">
<div style="position: absolute; left: -32px; top: 4px; width: 18px; height: 18px; border-radius: 50%; background: #7469cd; border: 3px solid #E5E7EB;"></div>
<div style="font-size: 17px; font-weight: 800; margin-bottom: 16px; color: #0A0A0A; line-height: 1.3;">Ne devinez plus.<br>Mesurez, comparez, progressez.</div>
<div style="display: flex; flex-direction: column; gap: 12px;">
<div style="padding-bottom: 12px; border-bottom: 1px solid #ccd5e2;">
<div style="font-size: 14px; font-weight: 800; color: #7469cd; margin-bottom: 4px;">Mesurez</div>
<div style="font-size: 14px; color: #333; line-height: 1.6;">Combien d'avis vous faut-il pour passer de 4.2 à 4.3 ?<br>Durant quel mois avez-vous récolté le plus d'avis ? ...<br><br>L'app Good Reviews répond à toutes vos questions !</div>
</div>
<div style="padding-bottom: 12px; border-bottom: 1px solid #ccd5e2;">
<div style="font-size: 14px; font-weight: 800; color: #7469cd; margin-bottom: 4px;">Comparez</div>
<div style="font-size: 14px; color: #333; line-height: 1.6;">La performance Google de chacun de vos établissements et identifiez ceux qui ont le plus besoin de votre attention.</div>
</div>
<div>
<div style="font-size: 14px; font-weight: 800; color: #7469cd; margin-bottom: 4px;">Progressez</div>
<div style="font-size: 14px; color: #333; line-height: 1.6;">Avec les bonnes données, vous prenez les bonnes décisions.<br><span style="font-weight: 800; color: #0A0A0A;">Google vous dit où vous êtes, notre app vous dit où vous allez.</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<!-- Section 4: Résultats -->
<div style="background: #E5E7EB;">
<div style="background: #FFFFFF; padding: 50px 24px 60px; border-radius: 0 0 48px 48px; position: relative; z-index: 7;">
<div style="text-align: left; margin-bottom: 24px;">
<div style="color: #7469cd; font-weight: 800; font-size: 18px;">Est-ce que ça marche vraiment ?</div>
</div>
<div style="display: flex; flex-direction: column; gap: 10px;">
<div style="background: #f6f6f6; border-radius: 12px; padding: 16px 18px; display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 14px; font-weight: 800; color: #0A0A0A;">Burger King Suisse</div>
<div style="font-size: 11px; color: #888; font-weight: 500;">Groupe</div>
</div>
<div style="text-align: right;">
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+21% note</div>
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+101% avis/mois</div>
</div>
</div>
<div style="background: #f6f6f6; border-radius: 12px; padding: 16px 18px; display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 14px; font-weight: 800; color: #0A0A0A;">Brasserie du Cercle</div>
<div style="font-size: 11px; color: #888; font-weight: 500;">Restaurant</div>
</div>
<div style="text-align: right;">
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+8.5% note</div>
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+207% avis/mois</div>
</div>
</div>
<div style="background: #f6f6f6; border-radius: 12px; padding: 16px 18px; display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 14px; font-weight: 800; color: #0A0A0A;">Chauffage Compris</div>
<div style="font-size: 11px; color: #888; font-weight: 500;">Bistrot</div>
</div>
<div style="text-align: right;">
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+9.2% note</div>
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+78% avis/mois</div>
</div>
</div>
<div style="background: #f6f6f6; border-radius: 12px; padding: 16px 18px; display: flex; justify-content: space-between; align-items: center;">
<div>
<div style="font-size: 14px; font-weight: 800; color: #0A0A0A;">Brasserie Dumas</div>
<div style="font-size: 11px; color: #888; font-weight: 500;">Restaurant</div>
</div>
<div style="text-align: right;">
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+14.6% note</div>
<div style="font-size: 13px; color: #1D9E75; font-weight: 800;">+502% avis/mois</div>
</div>
</div>
</div>
<div style="margin-top: 28px;">
<div style="display: block; width: 100%; background: #7469cd; color: #FFF; text-align: center; padding: 18px 0; border-radius: 12px; font-size: 16px; font-weight: 800; box-shadow: 0 10px 20px rgba(116,105,205,0.3);">En savoir plus</div>
</div>
</div>
</div>

<!-- Section 5: Confiance -->
<div style="background: #FFFFFF;">
<div style="background: #E5E7EB; padding: 36px 24px 32px; border-radius: 0 0 48px 48px;">
<div style="text-align: left; margin-bottom: 20px;">
<div style="font-size: 18px; font-weight: 800; color: #0A0A0A;">Ils nous font confiance</div>
</div>
<div style="display: flex; gap: 10px; justify-content: center; opacity: 0.4; filter: grayscale(100%);">
<div style="height: 30px; padding: 0 10px; background: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 8px; color: #555; font-weight: 800;">BURGER KING</div>
<div style="height: 30px; padding: 0 10px; background: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #555; font-weight: 800;">Logo</div>
<div style="height: 30px; padding: 0 10px; background: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #555; font-weight: 800;">Logo</div>
<div style="height: 30px; padding: 0 10px; background: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #555; font-weight: 800;">Logo</div>
<div style="height: 30px; padding: 0 10px; background: #FFFFFF; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #555; font-weight: 800;">Logo</div>
</div>
</div>
</div>

<!-- Section 6: À propos + Stats + CTA 2 -->
<div style="background: #0A0A0A;">
<div style="background: #FFFFFF; padding: 50px 24px 40px; border-radius: 0 0 48px 48px;">
<div style="text-align: left; margin-bottom: 20px;">
<div style="color: #7469cd; font-weight: 800; font-size: 18px;">À propos</div>
</div>
<div style="width: 100%; height: 200px; background: #ccc; filter: grayscale(100%) contrast(120%); border-radius: 24px; margin-bottom: 20px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #888; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">Photo Engel Kyrian</div>
<div style="font-size: 14px; line-height: 1.7; color: #333; position: relative; max-height: 180px; overflow: hidden;">
L'idée derrière Good Reviews est née d'une frustration personnelle.<br><br>En 2023, lorsque ma mère a ouvert son magasin de fleurs, elle y a mis tout son coeur. Elle ne comptait pas ses heures et portait une attention particulière à chaque client. Pourtant sa note Google ne reflétait pas tous ses efforts.<br><br>Cette injustice m'a fait prendre conscience d'un problème plus profond...
<div style="position: absolute; bottom: 0; left: 0; right: 0; height: 50px; background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));"></div>
</div>
<div style="color: #7469cd; font-weight: 800; font-size: 13px; margin-top: 10px; display: flex; align-items: center; gap: 5px;">+ Lire la suite</div>
<div style="display: flex; gap: 8px; margin-top: 28px;">
<div style="flex: 1; background: #f6f6f6; border-radius: 12px; padding: 14px 8px; text-align: center;">
<div style="font-size: 22px; font-weight: 900; color: #7469cd;">+60</div>
<div style="font-size: 9px; color: #555; margin-top: 4px; font-weight: 500;">établissements accompagnés</div>
</div>
<div style="flex: 1; background: #f6f6f6; border-radius: 12px; padding: 14px 8px; text-align: center;">
<div style="font-size: 22px; font-weight: 900; color: #7469cd;">+12.9%</div>
<div style="font-size: 9px; color: #555; margin-top: 4px; font-weight: 500;">en moyenne sur la note Google</div>
</div>
<div style="flex: 1; background: #f6f6f6; border-radius: 12px; padding: 14px 8px; text-align: center;">
<div style="font-size: 22px; font-weight: 900; color: #7469cd;">+38K</div>
<div style="font-size: 9px; color: #555; margin-top: 4px; font-weight: 500;">avis récoltés</div>
</div>
</div>
<div style="margin-top: 24px;">
<div style="display: block; width: 100%; background: #7469cd; color: #FFF; text-align: center; padding: 18px 0; border-radius: 12px; font-size: 16px; font-weight: 800; box-shadow: 0 10px 20px rgba(116,105,205,0.3);">Prenez rendez-vous</div>
</div>
</div>
</div>

<!-- Footer -->
<div style="background: #0A0A0A; padding: 24px 24px 16px;">
<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
<div style="font-weight: 800; font-size: 14px; color: #FAFAFA;">good.<span style="color: #7469cd; font-size: 11px;">reviews</span></div>
<div style="font-size: 11px; color: #888;">© 2026</div>
</div>
<div style="display: flex; gap: 16px; justify-content: center; border-top: 1px solid #222; padding-top: 12px;">
<div style="font-size: 10px; color: #888;">Privacy Policy</div>
<div style="font-size: 10px; color: #888;">Terms of Use</div>
<div style="font-size: 10px; color: #888;">Google API Disclosure</div>
</div>
</div>

</div>
```

---

## 10. Règles pour claude.md

Le fichier `claude.md` doit être créé à la racine du projet avec le contenu suivant :

```markdown
# GoodReviews Website — Instructions Agent

## Rôle
Tu es un développeur senior React. Tu codes ce site en suivant les spécifications du fichier `goodreviews-specs.md` à la lettre. Le wireframe HTML dans ce fichier est la référence visuelle exacte à reproduire.

## Principes
- **Mobile-first** : code d'abord pour mobile, adapte ensuite pour desktop
- **Composants modulaires** : un composant = un fichier JS + un fichier CSS Module
- **Séparation des données** : les textes viennent de i18n, les données (résultats, stats) viennent de `/data`
- **Pas de librairie UI externe** (pas de Material UI, pas de Tailwind, pas de Bootstrap)
- **CSS pur** via CSS Modules
- **Nommage clair** : noms de composants et classes en anglais, contenu en français/multilingue via i18n

## Checklist avant chaque commit
- [ ] Le rendu mobile correspond au wireframe HTML de référence
- [ ] Les couleurs utilisent les variables CSS définies dans variables.css
- [ ] Les polices sont correctes (League Spartan titres, Quicksand sous-titres, Helvetica corps)
- [ ] Les arrondis entre sections sont corrects (toujours 48px, toujours la couche supérieure qui recouvre l'inférieure)
- [ ] La navbar est sticky et violette avec les bords arrondis
- [ ] Le sélecteur de langue fonctionne
- [ ] Les liens CTA pointent vers la bonne URL Calendly
- [ ] Le "Lire la suite" du À propos fonctionne (expand/collapse)
- [ ] Les pages légales (Privacy, Terms, Google API) sont accessibles

## Journal d'erreurs
Chaque erreur rencontrée doit être documentée ici pour ne pas la répéter.

### Format
- **Date** : YYYY-MM-DD
- **Erreur** : description du problème
- **Cause** : pourquoi ça s'est produit
- **Solution** : comment ça a été corrigé
- **Leçon** : ce qu'il faut retenir pour éviter cette erreur à l'avenir

### Erreurs documentées
(Aucune pour le moment — à remplir au fur et à mesure du développement)
```

---

## Résumé des transitions entre sections (CRITIQUE)

C'est le point le plus important du design. Chaque transition suit la même logique : **la couche supérieure a un border-radius en bas qui crée une vague recouvrant la section en dessous**.

```
Violet (Hero)           → border-radius: 0 0 48px 48px → recouvre le blanc
Blanc (Problème)        → border-radius: 0 0 48px 48px → recouvre le gris
Gris (Solution)         → border-radius: 0 0 48px 48px → recouvre le blanc
Blanc (Résultats)       → border-radius: 0 0 48px 48px → recouvre le gris
Gris (Confiance)        → border-radius: 0 0 48px 48px → recouvre le blanc
Blanc (À propos)        → border-radius: 0 0 48px 48px → recouvre le noir
Noir (Footer)           → PAS d'arrondi → va jusqu'en bas
```

Pour que la vague fonctionne, chaque section doit avoir un **parent avec la couleur de fond de la section suivante**, et l'enfant (la section elle-même) a le border-radius et un `margin-top négatif` pour chevaucher.
