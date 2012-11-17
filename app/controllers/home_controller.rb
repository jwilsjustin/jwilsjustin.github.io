class HomeController < ApplicationController
  
  def index
    @tweet = Twitter.user_timeline("jwilsjustin").first.text
  end

end
