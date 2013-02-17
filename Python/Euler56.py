"""
Powerful digit sum
Problem 56

	A googol (10^100) is a massive number: one followed by one-hundred zeros; 
	100^100 is almost unimaginably large: one followed by two-hundred zeros. 
	Despite their size, the sum of the digits in each number is only 1.

	Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?

"""
def gematria(n):
    total = 0
    for x in list(str(n)): total += int(x)
    return total

def numberValue(n):
	return (sum([int(n) for n in list(str(n))]))

def loop(stop = 99):
	highest = 0
	for a in range(stop, 1, -1):
		for b in range(stop, 1, -1):
			numbervalue = numberValue(a**b) # Either call gematria or numberValue
			if numbervalue >= highest:
				highest = numbervalue
	return highest 

print(loop())
