#Euler20

"""
Factorial digit sum

n! means n  (n  1)  ...  3  2  1

For example, 10! = 10  9  ...  3  2  1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!

"""

def fact(n):
	if n < 1:
		return 1
	return n * fact(n - 1)

def gematria(n):
  total = 0
  for x in list(str(n)): total += int(x)
  return total

print(gematria(fact(100)))