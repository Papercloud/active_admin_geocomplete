class Railtie < ::Rails::Railtie
  initializer "geocomplete_plugin.setup_vendor", :after => "geocomplete_plugin.setup", :group => :all do |app|
    vendor_path = File.expand_path("../../vendor/assets", __FILE__)
    app.config.assets.paths.push(vendor_path.to_s)

    app.config.assets.precompile += %w( geocomplete_plugin/geocomplete.css )
    app.config.assets.precompile += %w( geocomplete_plugin/geocomplete_plugin.js )

  end
end