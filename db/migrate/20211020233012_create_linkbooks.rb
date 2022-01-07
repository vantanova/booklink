class CreateLinkbooks < ActiveRecord::Migration[6.1]
  def change
    create_table :linkbooks do |t|
      t.string :name
      t.string :category
      t.boolean :private
      t.integer :rating
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
