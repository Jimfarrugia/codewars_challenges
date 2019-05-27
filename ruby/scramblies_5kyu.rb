=begin
Complete the function scramble(str1, str2) that 
returns true if a portion of str1 characters can be rearranged to match str2, 
otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
=end

def scramble(str1, str2)
  for char in str2.chars
    char_count = str2.chars.count(char)
    if char_count > 1
      if str1.chars.count(char) < char_count then return false end
    end
    if !str1.chars.include?(char) then return false end
  end
  true
end

p scramble "lsukajdfhdgsjkdhgtdghset", "test"
p scramble('rkqodlw', 'world')
p scramble('cedewaraaossoqqyt', 'codewars')
p scramble('tpsqhgqmtncpqwbex', 'vgntwiuhwjmxwjlq')

# Just realised after solving this that there isn't a Ruby option for this challenge... -_-

