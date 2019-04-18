class RemoveGoalFromExpenditure < ActiveRecord::Migration[5.2]
  def change
    remove_reference :expenditures, :goal, foreign_key: true
  end
end
