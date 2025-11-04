mapboxgl.accessToken = 'pk.eyJ1IjoiaWprbGVpbiIsImEiOiJjbWg5czN5aHQwYTA5MmxvajQxcHJkOGdqIn0.Hh8LHf_7JuYvAIVXWDyeXg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/ijklein/cmh9sad23000301sof7eo14do', // Your Style URL
  center: [-122.27, 37.87], // starting position [lng, lat]
  zoom: 9 // starting zoom
});

map.on('load', function () {
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
});