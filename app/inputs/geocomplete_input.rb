class GeocompleteInput < Formtastic::Inputs::StringInput

  # include Formtastic::Inputs::Base

  def input_html_options
  	{
  	  :class => "find_location_input"
  	}.merge(super)
  end

end