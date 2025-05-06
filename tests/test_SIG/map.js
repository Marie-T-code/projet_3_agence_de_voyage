// 📍 Initialisation de la carte centrée sur Megève
const map = L.map('map').setView([45.8667, 6.6167], 14);

// 🗺️ Ajout du fond de carte (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 🔁 Fonction utilitaire : charger une couche GeoJSON avec options personnalisées
function chargerGeoJSON(fichier, options) {
  fetch(fichier)
    .then(res => res.json())
    .then(data => {
      L.geoJSON(data, options).addTo(map);
    })
    .catch(err => console.error(`Erreur chargement ${fichier} :`, err));
}

// 🏨 Couche Hôtel (point unique)
chargerGeoJSON('hotel.geojson', {
  pointToLayer: (feature, latlng) => L.circleMarker(latlng, {
    radius: 10,
    fillColor: "#0077ff",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  }),
  onEachFeature: (feature, layer) => {
    const nom = feature.properties.nom || "Hôtel Horizons Blancs";
    layer.bindPopup(`<b>${nom}</b>`);
  }
});

// 🚁 Couche Transports (points catégorisés : gare, héliport...)
chargerGeoJSON('transports.geojson', {
  pointToLayer: (feature, latlng) => {
    let couleur = "#999";
    const type = feature.properties.transport;

    // 🎨 Couleur selon type
    if (type === "gare") couleur = "#2E86C1";
    else if (type === "heliport") couleur = "#5DADE2";
    else if (type === "aerodrome") couleur = "#85C1E9";

    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: couleur,
      color: "#fff",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    });
  },
  onEachFeature: (feature, layer) => {
    const nom = feature.properties.nom;
    const type = feature.properties.transport;
    const access = feature.properties.access;
    layer.bindPopup(`<b>${nom}</b><br>Type : ${type}<br>Accès : ${access}`);
  }
});

// 🎧 Couche Sortir (restaurants et clubs)
chargerGeoJSON('sortir.geojson', {
  pointToLayer: (feature, latlng) => {
    const type = feature.properties.type;
    const couleur = type === "restaurant" ? "#2980B9" : "#8E44AD";

    return L.circleMarker(latlng, {
      radius: 8,
      fillColor: couleur,
      color: "#fff",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    });
  },
  onEachFeature: (feature, layer) => {
    const nom = feature.properties.nom;
    const desc = feature.properties.descriptio;
    const type = feature.properties.type;
    layer.bindPopup(`<b>${nom}</b><br>Type : ${type}<br><em>${desc}</em>`);
  }
});

// 🥾 Couche Randonnée (lignes)
chargerGeoJSON('randonnee.geojson', {
  style: feature => {
    const niveau = feature.properties.niveau;
    let couleur = "#27AE60"; // vert par défaut
    if (niveau === "moyen") couleur = "#F1C40F";
    else if (niveau === "difficile") couleur = "#E74C3C";

    return {
      color: couleur,
      weight: 4,
      opacity: 0.8
    };
  },
  onEachFeature: (feature, layer) => {
    const nom = feature.properties.nom;
    const type = feature.properties.type;
    const dist = feature.properties.distance_km;
    const desc = feature.properties.descriptio;
    layer.bindPopup(`<b>${nom}</b><br>${type} (${dist} km)<br><em>${desc}</em>`);
  }
});

// 🎾 Couche Zones sportives (polygones)
chargerGeoJSON('sports_detente.geojson', {
  style: feature => {
    const type = feature.properties.type;
    let couleur = "#AED6F1";

    if (type === "ski") couleur = "#5DADE2";
    else if (type === "golf") couleur = "#229954";
    else if (type === "spa") couleur = "#BB8FCE";
    else if (type === "tennis") couleur = "#F39C12";
    else if (type === "fitness") couleur = "#1ABC9C";
    else if (type === "luge") couleur = "#E67E22";

    return {
      color: couleur,
      fillOpacity: 0.5,
      weight: 2
    };
  },
  onEachFeature: (feature, layer) => {
    const nom = feature.properties.nom;
    const type = feature.properties.type;
    const desc = feature.properties.descriptio;
    layer.bindPopup(`<b>${nom}</b><br>Type : ${type}<br><em>${desc}</em>`);
  }
});