class LinkbookController < ApplicationController
  before_action :set_linkbook, only: [:edit, :update, :destroy]

  def show
    user_email = params[:id] + '.com'
    user = User.find_by(email: user_email)
    @linkbooks = user.linkbooks

    render json: @linkbooks
  end

  def create
    if params[:name].empty?
       render json: { successful: false}
       return
    end
    user = User.find_by(email: params[:email])
    @linkbook = Linkbook.new(name: params[:name], rating: 0, user_id: user.id, category: params[:category], private: true)

    if @linkbook.save
      render json: { successful: true}
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
    @linkbook.destroy
  end

  protected

  def set_linkbook
    @linkbook = Linkbook.find(params[:id])
  end
end
