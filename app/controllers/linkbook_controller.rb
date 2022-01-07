class LinkbookController < ApplicationController
  before_action :set_user
  before_action :set_linkbook, only: [:show, :edit, :update, :destroy]

  def index
    @linkbooks = @user.linkbooks

    render json: @linkbooks.order("created_at DESC")
  end
  
  def create
    # Clean up this .new and make params method
    @linkbook = Linkbook.new(name: params[:name], rating: 0, category: params[:category], user_id: session[:user_id], private: true)

    if @linkbook.save
      render json: @linkbook
    else
      render json: @linkbook.errors, status: :unprocessable_entity
    end
  end

  def update
    if @linkbook.update(name: params[:name] || @linkbook.name, private: params[:private], category: params[:category] || @linkbook.category)
      render json: @linkbook
    else
      render json: @linkbook.errors, status: :unprocessable_entity
    end
  end

  def destroy
    render json: @linkbook
    @linkbook.destroy
  end

  protected

  def set_user
    @user = User.find(session[:user_id])
  end

  def set_linkbook
    @linkbook = @user.linkbooks.find(params[:id])
  end
end
