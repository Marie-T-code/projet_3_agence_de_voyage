# 🌄 M&F Horizons Blancs – Site de réservation alpine

Projet réalisé dans le cadre de notre formation en développement web. Il s'agit d'une **expérience immersive de réservation d’hôtel en montagne**, accompagnée d'une page d'agence mère pour relier plusieurs offres touristiques.
Le but du projet était de: 
- **créer notre premier projet en équipe**, 
- **maîtriser les bases de CSS et HTML vanila**, 
- **avoir un aperçu d'une structire Github simple (une branche)**

nous en avons également profité pour découvrir ou approfondir la création de design sur **Figma**. 

---

## 🗂 Structure du projet

### 1. Pages HTML

- `index.html` : page d’accueil de l’agence de voyage M&F Destinations.
- `agence_de_voyage_hotel.html` : page dédiée à l’hôtel partenaire (Horizons Blancs).

### 2. Feuilles de style CSS

- `style.css` : styles principaux de la page agence (`index.html`).
- `agence_de_voyage_hotel.css` : base de styles pour la page hôtel.
- `agence-de-voyage-hotel-responsive.css` : responsive design pour la page hôtel.

### 3. JavaScript

- `map.js` : script pour charger une carte interactive via Leaflet (non détaillé ici mais utilisé dans la section "Informations pratiques").

---

## 🎨 Principales fonctionnalités

- **Navigation adaptative** : menu mobile en barre latérale interactive, menu desktop standard.
- **Section HÉRO immersive** avec image en `svh` pour plein écran sans glitch mobile.
- **Formulaire de réservation simplifié** (dates, personnes) — non connecté à un backend.
- **Galerie d’images** responsive en `grid` avec `scroll` mobile friendly.
- **Illustrations SVG décoratives** positionnées dynamiquement.
- **Carte Leaflet intégrée** pour visualiser la localisation de l’hôtel.
- **Design responsive** basé sur `clamp()`, `flex`, `grid`, et plusieurs `@media queries`.

---

## 📐 Technologies utilisées

- **HTML5 / CSS3**
- **Responsive Web Design** (`flex`, `grid`, `clamp`, `media queries`)
- **Leaflet.js** pour la cartographie
- **Bootstrap Icons** + **Font Awesome** pour l’iconographie
- **Google Fonts** (Poppins)

---

## 🔧 À noter

- Le projet est **statique** (aucune base de données, ni backend).
- Le formulaire de recherche est visuel et non fonctionnel (pas de validation dynamique).
- Certaines sections décoratives (SVGs) sont masquées ou repositionnées selon les écrans.
- Le site est en grande partie **accessible** (usage de `aria-label`, `alt`, `sr_only`, etc.).

---

## 🧑‍💻 Réalisé par

- Fernando
- Marie  
(Cohésion assurée sur la mise en page, le responsive, les composants visuels, et l’accessibilité)
