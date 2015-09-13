class UsersController < ApplicationController

  #forces users to login before they can see the actions in this controller
  before_filter :authorize, :only => [:destroy, :edit, :update]

  # All Users
  def index
    @users = User.all
  end

  # Register new user - GET
  def new
    @user = User.new
  end

  # Register new user - POST
  def create
    @user = User.new(user_params)

    respond_to do |format|
    if @user.save
      session[:current_user_id] = @user.id

      format.html { redirect_to @user, notice: 'Successfully Registered.'}

      # redirect_to "/users/#{user[:id]}"
    else
      redirect_to '/signup'
    end
    end
  end

  # Show A Single User
  def show
    @user = User.find(params[:id])
  end

  # Edit User - GET
  def edit
  end

  # Edit User - PUT/PATCH
  def update
  end

  # Edit User - DELETE
  def destroy
  end

  private

  def user_params
    params.require(:users).permit(:username, :email, :password, :password_confirmation)
  end
end
