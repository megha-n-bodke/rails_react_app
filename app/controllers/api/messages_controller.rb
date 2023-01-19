class Api::MessagesController < ApplicationController
  def index
    message = Greeting.all
    render json: message
  end
end
