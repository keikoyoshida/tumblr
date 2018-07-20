Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'posts#index'
  get '/about', to: 'pages#about'

  resources :posts, only: [:new, :create, :show, :edit, :update, :destroy] do
    resources :comments, only: [:create, :destroy]
  end
end
