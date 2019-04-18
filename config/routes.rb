Rails.application.routes.draw do
  devise_for :users
  root 'goals#index'
  resources :goals
  resources :incomes, only: [:create]
  resources :expenditures, only: [:create]
end
