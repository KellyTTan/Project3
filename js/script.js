
function initMap() {
  var aa = document.getElementById('map');
  var mapLocation = new google.maps.LatLng(21.283952, -157.709427);
  var mapOptions = {
    center: mapLocation,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(aa, mapOptions);
  
 
}
google.maps.event.addDomListener(window, 'load', initMap);





/*
 var myMap = new google.maps.Map(aa, options);
  

   AIzaSyAVGF1Vh1sfAwFrnm3MHu-kfgoycqt1OiA

*/
