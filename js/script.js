
function initMap() {
  var aa = document.getElementById('map');
  var mapLocation = new google.maps.LatLng(21.427181, -157.999780);
  var mapOptions = {
    center: mapLocation,
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };

  var myMap = new google.maps.Map(aa, mapOptions);
  
  var myLatLng1 = {lat: 21.283939, lng: -157.709506};
  var myLatLng2 = {lat: 21.318911, lng: -157.871114};
  var myLatLng3 = {lat: 21.327323, lng: -158.088173};
  var myLatLng4 = {lat: 21.427181, lng: -157.999780};
  
  var contentString1 = "Costco closest to me";
  var contentString2 = "Costco second closest to me";
  var contentString3 = "Costco third closest to me";
  var contentString4 = "Costco furtest from  me";
  
  var infowindow1 = new google.maps.InfoWindow({ 
    content: contentString1
  });
   var infowindow2 = new google.maps.InfoWindow({ 
    content: contentString1
  });
   var infowindow3 = new google.maps.InfoWindow({ 
    content: contentString1
  });
   var infowindow4 = new google.maps.InfoWindow({ 
    content: contentString1
  });
  
  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: myMap,
    title: 'Costco closest to me'
  });
  var marker2 = new google.maps.Marker({
    position: myLatLng2,
    map: myMap,
    title: 'Costco second closest to me'
  });
  var marker3 = new google.maps.Marker({
    position: myLatLng3,
    map: myMap,
    title: 'Costco furtest from me'
  });
  var marker4 = new google.maps.Marker({
    position: myLatLng4,
    map: myMap,
    title: 'Costco third furtest from me'
  });
 
  marker1.addListener('click', function() {
    infowindow1.open(myMap, marker1);
  });
  marker2.addListener('click', function() {
    infowindow2.open(myMap, marker2);
  });
  marker3.addListener('click', function() {
    infowindow3.open(myMap, marker3);
  });
  marker4.addListener('click', function() {
    infowindow4.open(myMap, marker4);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);
