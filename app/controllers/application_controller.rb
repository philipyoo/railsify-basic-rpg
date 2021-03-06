class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
  end

  # @current_user is a variable that I can use throughout all my view files
  def current_user
    @current_user ||= User.find(session[:current_user_id]) if session[:current_user_id]
  end
  helper_method :current_user

  # Use in conjunction with before_filter for any controller pages
  def authorize
    redirect_to '/login' unless current_user
  end
end
