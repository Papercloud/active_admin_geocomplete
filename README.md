ActiveAdminGeocomplete
=======================

- Add jQuery geocomplete to Active Admin

Credit goes to http://ubilabs.github.io/geocomplete/ for geocomplete.js
## Installation

	gem 'active_admin_geocomplete' , github: 'papercloud/active_admin_geocomplete'

Include css file to active_admin.css.scss

	@import "active_admin/geocomplete";

Include javascript files to active_admin.js.coffee

	#= require jquery.geocomplete
	#= require active_admin/geocomplete

Render partial 

	render "active_admin/geocomplete", :form => f

## Passing options

If model has different names for lat, lng or address (defaults: latitude, longitude, address)

	render "active_admin/geocomplete", :form => f, :lng => 'lng', :lat => 'lat', :address => 'full_address'

Disable latitude or longitude fields

	render "active_admin/geocomplete", :form => f, :lng => false, :lat => false
