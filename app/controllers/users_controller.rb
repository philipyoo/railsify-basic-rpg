class UsersController < ApplicationController

  before_action :read_user, only: [:show, :edit, :update, :destroy]

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
  end

  # Edit User - GET
  def edit
  end

  # Edit User - PUT/PATCH
  def update
    respond_to do |format|
      if @user.update(:username => params[:user][:username], :email => params[:user][:email])
        format.html { redirect_to @user, notice: 'Successfully Updated.'}
      else
        format.html { render :edit }
      end
    end
  end

  # Edit User - DELETE
  def destroy
    if (@user && @user.password == params[:confirm_password])
      @user.destroy
      session.destroy
      redirect_to '/'
    else
      format.html { render :delete }
    end
  end

  private

  def read_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:users).permit(:username, :email, :password, :password_confirmation)
  end
end
