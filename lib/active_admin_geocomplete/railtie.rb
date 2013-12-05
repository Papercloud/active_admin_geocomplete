class Railtie < ::Rails::Railtie
  initializer "active_admin_geocomplete.setup_vendor", :after => "active_admin_geocomplete.setup", :group => :all do |app|
    vendor_path = File.expand_path("../../vendor/assets", __FILE__)
    app.config.assets.paths.push(vendor_path.to_s)

    app.config.assets.precompile += %w( active_admin/geocomplete.css )
    app.config.assets.precompile += %w( active_admin/geocomplete.js )

  end
end