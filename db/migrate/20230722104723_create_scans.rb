class CreateScans < ActiveRecord::Migration[7.0]
  def change
    create_table :scans do |t|
      t.string :title
      t.text :transcriptions
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
