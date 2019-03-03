=begin 
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
=end

def weirdcase string

  words = string.split

  for word in words
    i = 0
    while i < word.length
      #word[i].odd? ? p true : p false
      p word[i]
      i+1
    end
  end

end

weirdcase "This is a test string."