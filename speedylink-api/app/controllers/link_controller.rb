class LinkController < ApplicationController
  def index
    @links = Link.all

    render json: @links
  end

  def create
  end

  def update
  end

  def delete
  end
end
