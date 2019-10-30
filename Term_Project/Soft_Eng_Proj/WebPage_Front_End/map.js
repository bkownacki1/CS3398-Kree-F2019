//var opened_info = new google.maps.InfoWindow();

function initMap() {
    //var geolib = google.maps.geometry.spherical;
    var san_marcos = {lat: 29.8884, lng: -97.9384};
    /*var Lbj = {lat: 29.889280, lng: -97.944592};
    var Alkek = {lat: 29.888865, lng: -97.943075};*/
    var greyFill = '#454545';
    var redFill = '#ff0000';
    var greenFill = '#0bd900';
    var purpleFill = '#7b42c2';
    var pinkFill = '#ff45d0';

    //var for map options to reduce clutter on map initialization
    var mapOptions = {zoom: 15, center: san_marcos, mapTypeControl:true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      gestureHandling: 'greedy', navigationControl:true, mapTypeId: google.maps.MapTypeId.TERRAIN};

    // The map, centered at San Marcos
    var map = new google.maps.Map(
        document.getElementById("google_map"), mapOptions);

    //event Listener declared
    /*google.maps.event.addListener(map, 'click', function() {
      infowindow.close();
    });
    bounds = new google.maps.LatLngBounds();*/


    // Markers, positioned in San Marcos. Commented out because they clutter the screen with all the lots
    //var sanMarcosMarker = new google.maps.Marker({position: San_Marcos, map: map});
    //var lbjMarker = new google.maps.Marker({position: Lbj, map: map, title: 'LBJ Student Center'});
    //var alkMarker = new google.maps.Marker({position: Alkek, map: map, title: 'Alkek Library'});

    //Polygons

    /* ----- Parking Garages ----- */


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
        //map: map,
        paths: lbjGarageCoords,
        strokeColor: greyFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greyFill,
        fillOpacity: 0.5,
        name: "lbjGarage"
    });

lbjGarage.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:'<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">LBJ Student Center Garage</h1>'+
    '<div id="bodyContent">'+
    '<p><b>LBJ Student Center</b> is a <b>Paid</b> parking garage. ' +
    '<div class="divTable txstTable">'+
    '<div class="divTableHeading">'+
    '<div class="divTableRow">'+
    '<div class="divTableHead">Permit/Parking Type</div>' +
    '<div class="divTableHead">Spaces Available</div>' +
    '</div>'+
    '</div>'+
    '<div class="divTableBody">'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Restricted (Red)</div><div class="divTableCell">0</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Residence (Green)</div><div class="divTableCell">0</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Commuter (Purple)</div><div class="divTableCell">0</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Visitor (Paid)</div><div class="divTableCell">502</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Carpool (Pink)</div><div class="divTableCell">0</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Accessible</div><div class="divTableCell">18</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Reserved</div><div class="divTableCell">6</div></div>'+
    '<div class="divTableRow">'+
    '<div class="divTableCell">Motorcycle</div><div class="divTableCell">0</div></div>'+
    '</div>',
    maxWidth: 500
});

var icon = {
    url: "/WebImages/TransparentMarker.png",
    scaledSize: new google.maps.Size(1,1) // scaled size down to 1px x 1px
};
var marker = new google.maps.Marker({
  position:{lat: 29.8893200, lng: -97.9452287},
  map: map,
  icon:icon,
  opacity:0,
  title:'transparentmarkerliveshere'
});

var addListenerOnPolygon = function(lbjGarage){
  google.maps.event.addListener(lbjGarage, 'click', function(event){
    //alert(lbjGarage.indexID);
    infowindow.open(map, marker)
  });
}
addListenerOnPolygon(lbjGarage);

