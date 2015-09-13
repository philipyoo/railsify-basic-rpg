class UsersController < ApplicationController

  #forces users to login before they can see the actions in this controller
  before_filter :authorize, :only => [:destroy, :edit, :update]

  def index
    #If I want to add an 'All Users' page
    @users = User.all
  end

  def create
    user = User.new(user_params)

    if user.save
      session[:user_id] = user.id
      redirect_to "/users/#{user[:id]}"
    else
      redirect_to '/signup'
    end
  end

  def new
    @user = User.new
  end

  def edit
  end

  def show
    @user = User.find(params[:id])

  end

  def update
  end

  def destroy
  end

  private

  def user_params
    params.require(:users).permit(:username, :email, :password, :password_confirmation)
  end
end
