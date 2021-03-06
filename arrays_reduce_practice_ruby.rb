#  1. Start with an array of numbers and compute the sum of all the numbers.
#     For example, [5, 10, 8, 3] becomes 26.

# numbers = [40, 80, 10, 90]
# sum = 0
# i = 0
# while i < numbers.length
#   sum = sum + numbers[i]
#   i += 1
# end
# p sum

# numbers.each do |number|
#   sum = sum + number
# end
# p sum

# numbers = [1, 4, 9, 10]
# sum = numbers.reduce(0) { |sum, number| sum + number }

# p sum

# numbers = [1, 4, 10]
# sum = numbers.reduce(0) do |sum, number|
#   sum + number
# end
# p sum

# numbers.select do |number|
#   sum = sum + number
# end
# p sum

#  2. Start with an array of strings and combine them all into a single string.
#     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".

# sports = ["volleyball", "basketball", "badminton"]
# sports_string = ""

# i = 0
# while i < sports.length
#   sports_string << sports[i]
#   i += 1
# end

# p sports_string

# sports_string = ""

# sports.each do |sport|
#   sports_string = sports_string + sport
# end

# p sports_string

# sports_string = sports.reduce("") do |sports_string, sport|
#   sports_string + sport
# end

# p sports_string




#  3. Start with an array of hashes and compute the sum of the prices (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

# items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}]

# prices_sum = 0
# i = 0
# while i < items.length
#   prices_sum = prices_sum + items[i][:price]
#   i += 1
# end

# p prices_sum

# prices_sum = items.reduce(0) { |prices_sum, item| prices_sum + item[:price] }

# p prices_sum

#  4. Start with an array of numbers and compute the the minumum number.
#     For example, [5, 10, 8, 3, 9] becomes 3.

# numbers = [20, 34, 15, 19, 10]

# minumum_number = numbers[0]
# i = 0
# while i < numbers.length
#   if minumum_number > numbers[i]
#     minumum_number = numbers[i]
#   end
#   i += 1
# end

# p minumum_number

# minumum_number = numbers.reduce(numbers[0]) do |minumum_number, number|
#   if minumum_number > number
#     number
#   else
#     minumum_number
#   end
# end

# p minumum_number


#  5. Start with an array of strings and compute the total length of all the strings.
#     For example, ["volleyball", "basketball", "badminton"] becomes 29.

# strings = ["volleyball", "basketball", "badminton", "baseball"]

# total_length = 0
# i = 0
# while i < strings.length
#   total_length = total_length + strings[i].length
#   i += 1
# end

# p total_length

# total_length = 0
# strings.each do |string|
#   total_length = total_length + string.length
# end
# p total_length

# total_length = strings.reduce(0) { |total_length, string| total_length + string.length }

# p total_length


#  6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.

# items = [{name: "chair", price: 100}, {name: "pencil", price: 50}, {name: "book", price: 4}]


# lowest_price = items[0]
# i = 0
# while i < items.length
#   if lowest_price[:price] > items[i][:price]
#     lowest_price = items[i]
#   end
#   i += 1
# end

# p lowest_price



#  7. Start with an array of numbers and compute product of all the numbers.
#     For example, [5, 10, 8, 3] becomes 1200.

numbers = [10, 40, 70, 90]
product = 1
i = 0
while i < numbers.length
  product = product * numbers[i]
  i += 1
end

p product

product = numbers.reduce(1) { |product, number| product * number }

p product

product = numbers.reduce(1) do |product, number|
  product * number 
end

p product

product = 1
numbers.each do |number|
  product = product * number
end

p product

#  8. Start with an array of strings and combine them all into a single string, separated by dashes.
#     For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".

#  9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.

# 10. Start with an array of numbers and compute the maximum number.
#     For example, [5, 10, 8, 3] becomes 10.