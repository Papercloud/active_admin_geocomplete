class GeocompleteInput < Formtastic::Inputs::TextInput

  # include Formtastic::Inputs::Base

  def input_html_options
    super.merge(:class => "geocomplete")
  end

end