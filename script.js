mapboxgl.accessToken = 'pk.eyJ1IjoiaWprbGVpbiIsImEiOiJjbWg5czN5aHQwYTA5MmxvajQxcHJkOGdqIn0.Hh8LHf_7JuYvAIVXWDyeXg';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/ijklein/cmh9sad23000301sof7eo14do',
  center: [-122.27, 37.87], // starting position [lng, lat]
  zoom: 9 // starting zoom
});
map.addControl(new mapboxgl.NavigationControl(), 'top-right');
map.addControl(new mapboxgl.ScaleControl({
  maxWidth: 200,
  unit: 'imperial' 
}), 'bottom-left');

map.on('load', function() {
  map.addSource('points-data', {
    type: 'geojson',
    data: 'https://raw.githubusercontent.com/isaacklein080/BAHA-Map/refs/heads/main/data/183.geojson'
  });

  map.addLayer({
    id: 'points-layer',
    type: 'circle',
    source: 'points-data',
    paint: {
      'circle-color': '#B42222',
      'circle-radius': 6,
      'circle-stroke-width': 2,
      'circle-stroke-color': '#ffffff'
    }
  });

  map.on('click', 'points-layer', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;

    const popupContent = `
      <div>
        <h3>${properties["Landmark"]}</h3>
        <p><strong>Address:</strong> ${properties["Address"]}</p>
        <p><strong>Architect & Date:</strong> ${properties["Architect + Date"]}</p>
        <p><strong>Designated:</strong> ${properties["Designated"]}</p>
        ${properties["Link"] ? `<p><a href="${properties["Link"]}" target="_blank">More Information</a></p>` : ''}
        ${properties["Notes"] ? `<p><strong>Notes:</strong> ${properties["Notes"]}</p>` : ''}
      </div>
    `;

    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(popupContent)
      .addTo(map);
  });

    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

 
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });

});

//Transparency Panel Logic
const dataBtn = document.getElementById('data-info-btn');
const dataPanel = document.getElementById('data-panel');
const closeBtn = document.querySelector('.close-panel');

dataBtn.addEventListener('click', function() {
  dataPanel.classList.toggle('visible');
});

closeBtn.addEventListener('click', function() {
  dataPanel.classList.remove('visible');
});
