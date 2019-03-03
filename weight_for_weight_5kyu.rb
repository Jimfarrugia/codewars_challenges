=begin
Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"

When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
Don't modify the input
=end

def order_weight(strng)
  # Store numbers from input string in array
  original_numbers = strng.split.map!{|i| i.to_i}
  puts "line 17"
  p original_numbers
  # Breakup numbers into sub-arrays of digits ([10, 20] = [[1, 0], [2, 0]])
  split_numbers = strng.split.map!{ |item| item = item.chars }

  # Sum items in sub-arrays
  split_numbers.map!{ |number|
    sum_of_digits = 0
    number.each{ |digit| sum_of_digits += digit.to_i }
    number = sum_of_digits
  }

  number_weights = split_numbers

  # k=weight => v=original_num
  hash = {}

  i = 0
  while i < original_numbers.length
    hash[number_weights[i]] = original_numbers[i]
    i += 1
  end

  sorted_numbers_and_weights = hash.sort { |a, b| a <=> b }

  ordered_numbers = []

  for item in sorted_numbers_and_weights
    ordered_numbers.push item[1]
  end

  i1l

  result = ordered_numbers.join " "
  p result
end
order_weight "2000 10003 1234000 44444444 9999 11 11 22 123" # "11 11 2000 10003 22 123 1234000 44444444 9999", instead got: "11 22 123 1234000 44444444 9999"