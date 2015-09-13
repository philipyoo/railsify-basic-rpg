class Character < ActiveRecord::Base
  belongs_to :user

  validates :name, length: { minimum: 2 }
end
