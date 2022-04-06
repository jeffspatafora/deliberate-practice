#  1. Start with an array of numbers and create a new array with only the numbers less than 20.
#     For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].

# numbers = [7, 4, 33, 80, 6, 10, 88, 19]
# new_numbers = []
# numbers.each do |number|
#   if number < 20
#     new_numbers << number
#   end
# end

# p new_numbers


#  2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
#     For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].

# strings = ["who", "you", "what", "hello", "when", "yesterday", "where", "home", "why", "idk", "how", "who cares"]

# new_strings = []

# i = 0
# while i < strings.length
#   if strings[i][0].downcase == "w"
#     new_strings << strings[i]
#   end
#   i += 1
# end

# p new_strings 

#  3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

# items = [
#   {name: "chair", price: 100}, 
#   {name: "pencil", price: 1}, 
#   {name: "book", price: 4},
#   {name: "laptop", price: 1500},
#   {name: "tv", price: 500},
  
# ]
# new_items = []

# i = 0
# while i < items.length
#   if items[i][:price] > 5
#     new_items << items[i]
#   end
#   i += 1
# end

# p new_items


#  4. Start with an array of numbers and create a new array with only the even numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].

# numbers = [2, 4, 5, 1, 8, 9, 7, 10, 15, 14, 20, 23, 18, 32]
# new_numbers = []

# i = 0
# while i < numbers.length
#   if numbers[i].even?
#     new_numbers << numbers[i]
#   end
#   i += 1
# end

# p new_numbers

# numbers.each do |number|
#   if number % 2 == 0
#     new_numbers << number
#   end
# end

# p new_numbers

# new_numbers = numbers.select do |number|
#   number % 2 == 0
# end

# p new_numbers



#  5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
#     For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].

# strings = ["a", "man", "a", "plan", "a", "canal", "panama", "history", "phrases", "are", "fun"]
# new_strings = []

# i = 0
# while i < strings.length
#   if strings[i].length < 4
#     new_strings << strings[i]
#   end
#   i += 1
# end

# p new_strings


# new_strings = strings.select do |string|
#   string.length < 4
# end

# p new_strings

#  6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].

# items = [b
#   {name: "chair", price: 100}, 
#   {name: "pencil", price: 1}, 
#   {name: "book", price: 4}
# ]

# new_items = []

# items.each do |item|
#   if item[:name].length < 6
#     new_items << item
#   end
# end

# p new_items

# new_items = items.select do |item|
#   item[:name].length < 6
# end

# p new_items

#  7. Start with an array of numbers and create a new array with only the numbers less than 10.
#     For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].

#  8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
#     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].

# strings = ["big", "little", "good", "bad", "Baseball", "Hockey", "football"]

# new_strings = []

# i = 0
# while i < strings.length
#   if strings[i][0].downcase != "b"
#     new_strings << strings[i]
#   end
#   i += 1
# end

# p new_strings

# new_strings = strings.select do |string|
#   string[0].downcase != "b"
# end

# p new_strings

#  9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
#     For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].

# items = [{name: "chair", price: 9}, {name: "pencil", price: 1}, {name: "book", price: 4}]

# new_items = []

# i = 0
# while i < items.length
#   if items[i][:price] < 10
#     new_items << items[i]
#   end
#   i += 1
# end

# p new_items

# new_items = items.select do |item|
#   item[:price] < 10
# end

# p new_items


# 10. Start with an array of numbers and create a new array with only the odd numbers.
#     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].


numbers = [2, 4, 5, 1, 8, 9, 7]

new_numbers = numbers.select do |number|
  number % 2 == 1
end
p new_numbers

new_numbers = []
i = 0
while i < numbers.length
  if numbers[i] % 2 == 1
    new_numbers << numbers[i]
  end
  i += 1
end
p new_numbers



# SOLUTIONS (using while loop): https://gist.github.com/peterxjang/7de16ed43ea506e98df3fa15074b84f8
# SOLUTIONS (using .each shortcut): https://gist.github.com/peterxjang/a702894841c7018ed8c127b647ae21f8
# SOLUTIONS (using .select shortcut): https://gist.github.com/peterxjang/b8c8fb8b77b2cae7bb9cc62a3a434761