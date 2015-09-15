class CharactersController < ApplicationController
  before_filter :authorize

  skip_before_action :verify_authenticity_token

  before_action :read_character, only: [:show, :edit, :update, :destroy]

  # GET - All Characters
  def index
    @characters = Character.all
  end

  # GET - Display new character creation form
  def new
    @user = User.find(params[:user_id])
    @character = Character.new
  end

  # POST - Create new character
  def create
    @character = Character.new

    @character.name = params[:name]
    @character.atk = params[:attack]
    @character.def = params[:defense]
    @character.hp = 80
    @character.xp = 0
    @character.level = 1
    @character.unassigned = params[:unassigned]
    @character.user_id = @current_user.id


    respond_to do |format|
      if @character.save
        format.html { redirect_to user_path(@current_user), notice: 'Successfully Created New Character.'}
      else
        redirect_to "/users/#{@current_user}"
      end
    end
  end

  # GET - Display single character
  def show
  end

  # GET - Display edit character form
  def edit
  end

  # PUT/PATCH - Edit Character
  def update
    p params
    # respond_to do |format|
    #   if @user.update(:name => params[:user][:username], :email => params[:user][:email])
    #     format.html { redirect_to @user, notice: 'Successfully Updated.'}
    #   else
    #     format.html { render :edit }
    #   end
    # end
  end

  # DELETE - Delete Character
  def destroy
  end

  private

  def read_character
    @character = Character.find(params[:id])
  end

  def character_params
    params.require(:characters).permit(:name)
  end
end
