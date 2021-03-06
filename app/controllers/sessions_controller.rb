class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by_username(params[:username])

    if user && user.authenticate(params[:password])
      session[:current_user_id] = user.id

      redirect_to(user_path(user), notice: 'Logged in successfully.')
    else
      flash.now.alert = "Login failed."
      render action: :new
    end
  end

  def destroy
    session[:current_user_id] = nil
    redirect_to '/login'
  end
end
