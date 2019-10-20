function initMap() {
    // The location of Uluru
      var San_Marcos = {lat: 29.8884, lng: -97.9384};
      var Lbj = {lat: 29.889280, lng: -97.944592};
      var Alkek = {lat: 29.888865, lng: -97.943075};
      var greyFill = '#454545';
      var redFill = '#ff0000';
      var greenFill = '#0bd900';

      // The map, centered at San Marcos
      var map = new google.maps.Map(
          document.getElementById('google_map'), {zoom: 16, center: San_Marcos});

      // Markers, positioned in San Marcos
      var sanMarcosMarker = new google.maps.Marker({position: San_Marcos, map: map});
      var lbjMarker = new google.maps.Marker({position: Lbj, map: map, title: 'LBJ Student Center'});
      var alkMarker = new google.maps.Marker({position: Alkek, map: map, title: 'Alkek Library'});

      //Polygons

      //lBJ Garage
      var lbjGarageCoords = [
          {lat: 29.8900678, lng: -97.9456093},
          {lat: 29.8894963, lng: -97.9449421},
          {lat: 29.8892828, lng: -97.9451853},
          {lat: 29.8893200, lng: -97.9452287},
          {lat: 29.8892872, lng: -97.9452661},
          {lat: 29.8898217, lng: -97.9458899},
        ];

        var lbjGarage = new google.maps.Polygon({
          paths: lbjGarageCoords,
          strokeColor: greyFill,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: greyFill,
          fillOpacity: 0.35
        });
        lbjGarage.setMap(map);
        //end LBJ Garage

        //Pleasant Street Garage
        var pleasantStreetGarageCoords = [
            {lat: 29.8901117, lng: -97.9411670},
            {lat: 29.8901606, lng: -97.9409888},
            {lat: 29.8902194, lng: -97.9410085},
            {lat: 29.8903540, lng: -97.9405135},
            {lat: 29.8898840, lng: -97.9403461},
            {lat: 29.8897133, lng: -97.9409828},
            {lat: 29.8897619, lng: -97.9409969},
            {lat: 29.8897386, lng: -97.9410669}
          ];

          var pleasantStreetGarage = new google.maps.Polygon({
            paths: pleasantStreetGarageCoords,
            strokeColor: redFill,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: redFill,
            fillOpacity: 0.35
          });

          pleasantStreetGarage.setMap(map);
        //End Pleasant Street Garage

}

// Funtion to Update Map to New Location Based on User Input.
function alterMap() {

}
