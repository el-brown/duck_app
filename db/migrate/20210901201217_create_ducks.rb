class CreateDucks < ActiveRecord::Migration[6.1]
  def change
    create_table :ducks do |t|
      t.string :name
      t.string :phrase

      t.timestamps
    end
  end
end
