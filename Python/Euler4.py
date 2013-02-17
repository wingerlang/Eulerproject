"""
Largest palindrome product
Problem 4

A palindromic number reads the same both ways. The largest palindrome made from 
the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.

"""

def reverse(s):
	return str(s)[::-1]

def isPalindrome(n):
	return str(n) == reverse(str(n))

def numberPalindrome(n):
	highest, bestX, bestY = 0, 0, 0
	for x in range(1000, 100, -1):
		for y in range(1000, 100, -1):
			result = x*y
			if isPalindrome(result) and result >= highest:
				highest, bestX, bestY = result, x, y
	return "%d*%d = %d" % (bestX, bestY, highest)

print(numberPalindrome(101))


# Shorte version version

def numberPalindrome2(n):
	highest, bestX, bestY = 0, 0, 0
	for x in range(1000, 100, -1):
		for y in range(1000, 100, -1):
			result = x*y
			if str(result) == str(result)[::-1] and result >= highest:
				highest, bestX, bestY = result, x, y
	return "%d*%d = %d" % (bestX, bestY, highest)

print(numberPalindrome2(101))