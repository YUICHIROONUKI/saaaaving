class AddCurrentSaveToGoals < ActiveRecord::Migration[5.2]
  def change
    add_column :goals, :current_save, :float
  end
end
