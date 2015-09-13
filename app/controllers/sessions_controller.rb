class SessionsController < ApplicationController
  def new
  end

  def create
    p "*" * 100
    # p session
    p "*" * 100
    p params[:username]
    user = User.find_by_username(params[:username])
    p "*" * 100
    user = User.find_by(username: params[:username])
    p "?" * 100
    p user

    session[:current_user_id] = user.id
    p "*" * 100
    p session[:current_user_id]

    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to "/users/#{user.id}"
    else
      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'
  end
end
