ActiveAdminGeocomplete
=======================

- gem install active_admin_geocomplete

- add css file
@import "active_admin/geocomplete";

- add javascript files
#= require jquery.geocomplete
#= require active_admin/geocomplete

- render partial
<%= render "active_admin/geocomplete", :form => f %>

- pass params to partial if model has different names (defaults: latitude, longitude, address)
<%= render "active_admin/geocomplete", :form => f, :lng => 'lng', :lat => 'lat', :address => 'full_address' %>

- don't render latitude or longitude
<%= render "active_admin/geocomplete", :form => f, :lng => false, :lat => false%>
