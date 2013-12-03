require 'spec_helper'

ActiveAdmin.register Store do
	form do |f|
	  f.inputs "Details" do
	    f.input :title
	    f.input :address, :as => :geocomplete
	  end
	  f.actions
	end
end
Rails.application.reload_routes!

describe 'stores', :type => :feature, :js => true do

    it "should have class 'test-class'" do
    	visit 'admin/stores'
    	save_and_open_page
    	should have_selector('input.geocomplete')   
    end
end