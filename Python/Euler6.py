#Euler 7 

"""
Sum square difference

The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the 
first ten natural numbers and the square of the sum is 3025  385 = 2640.

Find the difference between the sum of the squares of the 
first one hundred natural numbers and the square of the sum.

"""

def sumSquareDifference(n):
	sumSuqare = sum([x**2 for x in range(n+1)])
	squareSum = sum([x for x in range(n+1)])**2
	return squareSum - sumSuqare


def sumSquareDifferenceOneLiner(n):
	return sum([x for x in range(n+1)])**2 - sum([x**2 for x in range(n+1)])

print(sumSquareDifferenceOneLiner(100))