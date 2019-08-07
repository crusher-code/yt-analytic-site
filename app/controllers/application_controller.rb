class ApplicationController < ActionController::Base
    before_action :configure_permitted, if: :devise_controller?
    
    protected 
    def configure_permitted_parameters 
        devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
        devise_parameter_sanitizer.permit :sign_up, keys: :add_attrs
        devise_parameter_sanitizer.permit :account_update, keys: :add_attrs
        
    end 
    
#   protect_from_forgery with: :exception
end
