class CreateGoals < ActiveRecord::Migration[5.2]
  def change
    create_table :goals do |t|
      t.string :target, null: false
      t.integer :target_save, null: false
      t.integer :average_income, null: false
      t.datetime :target_date
      t.timestamps
    end
  end
end
