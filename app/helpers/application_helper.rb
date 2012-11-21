module ApplicationHelper

  def good_user_agent?
    request.env["HTTP_USER_AGENT"]
  end

end
