class LinkbookSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :private, :rating, :links
end
