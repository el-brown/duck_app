class DucksController < ApplicationController

  def app
    render component: 'App'
  end

  #Storing all Duck data from the database in an instance variable - ducks
  def index
    ducks = Duck.all
    render json: ducks
  end

  def create
    duck = Duck.new(duck_params)
    if(duck.save)
      render json: duck
    else
      render json: {errors: duck.errors }, status: :unprocessable_entity
    end
  end

  def update
    @duck = Duck.find(params[:id])
    if(@duck.update(duck_params))
      render json: @duck
    else
      render json: {errors: duck.errors }, status: :unprocessable_entity
    end
  end


  def destroy
    @duck = Duck.find(params[:id])
    render json: @duck.destroy
  end

  private

  def duck_params
    params.require(:duck).permit(:name, :phrase)
  end

end
