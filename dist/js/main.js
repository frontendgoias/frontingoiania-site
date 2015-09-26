/**
 * Map
 */

$(document).ready(function(){
    buildMap();
});

var sw = document.body.clientWidth,
    bp = 550,
    $map = $('.map');
var static = "https://www.google.com.br/maps/place/CCBEU+Matriz+-+Novo+Pr%C3%A9dio/@-16.7099504,-49.2756792,15z/data=!4m2!3m1!1s0x0:0x565fae7466b637ef";
var embed = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14812.721960038562!2d-49.27567920000003!3d-16.70995041466559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x565fae7466b637ef!2sCCBEU+Matriz+-+Novo+Pr%C3%A9dio!5e0!3m2!1spt-BR!2sbr!4v1443205060367" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>';

function buildMap() {
    if(sw>bp) { //If Large Screen
        if($('.map-container').length < 1) { //If map doesn't already exist
            buildEmbed();
        }
    } else {
        if($('.static-img').length < 1) { //If static image doesn't exist
            buildStatic();
        }
    }
};

function buildEmbed() { //Build iframe view
    $('<div class="map-container"/>').html(embed).prependTo($map);
};

function buildStatic() { //Build static map
    var mapLink = $('.map-link').attr('href'),
        $img = $('<img class="static-img" />').attr('src',static);
    $('<a/>').attr('href',mapLink).html($img).prependTo($map);
}

$(window).resize(function() {
    sw = document.body.clientWidth;
    buildMap();
    google.maps.event.trigger(map, "resize");
});

