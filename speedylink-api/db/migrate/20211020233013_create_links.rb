class CreateLinks < ActiveRecord::Migration[6.1]
  def change
    create_table :links do |t|
      t.string :name
      t.string :link_url
      t.string :color
      t.references :linkbook, null: false, foreign_key: true

      t.timestamps
    end
  end
end
