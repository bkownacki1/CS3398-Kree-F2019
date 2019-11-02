function initMap() {

    var san_marcos = {lat: 29.8884, lng: -97.9384};
    /*var Lbj = {lat: 29.889280, lng: -97.944592};
    var Alkek = {lat: 29.888865, lng: -97.943075};*/
    var greyFill = '#454545';
    var redFill = '#ff0000';
    var greenFill = '#0bd900';
    var purpleFill = '#7b42c2';
    var pinkFill = '#ff45d0';

    //var for map styles. This makes the orange restaurant points of interest less noticible while not really effecting the school ones.
    var mapStyles =
    [{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{
        saturation: -70
      }]
    }];

    //var for map options to reduce clutter on map initialization
    var mapOptions = {zoom: 16,
      center: san_marcos,
      mapTypeControl:true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      gestureHandling: 'greedy',
      navigationControl:true,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      styles: mapStyles
    };



    // The map, centered at San Marcos
    var map = new google.maps.Map(
        document.getElementById("google_map"), mapOptions);

    // Markers, positioned in San Marcos. Commented out because they clutter the screen with all the lots
    //var sanMarcosMarker = new google.maps.Marker({position: San_Marcos, map: map});
    //var lbjMarker = new google.maps.Marker({position: Lbj, map: map, title: 'LBJ Student Center'});
    //var alkMarker = new google.maps.Marker({position: Alkek, map: map, title: 'Alkek Library'});

    //subtitles and blurbs for each polygon's InfoWindow. Each lot/garage needs a uniqie one because each has unique data.
    var lbjSubtitle = '<div id="bodyContent"><p><b>LBJ Student Center</b> is a <b>Paid</b> parking garage. ';
    var lbjBlurb = "This section will contain information about best and worst parking times and other tips specific to LBJ Student Center Garage.";

    var pleasantSubtitle = '<div id="bodyContent"><p><b>Pleasant Street Garage</b> is a <b>Red Permit Only</b> parking garage. ';
    var pleasantBlurb = "This section will contain information about best and worst parking times and other tips specific to Pleasant Street Garage.";

    var alkekSubtitle ='<div id="bodyContent"><p><b>Alkek Garage</b> is a <b>Red Permit Only</b> parking garage. ';
    var alkekBlurb = "This section will contain information about best and worst parking times and other tips specific to Alkek Garage.";

    var academySubtitle ='<div id="bodyContent"><p><b>Academy Street Garage</b> etc... ';
    var academyBlurb = "This section will contain information about best and worst parking times and other tips specific to Academy Street Garage.";

    var towerGarageSubtitle = '<div id="bodyContent"><p><b>Tower Garage</b> etc... ';
    var towerGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to Tower Garage.";

    var egsGarageSubtitle = '<div id="bodyContent"><p><b>Edward Gary Street Garage</b> etc... ';
    var egsGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to Edward Gary Street Garage.";

    var matthewsStreetGarageSubtitle = '<div id="bodyContent"><p><b>Matthews Street Garage</b> etc... ';
    var matthewsStreetGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to Matthews Street Garage.";

    var woodsStreetGarageSubtitle = '<div id="bodyContent"><p><b>Woods Street Garage</b> etc... ';
    var woodsStreetGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to Woods Street Garage.";

    var sanJacintoGarageSubtitle = '<div id="bodyContent"><p><b>San Jacinto Garage</b> etc... ';
    var sanJacintoGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to San Jacinto Garage.";

    var meadowsCenSubtitle = '<div id="bodyContent"><p><b>Meadows Center Lot</b> etc... ';
    var meadowsCenBlurb = "This section will contain information about best and worst parking times and other tips specific to Meadows Center Lot.";

    var endzoneLotSubtitle = '<div id="bodyContent"><p><b>Endzone Complex Lot</b> etc... ';
    var endzoneLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Endzone Complex Lot.";

    var bobcatWestSubtitle = '<div id="bodyContent"><p><b>Bobcat Staduim West Lot</b> etc... ';
    var bobcatWestBlurb = "This section will contain information about best and worst parking times and other tips specific to Bobcat Staduim West Lot.";

    var bobcatEastSubtitle = '<div id="bodyContent"><p><b>Bobcat Staduim East Lot</b> etc... ';
    var bobcatEastBlurb = "This section will contain information about best and worst parking times and other tips specific to Bobcat Staduim East Lot.";

    var jowersLotSubtitle = '<div id="bodyContent"><p><b>Jowers Lot</b> etc... ';
    var jowersLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Jowers Lot.";

    var jowersAccessComSubtitle = '<div id="bodyContent"><p><b>Jowers Access Road Commuter Spaces</b> etc... ';
    var jowersAccessComBlurb = "This section will contain information about best and worst parking times and other tips specific to Jowers Access Road Commuter Spaces.";

    var jowersAccessRestSubtitle = '<div id="bodyContent"><p><b>Jowers Access Road Red/Restricted Spaces</b> etc... ';
    var jowersAccessRestBlurb = "This section will contain information about best and worst parking times and other tips specific to Jowers Access Road Red/Restricted Spaces.";

    var strahanReserveSubtitle = '<div id="bodyContent"><p><b>Strahan Reserve Lot</b> etc... ';
    var strahanReserveBlurb = "This section will contain information about best and worst parking times and other tips specific to Strahan Reserve Lot.";

    var sewellNorthSubtitle = '<div id="bodyContent"><p><b>Sewell North Lot</b> etc... ';
    var sewellNorthBlurb = "This section will contain information about best and worst parking times and other tips specific to Sewell North Lot.";

    var agSessSubtitle = '<div id="bodyContent"><p><b>Ag./Sessom Lot</b> etc... ';
    var agSessBlurb = "This section will contain information about best and worst parking times and other tips specific to Ag. / Sessom Lot.";

    var sessomCarpoolSubtitle = '<div id="bodyContent"><p><b>Sessom Lot (Carpool)</b> etc... ';
    var sessomCarpoolBlurb = "This section will contain information about best and worst parking times and other tips specific to Sessom Lot (Carpool).";

    var coliseumLotSubtitle = '<div id="bodyContent"><p><b>Coliseum Lot</b> etc... ';
    var coliseumLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Coliseum Lot.";

    var strahanSubtitle = '<div id="bodyContent"><p><b>Strahan Lot</b> etc... ';
    var strahanBlurb = "This section will contain information about best and worst parking times and other tips specific to Strahan Lot.";

    var strahanExpansionSubtitle = '<div id="bodyContent"><p><b>Strahan Expansion Lot</b> etc... ';
    var strahanExpansionBlurb = "This section will contain information about best and worst parking times and other tips specific to Strahan Expansion Lot.";

    var speckGarageSubtitle = '<div id="bodyContent"><p><b>Speck Street Garage</b> etc... ';
    var speckGarageBlurb = "This section will contain information about best and worst parking times and other tips specific to Speck Street Garage.";

    var stateLotSubtitle = '<div id="bodyContent"><p><b>State Street Lot</b> etc... ';
    var stateLotBlurb = "This section will contain information about best and worst parking times and other tips specific to State Street Lot.";

    var aquaLotSubtitle = '<div id="bodyContent"><p><b>Aqua Sports Lot</b> etc... ';
    var aquaLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Aqua Sports Lot.";

    var jckSessomLotSubtitle = '<div id="bodyContent"><p><b>JCK/Sessom Lot</b> etc... ';
    var jckSessomLotBlurb = "This section will contain information about best and worst parking times and other tips specific to JCK/Sessom Lot.";

    var jckMoonLot1Subtitle = '<div id="bodyContent"><p><b>JCK/Moon Lot</b> etc... ';
    var jckMoonLot1Blurb = "This section will contain information about best and worst parking times and other tips specific to JCK/Moon Lot.";

    var jckMoonLot2Subtitle = '<div id="bodyContent"><p><b>JCK/Moon Lot</b> etc... ';
    var jckMoonLot2Blurb = "This section will contain information about best and worst parking times and other tips specific to JCK/Moon Lot.";

    var freemanLotSubtitle = '<div id="bodyContent"><p><b>Freeman Lot</b> etc... ';
    var freemanLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Freeman Lot.";

    var physPlantLotSubtitle = '<div id="bodyContent"><p><b>Physical Plant Lot</b> etc... ';
    var physPlantLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Physical Plant Lot.";

    var sessomR2LotSubtitle = '<div id="bodyContent"><p><b>Sessom Lot (Red/Restricted)</b> etc... ';
    var sessomR2LotBlurb = "This section will contain information about best and worst parking times and other tips specific to Sessom (Red/Restricted) Lot.";

    var sessomP5LotSubtitle = '<div id="bodyContent"><p><b>Sessom Lot (Commuter)</b> etc... ';
    var sessomP5LotBlurb = "This section will contain information about best and worst parking times and other tips specific to Meadows Center Lot.";

    var meadowsRestSubtitle = '<div id="bodyContent"><p><b>Meadows Center Lot</b> etc... ';
    var meadowsRestBlurb = "This section will contain information about best and worst parking times and other tips specific to Meadows Center Lot.";

    var llanoDrSubtitle = '<div id="bodyContent"><p><b>Llano Drive Lot</b> etc... ';
    var llanoDrBlurb = "This section will contain information about best and worst parking times and other tips specific to Llano Drive Lot.";

    var cdcLotSubtitle = '<div id="bodyContent"><p><b>CDC Lot</b> etc... ';
    var cdcLotBlurb = "This section will contain information about best and worst parking times and other tips specific to CDC Lot.";

    var academyStreetLotSubtitle = '<div id="bodyContent"><p><b>Academy Street Lot</b> etc... ';
    var academyStreetLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Academy Street Lot.";

    var sanJacintoLotSubtitle = '<div id="bodyContent"><p><b>San Jacinto Hall Lot</b> etc... ';
    var sanJacintoLotBlurb = "This section will contain information about best and worst parking times and other tips specific to San Jacinto Hall Lot.";

    var scienceLotSubtitle = '<div id="bodyContent"><p><b>Science Lot</b> etc... ';
    var scienceLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Science Lot.";

    var mitteLotSubtitle = '<div id="bodyContent"><p><b>Roy F. Mitte Lot</b> etc... ';
    var mitteLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Roy F. Mitte Lot.";

    var fcsLotSubtitle = '<div id="bodyContent"><p><b>Family and Consumer Sciences (FCS) Lot</b> etc... ';
    var fcsLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Family and Consumer Sciences (FCS) Lot.";

    var collegeInnLotSubtitle = '<div id="bodyContent"><p><b>College Inn Lot</b> etc... ';
    var collegeInnLotBlurb = "This section will contain information about best and worst parking times and other tips specific to College Inn Lot.";

    var educationLotSubtitle = '<div id="bodyContent"><p><b>Education Lot</b> etc... ';
    var educationLotBlurb = "This section will contain information about best and worst parking times and other tips specific to Education Lot.";

    //array of polygon coordinates, corresponging colors, name, and data to populate the InfoWindow
    var polygonData=[
      [[{lat: 29.8900678, lng: -97.9456093},
        {lat: 29.8894963, lng: -97.9449421},
        {lat: 29.8892828, lng: -97.9451853},
        {lat: 29.8893200, lng: -97.9452287},
        {lat: 29.8892872, lng: -97.9452661},
        {lat: 29.8898217, lng: -97.9458899}], greyFill, greyFill, "LBJ Student Center Garage", lbjSubtitle, lbjBlurb],

      [[{lat: 29.8901117, lng: -97.9411670},
        {lat: 29.8901606, lng: -97.9409888},
        {lat: 29.8902194, lng: -97.9410085},
        {lat: 29.8903540, lng: -97.9405135},
        {lat: 29.8898840, lng: -97.9403461},
        {lat: 29.8897133, lng: -97.9409828},
        {lat: 29.8897619, lng: -97.9409969},
        {lat: 29.8897386, lng: -97.9410669}], redFill, redFill, "Pleasant Street Garage", pleasantSubtitle, pleasantBlurb],

      [[{lat: 29.888409, lng: -97.945534},
        {lat: 29.888222, lng: -97.945216},
        {lat: 29.888474, lng: -97.945015},
        {lat: 29.888530, lng: -97.944618},
        {lat: 29.888763, lng: -97.944420},
        {lat: 29.888763, lng: -97.944323},
        {lat: 29.888372, lng: -97.943744},
        {lat: 29.888423, lng: -97.943363},
        {lat: 29.888473, lng: -97.943365},
        {lat: 29.888945, lng: -97.944068},
        {lat: 29.888808, lng: -97.945232}], redFill, redFill, "Alkek Garage", alkekSubtitle, alkekBlurb],

      [[{lat: 29.8858812, lng: -97.9484560},
        {lat: 29.8855960, lng: -97.9482378},
        {lat: 29.8860449, lng: -97.9474318},
        {lat: 29.8863217, lng: -97.9476402},
        {lat: 29.8858812, lng: -97.9484560}], greenFill, greenFill, "Academy Street Garage", academySubtitle, academyBlurb],

      [[{lat: 29.8872721, lng: -97.9428673},
        {lat: 29.8873380, lng: -97.9424180},
        {lat: 29.8870985, lng: -97.9423712},
        {lat: 29.8870868, lng: -97.9424511},
        {lat: 29.8870542, lng: -97.9424770},
        {lat: 29.8870099, lng: -97.9424684},
        {lat: 29.8870272, lng: -97.9423507},
        {lat: 29.8868095, lng: -97.9423083},
        {lat: 29.8867994, lng: -97.9423774},
        {lat: 29.8867468, lng: -97.9423671},
        {lat: 29.8866901, lng: -97.9427536}], greenFill, greenFill, "Tower Garage", towerGarageSubtitle, towerGarageBlurb],

      [[{lat: 29.8860084, lng: -97.9401804},
        {lat: 29.8861121, lng: -97.9393341},
        {lat: 29.8857419, lng: -97.9392737},
        {lat: 29.8856381, lng: -97.9401199},
        {lat: 29.8860084, lng: -97.9401804}], greyFill, greyFill, "Edward Gary Street Garage", egsGarageSubtitle, egsGarageBlurb],

      [[{lat: 29.8908337, lng: -97.9442989},
        {lat: 29.8914284, lng: -97.9436525},
        {lat: 29.8910673, lng: -97.9432105},
        {lat: 29.8904751, lng: -97.9438572}], redFill, greenFill, "Matthews Street Garage", matthewsStreetGarageSubtitle, matthewsStreetGarageBlurb],

      [[{lat: 29.8876366, lng: -97.9444842},
        {lat: 29.8872725, lng: -97.9444201},
        {lat: 29.8874029, lng: -97.9434346},
        {lat: 29.8877671, lng: -97.9434987}], redFill, greenFill, "Woods Street Garage", woodsStreetGarageSubtitle, woodsStreetGarageBlurb],

      [[{lat: 29.886860, lng: -97.944279},
        {lat: 29.886958, lng: -97.943549},
        {lat: 29.886630, lng: -97.943495},
        {lat: 29.886524, lng: -97.944205}], greenFill, greenFill, "San Jacinto Garage", sanJacintoGarageSubtitle, sanJacintoGarageBlurb],

      [[{lat: 29.893008, lng: -97.930034},
        {lat: 29.892953, lng: -97.929945},
        {lat: 29.892681, lng: -97.930184},
        {lat: 29.892739, lng: -97.930275}], purpleFill, purpleFill, "Meadows Center Lot", meadowsCenSubtitle, meadowsCenBlurb],

      [[{lat: 29.889658, lng: -97.925425},
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
        {lat: 29.889736, lng: -97.925348}], redFill, redFill, "Endzone Complex Lot", endzoneLotSubtitle, endzoneLotBlurb],

      [[{lat: 29.887938, lng: -97.927281},
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
        {lat: 29.888996, lng: -97.927486}], purpleFill, purpleFill, "Bobcat Stadium West", bobcatWestSubtitle, bobcatWestBlurb],

      [[{lat: 29.890528, lng: -97.924256},
        {lat: 29.891886, lng: -97.922763},
        {lat: 29.892257, lng: -97.922838},
        {lat: 29.892192, lng: -97.924311},
        {lat: 29.892064, lng: -97.924299},
        {lat: 29.892034, lng: -97.924691},
        {lat: 29.890888, lng: -97.924487},
        {lat: 29.890790, lng: -97.924460},
        {lat: 29.890698, lng: -97.924411},
        {lat: 29.890641, lng: -97.924365}], purpleFill, purpleFill, "Bobcat Stadium East", bobcatEastSubtitle, bobcatEastBlurb],

      [[{lat: 29.886418, lng: -97.932741},
        {lat: 29.886976, lng: -97.933439},
        {lat: 29.887165, lng: -97.933240},
        {lat: 29.886610, lng: -97.932542}], redFill, redFill, "Jowers Lot", jowersLotSubtitle, jowersLotBlurb],

      [[{lat: 29.888500, lng: -97.930564},
        {lat: 29.888413, lng: -97.930442},
        {lat: 29.887079, lng: -97.931884},
        {lat: 29.887114, lng: -97.931930},
        {lat: 29.887344, lng: -97.931687},
        {lat: 29.887394, lng: -97.931744}], purpleFill, purpleFill, "Jowers Access Commuter Street Parking", jowersAccessComSubtitle, jowersAccessComBlurb],

      [[{lat: 29.887114, lng: -97.931930},
        {lat: 29.887079, lng: -97.931884},
        {lat: 29.886303, lng: -97.932716},
        {lat: 29.886340, lng: -97.932766}], redFill, redFill, "Jowers Access Red/Restricted Street Parking", jowersAccessRestSubtitle, jowersAccessRestBlurb],

      [[{lat: 29.888958, lng: -97.933600},
        {lat: 29.889008, lng: -97.933417},
        {lat: 29.888873, lng: -97.933403},
        {lat: 29.888771, lng: -97.933323},
        {lat: 29.888676, lng: -97.933406},
        {lat: 29.888680, lng: -97.933543},
        {lat: 29.888768, lng: -97.933583}], redFill, redFill, "Strahan Reserve Lot", strahanReserveSubtitle, strahanReserveBlurb],

      [[{lat: 29.889161, lng: -97.933318},
        {lat: 29.889721, lng: -97.933495},
        {lat: 29.889763, lng: -97.933569},
        {lat: 29.890023, lng: -97.933366},
        {lat: 29.890261, lng: -97.932826},
        {lat: 29.890155, lng: -97.932642},
        {lat: 29.890020, lng: -97.932647},
        {lat: 29.889834, lng: -97.933218},
        {lat: 29.889202, lng: -97.933040}], purpleFill, purpleFill, "Sewell North Lot", sewellNorthSubtitle, sewellNorthBlurb],

      [[{lat: 29.890668, lng: -97.938149},
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
        {lat: 29.890632, lng: -97.938082}], redFill, redFill, "Ag./Sessom Lot", agSessSubtitle, agSessBlurb],

      [[{lat: 29.890686, lng: -97.936828},
        {lat: 29.891248, lng: -97.936703},
        {lat: 29.891229, lng: -97.936574},
        {lat: 29.890746, lng: -97.936667},
        {lat: 29.890759, lng: -97.936740},
        {lat: 29.890696, lng: -97.936755}], pinkFill, pinkFill, "Sessom Lot (Carpool)", sessomCarpoolSubtitle, sessomCarpoolBlurb],

      [[{lat: 29.8915272, lng: -97.9272164},
        {lat: 29.8900493, lng: -97.9303774},
        {lat: 29.8897241, lng: -97.9301635},
        {lat: 29.8896459, lng: -97.9303832},
        {lat: 29.8899651, lng: -97.9305897},
        {lat: 29.8895878, lng: -97.9314066},
        {lat: 29.8886130, lng: -97.9303165}], purpleFill, purpleFill, "Coliseum Lot", coliseumLotSubtitle, coliseumLotBlurb],

      [[{lat: 29.8877768, lng: -97.9314838},
        {lat: 29.8878112, lng: -97.9315238},
        {lat: 29.8877771, lng: -97.9315628},
        {lat: 29.8879876, lng: -97.9318072},
        {lat: 29.8880186, lng: -97.9317716},
        {lat: 29.8880470, lng: -97.9318046},
        {lat: 29.8886265, lng: -97.9311376},
        {lat: 29.8883667, lng: -97.9308240}], purpleFill, purpleFill, "Strahan Lot", strahanSubtitle, strahanBlurb],

      [[{lat: 29.8886265, lng: -97.9311376},
        {lat: 29.8883667, lng: -97.9308240},
        {lat: 29.8885541, lng: -97.9306175},
        {lat: 29.8885813, lng: -97.9306503},
        {lat: 29.8886162, lng: -97.9306117},
        {lat: 29.8888239, lng: -97.9308624},
        {lat: 29.8887996, lng: -97.9308891},
        {lat: 29.8888246, lng: -97.9309193}], redFill, redFill, "Strahan Expansion Lot", strahanExpansionSubtitle, strahanExpansionBlurb],

      [[{lat: 29.890242, lng: -97.952948},
        {lat: 29.890929, lng: -97.953720},
        {lat: 29.891269, lng: -97.953310},
        {lat: 29.890610, lng: -97.952505}], greenFill, purpleFill, "Speck Street Garage", speckGarageSubtitle, speckGarageBlurb],

      [[{lat: 29.889996, lng: -97.937737},
        {lat: 29.889530, lng: -97.937551},
        {lat: 29.890028, lng: -97.937063},
        {lat: 29.890156, lng: -97.937115}], redFill, redFill, "State Street Lot", stateLotSubtitle, stateLotBlurb],

      [[{lat: 29.890581, lng: -97.937429},
        {lat: 29.890297, lng: -97.937099},
        {lat: 29.890267, lng: -97.937289},
        {lat: 29.890422, lng: -97.937346},
        {lat: 29.890437, lng: -97.937423}], redFill, redFill, "Aqua Sports Lot", aquaLotSubtitle, aquaLotBlurb],

      [[{lat: 29.890328, lng: -97.936472},
        {lat: 29.890227, lng: -97.936164},
        {lat: 29.889188, lng: -97.937022},
        {lat: 29.889347, lng: -97.937307}], redFill, redFill, "JCK/Sessom Lot", jckSessomLotSubtitle, jckSessomLotBlurb],

      [[{lat: 29.888340, lng: -97.938129},
        {lat: 29.888407, lng: -97.938285},
        {lat: 29.888625, lng: -97.938023},
        {lat: 29.888558, lng: -97.937918}], redFill, redFill, "JCK/Moon Lot", jckMoonLot1Subtitle, jckMoonLot1Blurb],

      [[{lat: 29.888032, lng: -97.938170},
        {lat: 29.887406, lng: -97.938122},
        {lat: 29.887538, lng: -97.937518},
        {lat: 29.888099, lng: -97.937582},
        {lat: 29.888091, lng: -97.937653},
        {lat: 29.888121, lng: -97.937650},
        {lat: 29.888272, lng: -97.937489},
        {lat: 29.888497, lng: -97.937833}], redFill, redFill, "JCK/Moon Lot", jckMoonLot2Subtitle, jckMoonLot2Blurb],

      [[{lat: 29.889843, lng: -97.935787},
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
        {lat: 29.889824, lng: -97.935612}], redFill, redFill, "Freeman Lot", freemanLotSubtitle, freemanLotBlurb],

      [[{lat: 29.891108, lng: -97.937745},
        {lat: 29.891162, lng: -97.937941},
        {lat: 29.891056, lng: -97.937974},
        {lat: 29.890999, lng: -97.937780}], redFill, redFill, "Physical Plant Lot", physPlantLotSubtitle, physPlantLotBlurb],

      [[{lat: 29.890987, lng: -97.937563},
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
        {lat: 29.891017, lng: -97.937500}], redFill, redFill, "Sessom Lot (Red/Restricted)", sessomR2LotSubtitle, sessomR2LotBlurb],

      [[{lat: 29.890910, lng: -97.937544},
        {lat: 29.890991, lng: -97.937483},
        {lat: 29.891173, lng: -97.937610},
        {lat: 29.891256, lng: -97.937465},
        {lat: 29.891470, lng: -97.937148},
        {lat: 29.891755, lng: -97.936716},
        {lat: 29.891552, lng: -97.936569},
        {lat: 29.891132, lng: -97.937194},
        {lat: 29.890999, lng: -97.936755},
        {lat: 29.890686, lng: -97.936828}], purpleFill, purpleFill, "Sessom Lot (Commuter)", sessomP5LotSubtitle, sessomP5LotBlurb],

      [[{lat: 29.894064, lng: -97.929074},
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
        {lat: 29.893993, lng: -97.929182}], redFill, redFill, "Meadows Center Lot", meadowsRestSubtitle, meadowsRestBlurb],

      [[{lat: 29.886226, lng: -97.949018},
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
        {lat: 29.886078, lng: -97.948841}], greenFill, greenFill, "Llano Drive Lot", llanoDrSubtitle, llanoDrBlurb],

      [[  {lat: 29.886920, lng: -97.949460},
        {lat: 29.887143, lng: -97.949731},
        {lat: 29.887081, lng: -97.949893},
        {lat: 29.886918, lng: -97.949819},
        {lat: 29.886841, lng: -97.949730},
        {lat: 29.886781, lng: -97.949614},
        {lat: 29.886835, lng: -97.949557}], redFill, redFill, "CDC Lot", cdcLotSubtitle, cdcLotBlurb],

      [[{lat: 29.885996, lng: -97.947283},
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
        {lat: 29.886056, lng: -97.947323}], greenFill, greenFill, "Academy Street Lot", academyStreetLotSubtitle, academyStreetLotBlurb],

      [[{lat: 29.887091, lng: -97.944380},
        {lat: 29.887215, lng: -97.943479},
        {lat: 29.887044, lng: -97.943448},
        {lat: 29.887004, lng: -97.943875},
        {lat: 29.887054, lng: -97.943891},
        {lat: 29.887045, lng: -97.943959},
        {lat: 29.886996, lng: -97.943953},
        {lat: 29.886934, lng: -97.944354}], greenFill, greenFill, "San Jacinto Lot", sanJacintoLotSubtitle, sanJacintoLotBlurb],

      [[{lat: 29.888145, lng: -97.946062},
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
        {lat: 29.888109, lng: -97.946018}], redFill, redFill, "Science Lot", scienceLotSubtitle, scienceLotBlurb],

      [[{lat: 	29.889889, lng: -97.948485},
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
        {lat: 	29.889735, lng: -97.948764}], redFill, redFill, "Roy F. Mitte Lot", mitteLotSubtitle, mitteLotBlurb],

      [[{lat:	29.889712, lng:	-97.949025},
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
        {lat:	29.889421, lng:	-97.949376}], redFill, redFill, "Family and Consumer Sciences Lot", fcsLotSubtitle, fcsLotBlurb],

      [[{lat: 	29.889408		, lng: 	-97.946044	},
        {lat: 	29.889440		, lng: 	-97.946009	},
        {lat: 	29.889688		, lng: 	-97.946300	},
        {lat: 	29.889598		, lng: 	-97.946710	},
        {lat: 	29.889488		, lng: 	-97.946625	},
        {lat: 	29.889533		, lng: 	-97.946562	},
        {lat: 	29.889436		, lng: 	-97.946450	},
        {lat: 	29.889496		, lng: 	-97.946354	},
        {lat: 	29.889349		, lng: 	-97.946189	},
        {lat: 	29.889361		, lng: 	-97.946175	},
        {lat: 	29.889314		, lng: 	-97.946126	}], greenFill, greenFill, "College Inn Lot", collegeInnLotSubtitle, collegeInnLotBlurb],

      [[new google.maps.LatLng(29.887180,-97.938660), //these are formatted differently b/c I found a tool to make drawing polygons easier and this is the format it outputs in
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
        new google.maps.LatLng(29.887213,-97.938292)], redFill, redFill, "Education Lot", educationLotSubtitle, educationLotBlurb]
];

    var icon = {
        url: "./WebImages/TransparentMarker.png",
        scaledSize: new google.maps.Size(1,1) // scaled size down to 1px x 1px
    };

      var polygon;
      var marker;
      var infowindow = new google.maps.InfoWindow();
      var tableOutline;

      //polygonData[i][0] = coordinates
      //polygonData[i][1] = stroke color
      //polygonData[i][2] = fill color
      //polygonData[i][3] = garage NAME
      //polygonData[i][4] = garage SUBTITLE
      //polygonData[i][5] = garage BLURB
      for(var i=0; i<polygonData.length; i++){

        polygon = new google.maps.Polygon({
              paths: polygonData[i][0],
              strokeColor: polygonData[i][1],
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: polygonData[i][2],
              fillOpacity: 0.5,
              name: polygonData[i][3]
        });

        marker = new google.maps.Marker({
          position:polygonData[i][0][3],
          map: map,
          icon:icon,
          opacity:0,
        });

        google.maps.event.addListener(polygon, 'click', (function(marker, i) {
             return function(){
               infowindow.setContent((//'<div id="content">'+ uncommenting this will cause the infowindow to be way too tall.
                                '<div id="siteNotice">'+
                                '</div>'+
                                '<h3 id="firstHeading" class="firstHeading">' + polygonData[i][3] + '</h3>'+
                                '<div id="bodyContent">'+
                                polygonData[i][4] +
                                '<div class="divTable txstTable">'+
                                '<div class="divTableHeading">'+
                                '<div class="divTableRow">'+
                                '<div class="divTableHead">Permit/Parking Type</div>' +
                                '<div class="divTableHead">Spaces Available</div>' +
                                '</div>'+
                                '</div>'+
                                '<div class="divTableBody">'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#ff0000">■</font>Restricted (Red)</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#0bd900">■</font>Residence (Green)</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#7b42c2">■</font>Commuter (Purple)</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#454545">■</font>Visitor (Paid)</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#ff45d0">■</font>Carpool (Pink)</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="blue">■</font>Accessible</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="#ab0000">■</font>Reserved</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '<div class="divTableRow">'+
                                '<div class="divTableCell"><font color="orange">■</font>Motorcycle</div><div class="divTableCell">##DATABASE REFERENCE HERE##</div></div>'+
                                '</div></div><br>') + "" + polygonData[i][5]);
               infowindow.setOptions({maxWidth:500});
               infowindow.open(map, marker);
          }
        })(marker, i));
        polygon.setMap(map);
      }
};

// Funtion to Update Map to New Location Based on User Input.
function alterMap() {

}
