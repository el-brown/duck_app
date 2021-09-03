class Duck < ApplicationRecord
  validates :name, :phrase, presence: true
  

end
