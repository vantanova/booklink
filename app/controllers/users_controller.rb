class UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy, :restore_user, :logout]

  def restore_user
    if @user.nil?
      render json: {status: "error", code: 4000, message: "no user found" }
    else
      render json: @user
    end
  end


  def login
    @user = User.find_by(email: params[:email])
    if @user.nil?
      render json: {status: "error", code: 4000, message: "no user found" }
    elsif @user.password == params[:password]
      session[:user_id] = @user.id
      render json: @user
    else
      render json: {status: "error", code: 5000, message: "incorrect password" }
    end
  end

  # POST /users
  def create
    if User.exists?(email: params[:email])
      return
    end
    
    @user = User.new(user_params)
    
    @user.password = params[:password]

    
    if @user.save
      session[:user_id] = @user.id
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  def logout
    session[:user_id] = nil
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(session[:user_id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:email, :password, :username)
    end
end
