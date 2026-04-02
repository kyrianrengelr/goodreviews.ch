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
