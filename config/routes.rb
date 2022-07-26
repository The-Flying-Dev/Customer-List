Rails.application.routes.draw do

  
  namespace :api do 
    namespace :v1 do
      resources :customers, only: [:index, :create, :update, :destroy]
    end
  end

  root to: 'home#index'
  
end
