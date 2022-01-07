class Linkbook < ApplicationRecord
  has_many :links, dependent: :destroy
  belongs_to :user
end
