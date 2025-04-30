// Initialisation de la carte centrée sur Megève
const map = L.map('map').setView([45.8667, 6.6167], 14);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Chargement du fichier GeoJSON de l'hôtel
fetch('hotel_luxe.geojson')
  .then(res => res.json())
  .then(data => {
    L.geoJSON(data, {
      // Style de point : cercle bleu
      pointToLayer: (feature, latlng) => {
        return L.circleMarker(latlng, {
          radius: 10,
          fillColor: "#0077ff", // Couleur du centre
          color: "#000",         // Bordure noire
          weight: 1,
          opacity: 1,
          fillOpacity: 0.8
        });
      },
      // Popup avec le nom de l'hôtel
      onEachFeature: (feature, layer) => {
        const nom = feature.properties.HOTEL || "Hôtel de luxe";
        layer.bindPopup(`<b>${nom}</b>`);
      }
    }).addTo(map);
  });