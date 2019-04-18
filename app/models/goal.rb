class Goal < ApplicationRecord
  validates :target, :target_save, :average_income, :target_date, :current_save, presence: true
end
