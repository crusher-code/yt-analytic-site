class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
#   before_action :configure_parameters, if :devise_controller?
  
#   protected
  
#   def configure_permitted_parameters
#       devise_parameters_sanitzer.permit(:sign_up, keys: [:user_name])
#   end
  
end
