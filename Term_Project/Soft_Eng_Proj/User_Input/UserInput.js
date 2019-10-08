var clearB = document.getElementById('clearButton');
clearB.addEventListener('click', clearField);

var submitB = document.getElementById('subButton');
submitB.addEventListener('click', gatherInput);

function clearField() {
  document.getElementById('latInput').value = ' ';
  document.getElementById('longInput').value = ' ';
}


function gatherInput() {
  var lat = document.getElementById('latInput').value;
  var long = document.getElementById('longInput').value;
  // store user input
  var lat_input = [];
  var long_input = [];

  if(lat && long != '' && isNumber(lat) && isNumber(long)) {

    // format for latitude coordinates
    const latitudeC = new RegExp('/^(\\+|-)?(?:90(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-8][0-9])(?:(?:\\.[0-9]{1,6})?))$/');
    // test for correct format
    if (lat.test(latitudeC) && lat != '') {
      console.log('Latitude: ' + lat);
      lat_input.push(lat_input);
      document.getElementById('latError').innerHTML = '';
    } else {
      document.getElementById('latError').innerHTML = 'Latitude must be a number e.g. ##.###';
    }

    // format for longitude coordinates
    const longitudeC = /^(\\+|-)?(?:180(?:(?:\\.0{1,6})?)|(?:[0-9]|[1-9][0-9]|1[0-7][0-9])(?:(?:\\.[0-9]{1,6})?))$/;
    // test for correct format
    if(long.test(longitudeC) && long != '') {
      console.log('Longitude: ' + long);
      lat_input.push(long_input);
      document.getElementById('longError').innerHTML = '';
    }
    else {
      document.getElementById('longError').innerHTML = 'Longitude must be a number e.g. ##.###';
    }


  }
  else {
    document.getElementById('status').innerHTML = 'Errors in form, all fields must be filled out.';
  }

}



// checks if input is a double
function isNumber(input){
  const regEx = /^-{0,1}\d*\.{0,1}\d+$/; // accepts negative inputs
  return (regEx.test(input));
}
