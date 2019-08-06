Rails.application.routes.draw do
  devise_for :users
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? } #redefine
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :channels
  root to: "home#index" #redefine homepage once created
end
