# 🌄 M&F Horizons Blancs – Site de réservation alpine

Projet réalisé dans le cadre de notre formation en développement web. Il s'agit d'une **expérience immersive de réservation d’hôtel en montagne**, accompagnée d'une page d'agence mère pour relier plusieurs offres touristiques.

🔗 **Voir le site en ligne** : [https://marie-t-code.github.io/projet_3_agence_de_voyage/](https://marie-t-code.github.io/projet_3_agence_de_voyage/)

Le but du projet était de :
- **créer notre premier projet en équipe**,
- **maîtriser les bases de CSS et HTML vanilla**,
- **avoir un aperçu d’une structure GitHub simple (une branche)**.

Nous en avons également profité pour découvrir ou approfondir la création de design sur **Figma**.

## 🎨 Aperçu de la maquette Figma

[![Maquette agence](./img/figma/figma_agence.png)](./img/figma/figma_agence.png)
[![Maquette hotel](./img/figma/figma_hotel.png)](./img/figma/figma_hotel.png)

---

## 🗂 Structure du projet

### 1. Pages HTML

- `index.html` : page d’accueil de l’agence de voyage M&F Destinations.
- `agence_de_voyage_hotel.html` : page dédiée à l’hôtel partenaire (Horizons Blancs).

### 2. Feuilles de style CSS

- `style.css` : styles principaux de la page agence (`index.html`).
- `agence_de_voyage_hotel.css` : base de styles pour la page hôtel.
- `agence-de-voyage-hotel-responsive.css` : styles responsives pour la page hôtel.

### 3. JavaScript

- `map.js` : script pour charger une carte interactive via Leaflet (utilisé dans la section "Informations pratiques").

---

## 🎨 Principales fonctionnalités

- **Navigation adaptative** : menu mobile latéral interactif, menu desktop standard.
- **Section HÉRO immersive** avec image en `svh` pour un affichage plein écran sans glitch mobile.
- **Formulaire de réservation simplifié** (dates, personnes) — non connecté à un backend.
- **Galerie d’images** responsive en `grid` avec `scroll` mobile-friendly.
- **Illustrations SVG décoratives** positionnées dynamiquement.
- **Carte Leaflet intégrée** pour localiser l’hôtel.
- **Design responsive** basé sur `clamp()`, `flex`, `grid`, et plusieurs `@media queries`.

---

## 📐 Technologies utilisées

- **HTML5 / CSS3**
- **Responsive Web Design** (`flex`, `grid`, `clamp`, `media queries`)
- **Leaflet.js** pour la cartographie
- **Bootstrap Icons** + **Font Awesome** pour l’iconographie
- **Google Fonts** (Poppins)
- **Qgis** création de couches géolocalisées pour export en GeoJSON

### 🎨 Outils de design et production visuelle

- **Figma** pour la création de maquettes et l’organisation des sections
- **Inkscape** pour l’édition et la vectorisation des fichiers SVG
- **GIMP** et **Photoshop** pour le redimensionnement et l’optimisation des images

---

## 🔧 À noter

- Le projet est **statique** (aucune base de données, ni backend).
- Le formulaire de recherche est visuel et non fonctionnel (pas de validation dynamique).
- Certaines sections décoratives (SVG) sont masquées ou repositionnées selon les écrans.
- Le site intègre des bases d’**accessibilité** (`aria-label`, `alt`, `sr_only`, etc.).

---

## 🌐 Ressources & inspirations

- SVGs décoratifs : [SVGRepo](https://www.svgrepo.com), [lucide](https://lucide.de), [Pexels](https://www.pexels.com)
- Icônes : [Bootstrap Icons](https://icons.getbootstrap.com), [Font Awesome](https://fontawesome.com)
- Cartographie : [Leaflet](https://leafletjs.com/)
- Inspirations : [Awwwards](https://www.awwwards.com)

---

## 🧑‍💻 Réalisé par

- [Fernando](https://github.com/fernando-DEVWEB)
- [Marie](https://github.com/Marie-T-code)

Cohésion assurée sur la mise en page, le responsive, les composants visuels et l’accessibilité.