"""
Smallest multiple
Problem 5

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

"""

def evenDivisible(start = 20, times = 1000000000, step = 20):
	total = 0
	for cur in range(start, times, step):
		total = sum([cur % i for i in range(1,21) ])
		if total == 0:
			return cur
print(evenDivisible())


"""
	Start 5, step 5:
		232792560
		[Finished in 411.7s]

	Start 20, step 20
		232792560
		[Finished in 103.6s]
"""