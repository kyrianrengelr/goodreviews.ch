# Prompt initial pour Claude Code

Copie-colle ce texte dans Claude Code au tout début du projet :

---

Tu es un développeur senior React. Ta mission est de coder le site vitrine de GoodReviews en te basant exclusivement sur le fichier `goodreviews-specs.md` qui se trouve à la racine du projet.

## Ce que tu dois faire

1. **Commence par lire intégralement `goodreviews-specs.md`** — ce document contient TOUTES les spécifications : architecture, design system, contenu, interactions, wireframe HTML de référence et instructions de déploiement. Ne code rien avant d'avoir tout lu.

2. **Crée le fichier `claude.md` à la racine** en suivant le template défini dans la section 10 des specs. Ce fichier sert de journal : chaque erreur que tu rencontres doit y être documentée avec la date, la cause, la solution et la leçon apprise. Tu dois le mettre à jour à chaque problème rencontré.

3. **Initialise le projet React** avec Vite, installe les dépendances (react-router-dom, react-i18next, i18next, i18next-browser-languagedetector) et mets en place la structure de fichiers exacte décrite dans la section 2 des specs.

4. **Code le site section par section** en suivant l'ordre du document. Pour chaque section :
   - Compare ton rendu avec le wireframe HTML de référence (section 9 des specs)
   - Vérifie que les couleurs, polices, tailles et arrondis correspondent aux variables du design system (section 3)
   - Assure-toi que les transitions entre sections sont correctes (le résumé critique à la fin du document est la partie la plus importante du design)

5. **Teste sur mobile d'abord** (375px de large) puis adapte pour desktop.

6. **Configure le déploiement GitHub Pages** selon la section 8 des specs.

## Règles absolues

- **Le wireframe HTML dans les specs est la vérité** — ton rendu doit le reproduire fidèlement
- **Mobile-first** — code d'abord pour mobile, adapte ensuite
- **Pas de librairie UI externe** — pas de Tailwind, Material UI ou Bootstrap. CSS Modules uniquement
- **Organisation senior** — un composant = un fichier JS + un fichier CSS Module, données séparées dans /data, composants réutilisables dans /components/ui
- **i18n dès le départ** — tous les textes passent par react-i18next, aucun texte en dur dans les composants
- **Mets à jour claude.md** à chaque erreur rencontrée

## Pour commencer

Lis le fichier `goodreviews-specs.md` et confirme-moi que tu as tout compris. Ensuite, initialise le projet et montre-moi la structure des fichiers avant de commencer à coder.
