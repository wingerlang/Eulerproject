"""
Self powers
Problem 48
	The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
	Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
"""

def lastXdigits(n, last = 10):
	return str(n)[-last:]

def selfpowers(maxv):
	total = 0
	for num in range(1,maxv+1):
		total += num**num
	return lastXdigits(total)
	
print(selfpowers(1000))