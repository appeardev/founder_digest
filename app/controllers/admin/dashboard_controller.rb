class Admin::DashboardController < ApplicationController
  before_action :authenticate_user!

  def index
    # @users = User.all.order(created_at: :desc)
     @users_submissions = UserSubmission.all #.order(created_at: :desc)

  end
end
