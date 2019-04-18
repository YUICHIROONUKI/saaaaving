class IncomesController < ApplicationController
  def create
    @income = Income.new(income_params)
    if @income.save
      respond_to do |format|
        format.html {redirect_to root_path}
        format.json
      end
    else
      redirect_to root_path
    end
  end
  private
  def income_params
    params.require(:income).permit(:income).merge(user_id: current_user.id)
  end
end
