$(document).ready(function(){

  $find_field = $(".find_location_input");

  //setup
  $find_field.geocomplete({
    map: ".map_canvas",
    markerOptions: {
      draggable: true
    },
    details: "form ol",
    detailsAttribute: "data-geo"
  });

  /////////////////////////////////////////////////////////
  $find_field.bind("geocode:result", function(event, result){
    // console.log("result");
    // console.log(result.address_components);
    var full_address = $("input[data-geo=formatted_address]").val();
  });

  /////////////////////////////////////////////////////////
  $find_field.bind("geocode:dragged", function(event, latLng){
    $("input[data-geo=lat]").val(latLng.lat());
    $("input[data-geo=lng]").val(latLng.lng());
    $find_field.geocomplete("find", latLng.lat() + ',' + latLng.lng()); // so we get address updated on drag as well 
  });
  /////////////////////////////////////////////////////////

  // let's use lat/long to display an existing location
  var location = $("input[data-geo=lat]").val() + ',' + $("input[data-geo=lng]").val();
  $find_field.geocomplete("find", location);

});