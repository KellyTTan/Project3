
function initMap() {
  var aa = document.getElementById('map');
  var location = new google.maps.LatLng(21.283952, -157.709427);
  var options = {
    center: location,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(aa, options);
  
 
  
  
}
//google.maps.event.addDomListener(window, 'load', init);
  

///////.   AIzaSyAVGF1Vh1sfAwFrnm3MHu-kfgoycqt1OiA
