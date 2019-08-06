---
title: Google maps draw polygon and change color on click
date: "2019-08-03T22:12:00.121Z"
tags: ["googe-maps"]
header: { type: 'icon', bgColor: '#359852', icon: 'google-maps' }
---

```hmtl
<script>
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 9,
      center: {
        lat: 25.774,
        lng: -80.190
      }
    });

    map.data.addGeoJson({
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "letter": "G",
            "color": "blue",
            "rank": "7",
            "ascii": "71"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [[
              [-80.190, 25.774],
              [-66.118, 18.466],
              [-64.757, 32.321],
              [-80.190, 25.774],
            ]]
          }
        }
      ]
    });

    map.data.setStyle(function(feature) {
      return ({
        fillColor: feature.getProperty('color'),
        strokeColor: feature.getProperty('color'),
        strokeWeight: 1
      });
    });

    map.data.addListener('click', function(event) {
      event.feature.setProperty('color', 'red');
    });
  }
</script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=GOOGLE_API_KEY&callback=initMap">
</script>
```

Repace `GOOGLE_API_KEY` with your google api key.

## Next steps
If your dealing with large polygons, it wil beter to load them through a api call.
All you need to do this is replace `addGeoJson` with `loadGeoJson`. The param for `addGeoJson` is the a url which will return geo json.