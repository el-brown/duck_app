class DucksController < ApplicationController

  def app
    render component: 'App'
  end

  #Just returning this data as json
  def index
    ducks = Duck.all
    render json: @ducks
  end


end
