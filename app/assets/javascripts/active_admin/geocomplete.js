$(document).ready(function() {

  $(".aageocomplete_wrapper").each(function() {
    $wrapper = $(this);
    $find_field = $(".find_location_input", $wrapper);
    $map_canvas = $(".map_canvas", $wrapper);

    $icon = $('#icon-url').val() || null;
    $location = $('#default-location').val() || null;

    //setup
    $find_field.geocomplete({
      map: $map_canvas,
      markerOptions: {
        draggable: true,
        icon: $icon
      },
      location: $location,
      details: $wrapper,
      detailsAttribute: "data-geo"
    });

    /////////////////////////////////////////////////////////
    $find_field.bind("geocode:result", function(event, result) {
      wrapper = $(event.target).closest('.aageocomplete_wrapper')
      var full_address = $("input[data-geo=formatted_address]", wrapper).val();
    });
    /////////////////////////////////////////////////////////
    $find_field.bind("geocode:dragged", function(event, latLng) {
      wrapper = $(event.target).closest('.aageocomplete_wrapper')

      $("input[data-geo=lat]", wrapper).val(latLng.lat());
      $("input[data-geo=lng]", wrapper).val(latLng.lng());
      // $find_field.geocomplete("find", latLng.lat() + ',' + latLng.lng()); // so we get address updated on drag as well
    });
    /////////////////////////////////////////////////////////

    // let's use lat/long to display an existing location
    var location = $("input[data-geo=lat]", $wrapper).val() + ',' + $("input[data-geo=lng]", $wrapper).val();
    $find_field.geocomplete("find", location);
  });
});
