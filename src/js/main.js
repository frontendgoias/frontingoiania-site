/**
 * Map
 */

var $map = $('#map'), $googleMap;

function buildMap() {
    $('<div class="map-container"/>').prependTo($map);
    var $node = $('#map .map-container')[0];

    $googleMap = new google.maps.Map($node, {
        center: {lat: -16.707196, lng: -49.275969},
        zoom: 15,
        scrollwheel: false,
        streetViewControl: false,
        mapTypeControl: false
    });

    var service = new google.maps.places.PlacesService($googleMap);
    service.getDetails({ placeId: 'ChIJ9UUMqi_xXpMR7ze2ZnSuX1Y' }, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var infowindow = new google.maps.InfoWindow();
            var marker = new google.maps.Marker({
                map: $googleMap,
                position: place.geometry.location,
                title: 'CCBEU Matriz - Novo Prédio'
            });

            setInfoWindow = function() {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                '<br>' + place.formatted_address);
                infowindow.open($googleMap, marker);
            };
            google.maps.event.addListener(marker, 'click', function() {
                setInfoWindow();
            });
            setInfoWindow();
        }
    });
};

$(document).ready(function(){
    $(window).resize(function() {
        jQuery("#map .map-container").remove();
        buildMap();
    });
});
