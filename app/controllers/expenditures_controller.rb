class ExpendituresController < ApplicationController
  def create
    @expenditure = Expenditure.new(expenditure_params)
    if @expenditure.save
      respond_to do |format|
        format.html {redirect_to root_path}
        format.json
      end
    else
      redirect_to root_path
    end
  end

  private
  def expenditure_params
    params.require(:expenditure).permit(:expenditure).merge(user_id: current_user.id)
  end
end
