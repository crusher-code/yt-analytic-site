class ApplicationController < ActionController::Base
    before_action: configure_permitted, if: :devise_controler?
    
    protected 
    def configure_permitted_parameters 
        devise_parameter_santizer.permit(:sign_up, key [:username])
        devise_parameter_saniizer.permt :sigh_up, key :add_attrs
        devise_parameter_saniizer.permit :account_update, key :add_attrs
        
        
    end 
    
#   protect_from_forgery with: :exception
end
