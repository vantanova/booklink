Rails.application.routes.draw do
  get 'users/restore', to: 'users#restore_user'
  delete 'users/logout', to: 'users#logout'
  resources :users
  resources :linkbook
  post 'users/login'
  get 'link/index'
  get 'link/create'
  get 'link/update'
  get 'link/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
