Rails.application.routes.draw do
  resources :users
  resources :linkbook
  get 'link/index'
  get 'link/create'
  get 'link/update'
  get 'link/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
