"""
Special Pythagorean triplet
Problem 9

	A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

	a2 + b2 = c2
	For example, 32 + 42 = 9 + 16 = 25 = 52.

	There exists exactly one Pythagorean triplet for which a^2 + b^2 + c^2 = 1000.
	Find the product abc.

"""

def pythagoranTriplet(times = 1000):
	for a in range(2,times):
		for b in range(2,times):
			c = (a**2 + b**2)**0.5
			if(a+b+c) == 1000:
				return ("A: %d  B: %d C: %d - Sum: %d  Product: %d" % (a, b, c, a+b+c ,a*b*c))
				
print(pythagoranTriplet())