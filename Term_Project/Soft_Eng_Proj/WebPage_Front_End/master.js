function initMap() {
    // The location of Uluru
      var San_Marcos = {lat: 29.8884, lng: -97.9384};
      var Lbj = {lat: 29.889280, lng: -97.944592};
      var Alkek = {lat: 29.888865, lng: -97.943075};
      // The map, centered at San Marcos
      var map = new google.maps.Map(
          document.getElementById('google_map'), {zoom: 16, center: San_Marcos});
      // The marker, positioned at San Marcos
      var sanMarcosMarker = new google.maps.Marker({position: San_Marcos, map: map});
      var lbjMarker = new google.maps.Marker({position: Lbj, map: map, title: 'LBJ Student Center'});
      var alkMarker = new google.maps.Marker({position: Alkek, map: map, title: 'Alkek Library'});

      var lbjGarageCoords = [
          {lat:29.890024, lng: -97.945568},
          {lat: 29.889455, lng: -97.944932},
          {lat: 29.889233, lng: -97.945202},
          {lat: 29.889818, lng: -97.945870},
          {lat: 29.890024, lng: -97.945568}
        ];

        var lbjGarage = new google.maps.Polygon({
          paths: lbjGarageCoords,
          strokeColor: '##b0b0b0',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '##b0b0b0',
          fillOpacity: 0.35
        });
        lbjGarage.setMap(map);
}

// Funtion to Update Map to New Location Based on User Input.
function alterMap() {

}

// function called by onclick js method.
$(document).ready(function () {
        $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});
