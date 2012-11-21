class ContentsController < ApplicationController

  def index
    @twitter_user = Twitter.user("jwilsjustin")
    if @twitter_user
      @tweet = view_context.auto_link(@twitter_user.status.text).html_safe
    else
      @tweet = "(nothing found)"
    end
  end

  def resume
  end

  def portfolio
  end

  def contact
  end

end
