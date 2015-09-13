Rails.application.routes.draw do

  root 'application#home'

  resources :users
  resource :session

  get '/' => 'application#home'
  get '/signup' => 'users#new'

  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'


end
