$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "geocomplete_plugin/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "active_admin_geocomplete"
  s.version     = ActiveAdminGeocomplete::VERSION
  s.authors     = ["William Porter"]
  s.email       = ["willports@gmail.com"]
  s.homepage    = "http://www.papercloud.com.au"
  s.summary     = "Add geocomplete to active admin"
  s.description = ""

  s.files = Dir["{app,lib,vendor}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]

  s.add_dependency "rails", ">= 3.1"
  s.add_dependency "railties", [">= 3.1"]
end
