class User < ActiveRecord::Base
  has_many :characters
  has_secure_password

  validates_confirmation_of :password_digest, message: "should match confirmation", if: :password_digest
end
