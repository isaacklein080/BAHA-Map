mapboxgl.accessToken = 'pk.eyJ1IjoiaWprbGVpbiIsImEiOiJjbWg5czN5aHQwYTA5MmxvajQxcHJkOGdqIn0.Hh8LHf_7JuYvAIVXWDyeXg';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/ijklein/cmh9sad23000301sof7eo14do', //Your Style URL goes here
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });