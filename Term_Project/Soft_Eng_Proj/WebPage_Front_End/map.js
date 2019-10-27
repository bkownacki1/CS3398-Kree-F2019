function initMap() {
    // The location of Uluru
    var San_Marcos = {lat: 29.8884, lng: -97.9384};
    var Lbj = {lat: 29.889280, lng: -97.944592};
    var Alkek = {lat: 29.888865, lng: -97.943075};
    var greyFill = '#454545';
    var redFill = '#ff0000';
    var greenFill = '#0bd900';
    var purpleFill = '#7b42c2';
    var pinkFill = '#ff45d0';


    // The map, centered at San Marcos
    var map = new google.maps.Map(
        document.getElementById('google_map'), {zoom: 16, center: San_Marcos});

    // Markers, positioned in San Marcos
    var sanMarcosMarker = new google.maps.Marker({position: San_Marcos, map: map});
    var lbjMarker = new google.maps.Marker({position: Lbj, map: map, title: 'LBJ Student Center'});
    var alkMarker = new google.maps.Marker({position: Alkek, map: map, title: 'Alkek Library'});

    //Polygons

    /* ----- Parking Garages ----- */

    //San Marcos Hall Garage
    var smHallGarageCoords = [
        {lat: 29.885595, lng: -97.948152},
        {lat: 29.885873, lng: -97.948373},
        {lat: 29.886317, lng: -97.947596},
        {lat: 29.886043, lng: -97.947370}
    ];

    var smHallGarage = new google.maps.Polygon({
        paths: smHallGarageCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    smHallGarage.setMap(map);
    //End San Marcos Hall Garage

    //lBJ Garage
    var lbjGarageCoords = [
        {lat: 29.8900678, lng: -97.9456093},
        {lat: 29.8894963, lng: -97.9449421},
        {lat: 29.8892828, lng: -97.9451853},
        {lat: 29.8893200, lng: -97.9452287},
        {lat: 29.8892872, lng: -97.9452661},
        {lat: 29.8898217, lng: -97.9458899}
    ];

    var lbjGarage = new google.maps.Polygon({
        paths: lbjGarageCoords,
        strokeColor: greyFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greyFill,
        fillOpacity: 0.5
    });

    lbjGarage.setMap(map);
    //End LBJ Garage

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
        fillOpacity: 0.5
    });

    pleasantStreetGarage.setMap(map);
    //End Pleasant Street Garage


    //Alkek Garage
    var alkekGarageCoords = [
        {lat: 29.888409, lng: -97.945534},
        {lat: 29.888222, lng: -97.945216},
        {lat: 29.888474, lng: -97.945015},
        {lat: 29.888530, lng: -97.944618},
        {lat: 29.888763, lng: -97.944420},
        {lat: 29.888763, lng: -97.944323},
        {lat: 29.888372, lng: -97.943744},
        {lat: 29.888423, lng: -97.943363},
        {lat: 29.888473, lng: -97.943365},
        {lat: 29.888945, lng: -97.944068},
        {lat: 29.888808, lng: -97.945232}
    ];


    var alkekGarage = new google.maps.Polygon({
        paths: alkekGarageCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    alkekGarage.setMap(map);
    //End Alkek Garage


    //Academy Street Garage
    var academyStreetGarageCoords = [
        {lat: 29.8858812, lng: -97.9484560},
        {lat: 29.8855960, lng: -97.9482378},
        {lat: 29.8860449, lng: -97.9474318},
        {lat: 29.8863217, lng: -97.9476402},
        {lat: 29.8858812, lng: -97.9484560}
    ];

    var academyStreetGarage = new google.maps.Polygon({
        paths: academyStreetGarageCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    academyStreetGarage.setMap(map);
    //End Academy Street Garage

    //Tower Garage
    var towerGarageCoords = [
        {lat: 29.8872721, lng: -97.9428673},
        {lat: 29.8873380, lng: -97.9424180},
        {lat: 29.8870985, lng: -97.9423712},
        {lat: 29.8870868, lng: -97.9424511},
        {lat: 29.8870542, lng: -97.9424770},
        {lat: 29.8870099, lng: -97.9424684},
        {lat: 29.8870272, lng: -97.9423507},
        {lat: 29.8868095, lng: -97.9423083},
        {lat: 29.8867994, lng: -97.9423774},
        {lat: 29.8867468, lng: -97.9423671},
        {lat: 29.8866901, lng: -97.9427536}
        //{lat: , lng: -}
    ];

    var towerGarage = new google.maps.Polygon({
        paths: towerGarageCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    towerGarage.setMap(map);
    //End Tower Garage

    //Edward Gary Street Garage
    var egsGarageCoords = [
        {lat: 29.8860084, lng: -97.9401804},
        {lat: 29.8861121, lng: -97.9393341},
        {lat: 29.8857419, lng: -97.9392737},
        {lat: 29.8856381, lng: -97.9401199},
        {lat: 29.8860084, lng: -97.9401804}
    ];

    var egsGarage = new google.maps.Polygon({
        paths: egsGarageCoords,
        strokeColor: greyFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    egsGarage.setMap(map);
    //End Edward Gary Street Garage.


    //Matthews Street Garage
    var matthewsStreetGarageCoords = [
        {lat: 29.8908337, lng: -97.9442989},
        {lat: 29.8914284, lng: -97.9436525},
        {lat: 29.8910673, lng: -97.9432105},
        {lat: 29.8904751, lng: -97.9438572}
    ];


    var matthewsStreetGarage = new google.maps.Polygon({
        paths: matthewsStreetGarageCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    matthewsStreetGarage.setMap(map);
    //End Matthews Street Garage


    //Woods Street Garage
    var woodsStreetGarageCoords = [
        {lat: 29.8876366, lng: -97.9444842},
        {lat: 29.8872725, lng: -97.9444201},
        {lat: 29.8874029, lng: -97.9434346},
        {lat: 29.8877671, lng: -97.9434987}
    ];


    var woodsStreetGarage = new google.maps.Polygon({
        paths: woodsStreetGarageCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
    });

    woodsStreetGarage.setMap(map);
    //End Woods Street Garage


    //End of Garages

    /* ----- Parking Lots ----- */

    //Coliseum Lot
    var coliseumLotCoords = [
        {lat: 29.8915272, lng: -97.9272164},
        {lat: 29.8900493, lng: -97.9303774},
        {lat: 29.8897241, lng: -97.9301635},
        {lat: 29.8896459, lng: -97.9303832},
        {lat: 29.8899651, lng: -97.9305897},
        {lat: 29.8895878, lng: -97.9314066},
        {lat: 29.8886130, lng: -97.9303165}
    ];

    var coliseumLot = new google.maps.Polygon({
        paths: coliseumLotCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
    });

    coliseumLot.setMap(map);
    //End Coliseum Lot

    //Strahan Lot
    var strahanLotCoords = [
        {lat: 29.8877768, lng: -97.9314838},
        {lat: 29.8878112, lng: -97.9315238},
        {lat: 29.8877771, lng: -97.9315628},
        {lat: 29.8879876, lng: -97.9318072},
        {lat: 29.8880186, lng: -97.9317716},
        {lat: 29.8880470, lng: -97.9318046},
        {lat: 29.8886265, lng: -97.9311376},
        {lat: 29.8883667, lng: -97.9308240}
    ];

    var strahanLot = new google.maps.Polygon({
        paths: strahanLotCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
    });

    strahanLot.setMap(map);
    //End Strahan Lot

    //Strahan Expansion Lot
    var strahanExpansionCoords = [
        {lat: 29.8886265, lng: -97.9311376},
        {lat: 29.8883667, lng: -97.9308240},
        {lat: 29.8885541, lng: -97.9306175},
        {lat: 29.8885813, lng: -97.9306503},
        {lat: 29.8886162, lng: -97.9306117},
        {lat: 29.8888239, lng: -97.9308624},
        {lat: 29.8887996, lng: -97.9308891},
        {lat: 29.8888246, lng: -97.9309193}
    ];

    var strahanExpansion = new google.maps.Polygon({
        paths: strahanExpansionCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    strahanExpansion.setMap(map);
    //End Strahan Expansion Lot

    //Spek parking lot
    var spekLotCoords = [
        {lat: 29.890242, lng: -97.952948},
        {lat: 29.890929, lng: -97.953720},
        {lat: 29.891269, lng: -97.953310},
        {lat: 29.890610, lng: -97.952505}
    ];

    var spekLot = new google.maps.Polygon({
        paths: spekLotCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
    });

    spekLot.setMap(map);
    //End Spek Lot

    //State Street lot
    var stateStCoords = [
        {lat: 29.889996, lng: -97.937737},
        {lat: 29.889530, lng: -97.937551},
        {lat: 29.890028, lng: -97.937063},
        {lat: 29.890156, lng: -97.937115}
    ];

    var stateLot = new google.maps.Polygon({
        paths: stateStCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    stateLot.setMap(map);

    //Aqua Sports Lot
    var aquaLotCoords = [
        {lat: 29.890581, lng: -97.937429},
        {lat: 29.890297, lng: -97.937099},
        {lat: 29.890267, lng: -97.937289},
        {lat: 29.890422, lng: -97.937346},
        {lat: 29.890437, lng: -97.937423}
    ];

    var aquaLot = new google.maps.Polygon({
        paths: aquaLotCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    aquaLot.setMap(map);
    //end Aqua lot

    // JCK/Sessom Lot
    var jckSessomCoords = [
        {lat: 29.890286, lng: -97.936530},
        {lat: 29.890141, lng: -97.936205},
        {lat: 29.889169, lng: -97.937096},
        {lat: 29.889317, lng: -97.937360}
    ];

    var jckSessomLot = new google.maps.Polygon({
        paths: jckSessomCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    jckSessomLot.setMap(map);
    //end JCK/Sessom Lot

    // JCK/Moon Lot 1
    var jckMoonCoords = [
        {lat: 29.888340, lng: -97.938129},
        {lat: 29.888407, lng: -97.938285},
        {lat: 29.888625, lng: -97.938023},
        {lat: 29.888558, lng: -97.937918}
    ];

    var jckMoonLot = new google.maps.Polygon({
        paths: jckMoonCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    jckMoonLot.setMap(map);
    //end JCK/Moon Lot 1




}

// Funtion to Update Map to New Location Based on User Input.
function alterMap() {

}


/* lot prototype
//LOTNAME Garage
var LOTNAMECoords = [
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -},
    {lat: , lng: -}
  ];


  var LOTNAME = new google.maps.Polygon({
    paths: LOTNAMECoords,
    strokeColor: COLORFill,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: COLORFill,
    fillOpacity: 0.5
  });


LOTNAME.setMap(map);
//End LOTNAME Garage
*/
