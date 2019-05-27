# Test if number is prime
def isPrime(num)
  if num <= 3
    return num > 1
  elsif num % 2 == 0 or num % 3 == 3
    return false
  end
  i = 5
  while i * i <= num
    if (num % i == 0) or (num % (i + 2) == 0) then return false end
    i += 6
  end
  return true
end
puts isPrime(num = gets.strip.to_i)
