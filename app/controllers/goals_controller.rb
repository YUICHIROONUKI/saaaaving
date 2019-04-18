class GoalsController < ApplicationController
  def index
    @goals = Goal.where(user_id: current_user.id)
    @goals.each do |goal|
      @date = goal.target_date
      @target = goal.target
      @save = goal.target_save
      @sallary = goal.average_income
      @created_at = goal.created_at
      @current_save = goal.current_save
    end
    @expenditure = Expenditure.new
    @income = Income.new
    incomes = []
    @incomes = Income.where(user_id: current_user.id)
    @incomes.each do |income|
      incomes << income.income
    end
    expenditures = []
    @expenditures = Expenditure.where(user_id: current_user.id)
    @expenditures.each do |expenditure|
      expenditures << expenditure.expenditure
    end
    @total = incomes.sum - expenditures.sum
    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @goal = Goal.new
  end

  def create
    if @goal = Goal.create(goal_params)
      redirect_to root_path
    else
      redirect_to new_goal_path, notice: '記入してください'
    end
  end

  def destroy
    @expenditures = Expenditure.where(user_id: current_user.id)
    @expenditures.each do |expenditure|
      expenditure.destroy
    end
    @incomes = Income.where(user_id: current_user.id)
    @incomes.each do |income|
      income.destroy
    end
    @goal = Goal.find(params[:id])
    @goal.destroy
    redirect_to root_path
  end

  private
  def goal_params
    params.require(:goal).permit(:target, :target_save, :average_income, :target_date, :current_save).merge(user_id: current_user.id)
  end
end
