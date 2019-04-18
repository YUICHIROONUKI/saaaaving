class RemoveGoalFromIncome < ActiveRecord::Migration[5.2]
  def change
    remove_reference :incomes, :goal, foreign_key: true
  end
end
