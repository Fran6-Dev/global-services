# Global Services — site React

Reproduction du template "Global Services" (bennes, terrassement, transport, stockage) en React + Vite + Tailwind CSS v4, avec toutes les pages et
la navigation (desktop + mobile, avec menu déroulant "Nos services").

## Démarrer le projet

```bash
npm install
npm run dev
```

Puis ouvrez l'URL affichée (en général http://localhost:5173).

Build de production :

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   Header, Footer, cartes, formulaires, icônes, éléments réutilisables
  pages/        Une page par route (Accueil, Nos services + 4 pages détail,
                À propos, Réalisations, Engagements, Contact, Devis...)
  data/content.js   Tout le texte du site + les URLs d'images, centralisés ici
```

Pour changer un texte (adresse, téléphone, description d'un service, valeurs,
etc.), il suffit de modifier `src/data/content.js` — c'est la seule source de
vérité utilisée par toutes les pages.

## ⚠️ À vérifier avant mise en ligne

Le contenu texte a été reconstitué à partir de vos captures d'écran (pas d'un
export du site original), donc quelques détails sont **à confirmer** :

- L'adresse exacte (`7 avenue des Acacias`, code postal / commune) dans
  `company` en haut de `src/data/content.js`.
- Le libellé "Ampliroll" (solution de transport) — le mot exact était peu
  lisible sur la capture, à corriger si besoin.
- Les réseaux sociaux du footer pointent vers des liens génériques
  (facebook.com, instagram.com, linkedin.com) : à remplacer par vos vraies
  pages.

## Images

Vous ne m'avez pas fourni le logo ni les photos originales (camions,
pelleteuses, chantiers). En attendant, le site utilise des **photos de stock
libres de droit**, sélectionnées par mots-clés via loremflickr.com (elles
s'affichent uniquement avec une connexion internet — normal une fois le site
en ligne ou lancé en local avec le wifi).

Pour les remplacer par vos vraies photos :

1. Déposez vos images dans `src/assets/` (ou `public/images/`).
2. Dans `src/data/content.js`, remplacez les appels à `img('mots-clés', ...)`
   par le chemin de votre fichier, par ex. :
   ```js
   import benneImg from '../assets/benne.jpg'
   // ...
   image: benneImg,
   ```

Le logo actuel (`src/components/Logo.jsx`) est une reconstitution simplifiée
(un pictogramme + texte "GLOBAL SERVICES"). Remplacez-le par votre logo réel
(fichier SVG/PNG) dès que vous me l'envoyez.

## Formulaires (Contact / Devis)

Les formulaires de contact et de demande de devis sont fonctionnels côté
interface (validation, état d'envoi, message de confirmation) mais **ne sont
pas encore connectés à un vrai service d'envoi** (pas de backend). Il faudra
brancher un service comme Formspree, EmailJS, ou votre propre API — les
endroits à modifier sont clairement indiqués par un commentaire `NOTE:` dans
`src/components/ContactForm.jsx` et `src/components/DevisForm.jsx`.

## Pages / routes

| Route                                   | Page                        |
| ---------------------------------------- | --------------------------- |
| `/`                                       | Accueil                     |
| `/nos-services`                           | Nos services (vue d'ensemble) |
| `/nos-services/location-de-bennes`        | Location de bennes           |
| `/nos-services/terrassement`              | Terrassement                 |
| `/nos-services/transport`                 | Transport                    |
| `/nos-services/stockage`                  | Stockage                     |
| `/a-propos`                               | À propos                     |
| `/realisations`                           | Réalisations (avec filtres)  |
| `/engagements`                            | Engagements                  |
| `/contact`                                | Contact                      |
| `/demande-de-devis`                       | Demande de devis             |
