# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"

names = ["Donald Duck", "Daffy Duck", "Jemima Puddle-Duck", "Duck Dodgers", 
"Daisy Duck", "Ugly Duckling", "Orville", "Rubber Ducky", "Aflac Duck", "Ping"]

10.times do |i|
  Duck.create(
    name: names.sample,
    phrase: Faker::GreekPhilosophers.quote
  )
end