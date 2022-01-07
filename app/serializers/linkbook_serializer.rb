class LinkbookSerializer < ActiveModel::Serializer
  attributes :id, :data

  def data
    { name: object.name,
      category: object.category,
      private: object.private,
      rating: object.rating,
      links: object.links }
  end
end
