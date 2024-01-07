/* * * * * * * * * * * * * * * * * * * * * * * * *\
        Google Search Autocomplete
\* * * * * * * * * * * * * * * * * * * * * * * * */
function initialize() {

var input = document.getElementById('gl-search-location');
var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', initialize);