/*'<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
  '<div id="bodyContent">'+
  '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
  'sandstone rock formation in the southern part of the '+
  'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
  'south west of the nearest large town, Alice Springs; 450&#160;km '+
  '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
  'features of the Uluru - Kata Tjuta National Park. Uluru is '+
  'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
  'Aboriginal people of the area. It has many springs, waterholes, '+
  'rock caves and ancient paintings. Uluru is listed as a World '+
  'Heritage Site.</p>'+
  '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
  'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
  '(last visited June 22, 2009).</p>'+
  '</div>'+
  '</div>'*/

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

    //sanJacintoGarage
    var sanJacintoGarageCoords = [
        {lat: 29.886860, lng: -97.944279},
        {lat: 29.886958, lng: -97.943549},
        {lat: 29.886630, lng: -97.943495},
        {lat: 29.886524, lng: -97.944205}
      ];


      var sanJacintoGarage = new google.maps.Polygon({
        paths: sanJacintoGarageCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
      });


    sanJacintoGarage.setMap(map);
    //End LOTNAME Garage

    //End of Garages


    /* ----- Parking Lots ----- */

    //meadowsCom Garage
    var meadowsComCoords = [
      {lat: 29.893008, lng: -97.930034},
      {lat: 29.892953, lng: -97.929945},
      {lat: 29.892681, lng: -97.930184},
      {lat: 29.892739, lng: -97.930275}
    ];//26 parking spots for all except gold/green


      var meadowsCom = new google.maps.Polygon({
        paths: meadowsComCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
      });


    meadowsCom.setMap(map);
    //End meadowsCom Garage



    //endzoneLot
    var endzoneLotCoords = [
        {lat: 29.889658, lng: -97.925425},
        {lat: 29.889686, lng: -97.925470},
        {lat: 29.889654, lng: -97.925500},
        {lat: 29.889701, lng: -97.925581},
        {lat: 29.889747, lng: -97.925551},
        {lat: 29.889815, lng: -97.925645},
        {lat: 29.889782, lng: -97.925676},
        {lat: 29.889845, lng: -97.925771},
        {lat: 29.889884, lng: -97.925723},
        {lat: 29.889893, lng: -97.925765},
        {lat: 29.889886, lng: -97.925806},
        {lat: 29.889859, lng: -97.925854},
        {lat: 29.889832, lng: -97.925878},
        {lat: 29.889875, lng: -97.925921},
        {lat: 29.889919, lng: -97.925883},
        {lat: 29.889942, lng: -97.925818},
        {lat: 29.889949, lng: -97.925767},
        {lat: 29.889943, lng: -97.925724},
        {lat: 29.889943, lng: -97.925689},
        {lat: 29.889900, lng: -97.925611},
        {lat: 29.889879, lng: -97.925626},
        {lat: 29.889797, lng: -97.925510},
        {lat: 29.889833, lng: -97.925484},
        {lat: 29.889736, lng: -97.925348}
      ];


      var endzoneLot = new google.maps.Polygon({
        paths: endzoneLotCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    endzoneLot.setMap(map);
    //End endzoneLot

    //bobcatWest Garage
    var bobcatWestCoords = [
        {lat: 29.887938, lng: -97.927281},
        {lat: 29.889521, lng: -97.925548},
        {lat: 29.890079, lng: -97.926248},
        {lat: 29.890166, lng: -97.926317},
        {lat: 29.890207, lng: -97.926362},
        {lat: 29.890294, lng: -97.926396},
        {lat: 29.890367, lng: -97.926441},
        {lat: 29.890430, lng: -97.926501},
        {lat: 29.890487, lng: -97.926569},
        {lat: 29.890535, lng: -97.926638},
        {lat: 29.890582, lng: -97.926725},
        {lat: 29.890609, lng: -97.926813},
        {lat: 29.890625, lng: -97.926912},
        {lat: 29.890619, lng: -97.927002},
        {lat: 29.890613, lng: -97.927064},
        {lat: 29.890578, lng: -97.927160},
        {lat: 29.890518, lng: -97.927235},
        {lat: 29.890458, lng: -97.927280},
        {lat: 29.890377, lng: -97.927326},
        {lat: 29.889809, lng: -97.927450},
        {lat: 29.888996, lng: -97.927486}
      ];


      var bobcatWest = new google.maps.Polygon({
        paths: bobcatWestCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
      });


    bobcatWest.setMap(map);
    //End bobcatWest Garage

    //bobcatEast Garage
    var bobcatEastCoords = [
        {lat: 29.890528, lng: -97.924256},
        {lat: 29.891886, lng: -97.922763},
        {lat: 29.892257, lng: -97.922838},
        {lat: 29.892192, lng: -97.924311},
        {lat: 29.892064, lng: -97.924299},
        {lat: 29.892034, lng: -97.924691},
        {lat: 29.890888, lng: -97.924487},
        {lat: 29.890790, lng: -97.924460},
        {lat: 29.890698, lng: -97.924411},
        {lat: 29.890641, lng: -97.924365}
      ];


      var bobcatEast = new google.maps.Polygon({
        paths: bobcatEastCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
      });


    bobcatEast.setMap(map);
    //End bobcatEast Garage

    //Jowers Lot
    var jowersLotCoords = [
        {lat: 29.886418, lng: -97.932741},
        {lat: 29.886976, lng: -97.933439},
        {lat: 29.887165, lng: -97.933240},
        {lat: 29.886610, lng: -97.932542}
      ];


      var jowersLot = new google.maps.Polygon({
        paths: jowersLotCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    jowersLot.setMap(map);
    //End Jowers Lot

    //jowersAccessCom Lot
    var jowersAccessComCoords = [
        {lat: 29.888500, lng: -97.930564},
        {lat: 29.888413, lng: -97.930442},
        {lat: 29.887079, lng: -97.931884},
        {lat: 29.887114, lng: -97.931930},
        {lat: 29.887344, lng: -97.931687},
        {lat: 29.887394, lng: -97.931744}
      ];


      var jowersAccessCom = new google.maps.Polygon({
        paths: jowersAccessComCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
      });


    jowersAccessCom.setMap(map);
    //End jowersAccessCom Lot

    //jowersAccessRest Lot
    var jowersAccessRestCoords = [
      {lat: 29.887114, lng: -97.931930},
      {lat: 29.887079, lng: -97.931884},
      {lat: 29.886303, lng: -97.932716},
      {lat: 29.886340, lng: -97.932766}
      ];


      var jowersAccessRest = new google.maps.Polygon({
        paths: jowersAccessRestCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    jowersAccessRest.setMap(map);
    //End jowersAccessRest Lot

    //Strahan Reserve Lot
    var strahanReserveCoords = [
        {lat: 29.888958, lng: -97.933600},
        {lat: 29.889008, lng: -97.933417},
        {lat: 29.888873, lng: -97.933403},
        {lat: 29.888771, lng: -97.933323},
        {lat: 29.888676, lng: -97.933406},
        {lat: 29.888680, lng: -97.933543},
        {lat: 29.888768, lng: -97.933583}
      ];


      var strahanReserve = new google.maps.Polygon({
        paths: strahanReserveCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    strahanReserve.setMap(map);
    //End Strahan Reserve Lot

    //Sewell North Lot
    var sewellNorthCoords = [
        {lat: 29.889161, lng: -97.933318},
        {lat: 29.889721, lng: -97.933495},
        {lat: 29.889763, lng: -97.933569},
        {lat: 29.890023, lng: -97.933366},
        {lat: 29.890261, lng: -97.932826},
        {lat: 29.890155, lng: -97.932642},
        {lat: 29.890020, lng: -97.932647},
        {lat: 29.889834, lng: -97.933218},
        {lat: 29.889202, lng: -97.933040}
      ];


      var sewellNorth = new google.maps.Polygon({
        paths: sewellNorthCoords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
      });


    sewellNorth.setMap(map);
    //End Sewell North Garage

    //Ag/Sessom Garage
    var agSessCoords = [
        {lat: 29.890668, lng: -97.938149},
        {lat: 29.890695, lng: -97.938158},
        {lat: 29.890759, lng: -97.938319},
        {lat: 29.890806, lng: -97.938299},
        {lat: 29.890760, lng: -97.938179},
        {lat: 29.890773, lng: -97.938108},
        {lat: 29.890815, lng: -97.938078},
        {lat: 29.890907, lng: -97.938048},
        {lat: 29.890879, lng: -97.937950},
        {lat: 29.890764, lng: -97.937981},
        {lat: 29.890729, lng: -97.937958},
        {lat: 29.890701, lng: -97.937848},
        {lat: 29.890574, lng: -97.937882},
        {lat: 29.890642, lng: -97.938049},
        {lat: 29.890632, lng: -97.938082}
      ];


      var agSess = new google.maps.Polygon({
        paths: agSessCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    agSess.setMap(map);
    //End Ag/Sessom Garage

    //Sessom Carpool
    var sessomCarpoolCoords = [
        {lat: 29.890686, lng: -97.936828},
        {lat: 29.891248, lng: -97.936703},
        {lat: 29.891229, lng: -97.936574},
        {lat: 29.890746, lng: -97.936667},
        {lat: 29.890759, lng: -97.936740},
        {lat: 29.890696, lng: -97.936755}
      ];


      var sessomCarpool = new google.maps.Polygon({
        paths: sessomCarpoolCoords,
        strokeColor: pinkFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: pinkFill,
        fillOpacity: 0.5
      });


    sessomCarpool.setMap(map);
    //End Sessom Carpool Garage

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
        {lat: 29.890328, lng: -97.936472},
        {lat: 29.890227, lng: -97.936164},
        {lat: 29.889188, lng: -97.937022},
        {lat: 29.889347, lng: -97.937307}
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
    var jckMoon1Coords = [
        {lat: 29.888340, lng: -97.938129},
        {lat: 29.888407, lng: -97.938285},
        {lat: 29.888625, lng: -97.938023},
        {lat: 29.888558, lng: -97.937918}
    ];

    var jckMoonLot1 = new google.maps.Polygon({
        paths: jckMoon1Coords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    jckMoonLot1.setMap(map);
    //end JCK/Moon Lot 1

    // JCK/Moon Lot 2
    var jckMoon2Coords = [
        {lat: 29.888032, lng: -97.938170},
        {lat: 29.887406, lng: -97.938122},
        {lat: 29.887538, lng: -97.937518},
        {lat: 29.888099, lng: -97.937582},
        {lat: 29.888091, lng: -97.937653},
        {lat: 29.888121, lng: -97.937650},
        {lat: 29.888272, lng: -97.937489},
        {lat: 29.888497, lng: -97.937833}
    ];

    var jckMoon2Lot = new google.maps.Polygon({
        paths: jckMoon2Coords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    jckMoon2Lot.setMap(map);
    //end JCK/Moon Lot 2

    //Freeman Lot
    var freemanCoords = [
        {lat: 29.889843, lng: -97.935787},
        {lat: 29.889961, lng: -97.935865},
        {lat: 29.890068, lng: -97.935750},
        {lat: 29.890041, lng: -97.935563},
        {lat: 29.889774, lng: -97.935185},
        {lat: 29.889324, lng: -97.935414},
        {lat: 29.889347, lng: -97.935650},
        {lat: 29.889540, lng: -97.935637},
        {lat: 29.889528, lng: -97.935476},
        {lat: 29.889519, lng: -97.935481},
        {lat: 29.889521, lng: -97.935455},
        {lat: 29.889653, lng: -97.935403},
        {lat: 29.889790, lng: -97.935414},
        {lat: 29.889824, lng: -97.935612}
    ];

    var freemanLot = new google.maps.Polygon({
        paths: freemanCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    freemanLot.setMap(map);
    //end Freeman Lot

    //Physics Plant Lot
    var physPlantCoords = [
        {lat: 29.891108, lng: -97.937745},
        {lat: 29.891162, lng: -97.937941},
        {lat: 29.891056, lng: -97.937974},
        {lat: 29.890999, lng: -97.937780}
    ];

    var physPlantLot = new google.maps.Polygon({
        paths: physPlantCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    physPlantLot.setMap(map);
    //end Physics Plant Lot


    //Sessom Lot (R2)
    var sessomR2Coords = [
        {lat: 29.890987, lng: -97.937563},
        {lat: 29.891167, lng: -97.937706},
        {lat: 29.891285, lng: -97.937720},
        {lat: 29.891430, lng: -97.937661},
        {lat: 29.891515, lng: -97.937590},
        {lat: 29.891674, lng: -97.937381},
        {lat: 29.892003, lng: -97.936920},
        {lat: 29.891921, lng: -97.936845},
        {lat: 29.891989, lng: -97.936733},
        {lat: 29.891766, lng: -97.936601},
        {lat: 29.891727, lng: -97.936688},
        {lat: 29.891755, lng: -97.936716},
        {lat: 29.891470, lng: -97.937148},
        {lat: 29.891256, lng: -97.937465},
        {lat: 29.891173, lng: -97.937610},
        {lat: 29.891017, lng: -97.937500}
    ];

    var sessomR2Lot = new google.maps.Polygon({
        paths: sessomR2Coords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
    });

    sessomR2Lot.setMap(map);
    //end Sessom Lot R2

    //Sessom Lot (P5)
    var sessomP5Coords = [
        {lat: 29.890910, lng: -97.937544},
        {lat: 29.890991, lng: -97.937483},
        {lat: 29.891173, lng: -97.937610},
        {lat: 29.891256, lng: -97.937465},
        {lat: 29.891470, lng: -97.937148},
        {lat: 29.891755, lng: -97.936716},
        {lat: 29.891552, lng: -97.936569},
        {lat: 29.891132, lng: -97.937194},
        {lat: 29.890999, lng: -97.936755},
        {lat: 29.890686, lng: -97.936828},
    ];

    var sessomP5Lot = new google.maps.Polygon({
        paths: sessomP5Coords,
        strokeColor: purpleFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: purpleFill,
        fillOpacity: 0.5
    });

    sessomP5Lot.setMap(map);
    //end Sessom Lot P5

    //meadowsRest
    var meadowsRestCoords = [
        {lat: 29.894064, lng: -97.929074},
        {lat: 29.893955, lng: -97.929000},
        {lat: 29.894184, lng: -97.928675},
        {lat: 29.894653, lng: -97.929061},
        {lat: 29.894688, lng: -97.929211},
        {lat: 29.894712, lng: -97.929227},
        {lat: 29.894471, lng: -97.929606},
        {lat: 29.894402, lng: -97.929588},
        {lat: 29.894393, lng: -97.929370},
        {lat: 29.894202, lng: -97.929196},
        {lat: 29.894056, lng: -97.929398},
        {lat: 29.893861, lng: -97.929220},
        {lat: 29.893920, lng: -97.929128},
        {lat: 29.893993, lng: -97.929182}
      ];


      var meadowsRest = new google.maps.Polygon({
        paths: meadowsRestCoords,
        strokeColor: redFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: redFill,
        fillOpacity: 0.5
      });


    meadowsRest.setMap(map);
    //End meadowsRest

    //llanoDr Lot
    var llanoDrCoords = [
        {lat: 29.886226, lng: -97.949018},
        {lat: 29.886188, lng: -97.949064},
        {lat: 29.886142, lng: -97.949022},
        {lat: 29.886110, lng: -97.949055},
        {lat: 29.886039, lng: -97.948999},
        {lat: 29.885988, lng: -97.948936},
        {lat: 29.885905, lng: -97.948824},
        {lat: 29.885861, lng: -97.948722},
        {lat: 29.885849, lng: -97.948649},
        {lat: 29.885877, lng: -97.948596},
        {lat: 29.885982, lng: -97.948480},
        {lat: 29.886016, lng: -97.948516},
        {lat: 29.886125, lng: -97.948462},
        {lat: 29.886287, lng: -97.948639},
        {lat: 29.886339, lng: -97.948584},
        {lat: 29.886709, lng: -97.949021},
        {lat: 29.886804, lng: -97.949097},
        {lat: 29.886839, lng: -97.949191},
        {lat: 29.886850, lng: -97.949293},
        {lat: 29.886949, lng: -97.949425},
        {lat: 29.886835, lng: -97.949557},
        {lat: 29.886718, lng: -97.949402},
        {lat: 29.886668, lng: -97.949223},
        {lat: 29.886599, lng: -97.949152},
        {lat: 29.886491, lng: -97.949030},
        {lat: 29.886520, lng: -97.948990},
        {lat: 29.886297, lng: -97.948738},
        {lat: 29.886283, lng: -97.948754},
        {lat: 29.886449, lng: -97.948939},
        {lat: 29.886332, lng: -97.949086},
        {lat: 29.886101, lng: -97.948845},
        {lat: 29.886230, lng: -97.948690},
        {lat: 29.886091, lng: -97.948554},
        {lat: 29.886060, lng: -97.948565},
        {lat: 29.886099, lng: -97.948611},
        {lat: 29.886029, lng: -97.948688},
        {lat: 29.886111, lng: -97.948800},
        {lat: 29.886078, lng: -97.948841}
      ];


      var llanoDr = new google.maps.Polygon({
        paths: llanoDrCoords,
        strokeColor: greenFill,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: greenFill,
        fillOpacity: 0.5
      });


    llanoDr.setMap(map);
    //End llanoDr Lot

    //cdcLot
    var cdcLotCoords = [
      {lat: 29.886920, lng: -97.949460},
      {lat: 29.887143, lng: -97.949731},
      {lat: 29.887081, lng: -97.949893},
      {lat: 29.886918, lng: -97.949819},
      {lat: 29.886841, lng: -97.949730},
      {lat: 29.886781, lng: -97.949614},
      {lat: 29.886835, lng: -97.949557},
    ];

    var cdcLot = new google.maps.Polygon({
      paths: cdcLotCoords,
      strokeColor: redFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: redFill,
      fillOpacity: 0.5
    });


  cdcLot.setMap(map);
  //End cdcLot Garage

  //academyStreetLot
  var academyStreetLotCoords = [
      {lat: 29.885996, lng: -97.947283},
      {lat: 29.885973, lng: -97.947325},
      {lat: 29.885949, lng: -97.947315},
      {lat: 29.885969, lng: -97.947271},
      {lat: 29.885757, lng: -97.947114},
      {lat: 29.885732, lng: -97.947152},
      {lat: 29.885708, lng: -97.947152},
      {lat: 29.885681, lng: -97.947122},
      {lat: 29.885545, lng: -97.947271},
      {lat: 29.885752, lng: -97.947499},
      {lat: 29.885729, lng: -97.947536},
      {lat: 29.885803, lng: -97.947634},
      {lat: 29.885844, lng: -97.947596},
      {lat: 29.885918, lng: -97.947647},
      {lat: 29.886019, lng: -97.947467},
      {lat: 29.885989, lng: -97.947441},
      {lat: 29.886056, lng: -97.947323}
    ];


    var academyStreetLot = new google.maps.Polygon({
      paths: academyStreetLotCoords,
      strokeColor: greenFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: greenFill,
      fillOpacity: 0.5
    });


  academyStreetLot.setMap(map);
  //End LOTNAME Garage

  //sanJacintoLot
  var sanJacintoLotCoords = [
      {lat: 29.887091, lng: -97.944380},
      {lat: 29.887215, lng: -97.943479},
      {lat: 29.887044, lng: -97.943448},
      {lat: 29.887004, lng: -97.943875},
      {lat: 29.887054, lng: -97.943891},
      {lat: 29.887045, lng: -97.943959},
      {lat: 29.886996, lng: -97.943953},
      {lat: 29.886934, lng: -97.944354}
    ];


    var sanJacintoLot = new google.maps.Polygon({
      paths: sanJacintoLotCoords,
      strokeColor: greenFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: greenFill,
      fillOpacity: 0.5
    });


  sanJacintoLot.setMap(map);
  //End sanJacintoLot

  //scienceLot
  var scienceLotCoords = [
      {lat: 29.888145, lng: -97.946062},
      {lat: 29.888346, lng: -97.945821},
      {lat: 29.888284, lng: -97.945751},
      {lat: 29.888320, lng: -97.945707},
      {lat: 29.888171, lng: -97.945558},
      {lat: 29.888083, lng: -97.945632},
      {lat: 29.887976, lng: -97.945545},
      {lat: 29.887554, lng: -97.946052},
      {lat: 29.887625, lng: -97.946124},
      {lat: 29.887537, lng: -97.946269},
      {lat: 29.887669, lng: -97.946350},
      {lat: 29.887635, lng: -97.946623},
      {lat: 29.887579, lng: -97.946615},
      {lat: 29.887570, lng: -97.946672},
      {lat: 29.887630, lng: -97.946685},
      {lat: 29.887608, lng: -97.946837},
      {lat: 29.887557, lng: -97.946833},
      {lat: 29.887510, lng: -97.947204},
      {lat: 29.887561, lng: -97.947218},
      {lat: 29.887602, lng: -97.947416},
      {lat: 29.887898, lng: -97.947700},
      {lat: 29.888128, lng: -97.947382},
      {lat: 29.888152, lng: -97.947083},
      {lat: 29.887936, lng: -97.947067},
      {lat: 29.887715, lng: -97.947140},
      {lat: 29.887715, lng: -97.947209},
      {lat: 29.887644, lng: -97.947228},
      {lat: 29.887645, lng: -97.947200},
      {lat: 29.887688, lng: -97.947204},
      {lat: 29.887745, lng: -97.946686},
      {lat: 29.887691, lng: -97.946678},
      {lat: 29.887709, lng: -97.946497},
      {lat: 29.887738, lng: -97.946383},
      {lat: 29.887748, lng: -97.946276},
      {lat: 29.887878, lng: -97.946049},
      {lat: 29.888060, lng: -97.946078},
      {lat: 29.888109, lng: -97.946018}
    ];


    var scienceLot = new google.maps.Polygon({
      paths: scienceLotCoords,
      strokeColor: redFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: redFill,
      fillOpacity: 0.5
    });


  scienceLot.setMap(map);
  //End scienceLot

  //mitteLot
  var mitteLotCoords = [
      {lat: 	29.889889, lng: -97.948485},
      {lat: 	29.889703, lng:	-97.948310},
      {lat: 	29.889647, lng:	-97.948337},
      {lat: 	29.889584, lng: -97.948289},
      {lat: 	29.889640, lng: -97.948257},
      {lat: 	29.889535, lng:	-97.948157},
      {lat: 	29.889489, lng: -97.948192},
      {lat: 	29.889445, lng: -97.948157},
      {lat: 	29.889366, lng: -97.948064},
      {lat: 	29.889345, lng:	-97.948053},
      {lat: 	29.889310, lng: -97.948053},
      {lat: 	29.889277, lng: -97.948072},
      {lat: 	29.889256, lng: -97.948015},
      {lat: 	29.889191, lng: -97.948042},
      {lat: 	29.889212, lng: -97.948080},
      {lat: 	29.889184, lng: -97.948104},
      {lat: 	29.889154, lng: -97.948077},
      {lat: 	29.889110, lng: -97.948149},
      {lat: 	29.889156, lng: -97.948171},
      {lat: 	29.889131, lng: -97.948216},
      {lat: 	29.889082, lng: -97.948305},
      {lat: 	29.889082, lng: -97.948348},
      {lat: 	29.889021, lng: -97.948383},
      {lat: 	29.889042, lng: -97.948422},
      {lat: 	29.889079, lng: -97.948481},
      {lat: 	29.889139, lng: -97.948549},
      {lat: 	29.889200, lng: -97.948591},
      {lat: 	29.889253, lng: -97.948640},
      {lat: 	29.889328, lng: -97.948709},
      {lat: 	29.889400, lng: -97.948787},
      {lat: 	29.889472, lng: -97.948833},
      {lat: 	29.889519, lng: -97.948866},
      {lat: 	29.889621, lng: -97.948687},
      {lat: 	29.889640, lng: -97.948684},
      {lat: 	29.889661, lng: -97.948695},
      {lat: 	29.889735, lng: -97.948764}
    ];


    var mitteLot = new google.maps.Polygon({
      paths: mitteLotCoords,
      strokeColor: redFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: redFill,
      fillOpacity: 0.5
    });


  mitteLot.setMap(map);
  //End mitteLot

  //fcsLot
  var fcsLotCoords = [
      {lat:	29.889712, lng:	-97.949025},
      {lat:	29.889566, lng:	-97.948888},
      {lat:	29.888754, lng:	-97.949894},
      {lat:	29.888889, lng:	-97.950060},
      {lat:	29.889333, lng:	-97.949534},
      {lat:	29.889291, lng:	-97.949489},
      {lat:	29.889310, lng:	-97.949467},
      {lat:	29.889354, lng:	-97.949505},
      {lat:	29.889393, lng:	-97.949459},
      {lat:	29.889349, lng:	-97.949408},
      {lat:	29.889386, lng:	-97.949347},
      {lat:	29.889421, lng:	-97.949376}
    ];


    var fcsLot = new google.maps.Polygon({
      paths: fcsLotCoords,
      strokeColor: redFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: redFill,
      fillOpacity: 0.5
    });


  fcsLot.setMap(map);
  //End fcsLot

  //collegeInnLot
  var collegeInnLotCoords = [
      {lat: 	29.889408		, lng: 	-97.946044	},
      {lat: 	29.889440		, lng: 	-97.946009	},
      {lat: 	29.889688		, lng: 	-97.946300	},
      {lat: 	29.889598		, lng: 	-97.946710	},
      {lat: 	29.889488		, lng: 	-97.946625	},
      {lat: 	29.889533		, lng: 	-97.946562	},
      {lat: 	29.889436		, lng: 	-97.946450	},
      {lat: 	29.889496		, lng: 	-97.946354	},
      {lat: 	29.889349		, lng: 	-97.946189	},
      {lat: 	29.889361		, lng: 	-97.946175	},
      {lat: 	29.889314		, lng: 	-97.946126	}
    ];


    var collegeInnLot = new google.maps.Polygon({
      paths: collegeInnLotCoords,
      strokeColor: greenFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: greenFill,
      fillOpacity: 0.5
    });


  collegeInnLot.setMap(map);
  //End collegeInnLot

  //educationLot
  var educationLotCoords = [
      new google.maps.LatLng(29.887180,-97.938660),
      new google.maps.LatLng(29.887448,-97.938706),
      new google.maps.LatLng(29.887482,-97.938634),
      new google.maps.LatLng(29.887499,-97.938645),
      new google.maps.LatLng(29.887506,-97.938685),
      new google.maps.LatLng(29.887499,-97.938721),
      new google.maps.LatLng(29.887462,-97.938723),
      new google.maps.LatLng(29.887432,-97.938937),
      new google.maps.LatLng(29.887480,-97.938941),
      new google.maps.LatLng(29.887444,-97.939015),
      new google.maps.LatLng(29.887547,-97.939045),
      new google.maps.LatLng(29.887589,-97.938975),
      new google.maps.LatLng(29.887594,-97.938901),
      new google.maps.LatLng(29.887546,-97.938861),
      new google.maps.LatLng(29.887590,-97.938848),
      new google.maps.LatLng(29.887639,-97.938520),
      new google.maps.LatLng(29.887595,-97.938473),
      new google.maps.LatLng(29.887573,-97.938436),
      new google.maps.LatLng(29.887539,-97.938421),
      new google.maps.LatLng(29.887516,-97.938419),
      new google.maps.LatLng(29.887539,-97.938363),
      new google.maps.LatLng(29.887365,-97.938326),
      new google.maps.LatLng(29.887304,-97.938383),
      new google.maps.LatLng(29.887282,-97.938376),
      new google.maps.LatLng(29.887269,-97.938347),
      new google.maps.LatLng(29.887277,-97.938304),
      new google.maps.LatLng(29.887213,-97.938292)
    ];


    var educationLot = new google.maps.Polygon({
      paths: educationLotCoords,
      strokeColor: redFill,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: redFill,
      fillOpacity: 0.5
    });

    educationLot.setMap(map);
    //End educationLot
};

// Funtion to Update Map to New Location Based on User Input.
function alterMap() {

}




/*function showInfo(event){
    opened_info.close();
    if (opened_info.name != this.infowindow.name){
      this.infowindow.setPosition(event.LatLng);
      this.infowindow.open(map);
      opened_info = this.infowindow;
    }
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
