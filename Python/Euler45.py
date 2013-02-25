"""
Euler45
"""
def triangle(n):
	return int(n * (n+1) /2)
def pentagonal(n):
	return int(n*(3*n-1)/2)
def hexagonal(n):
	return int(n * (2*n -1))

def generator(number, cat):
	l = []
	if cat == 'tri':
		for n in range(1, number, 1):
			l.append(triangle(n))
		return l

	elif cat == 'pent':
		for n in range(1, number, 1):
			l.append(pentagonal(n))
		return l

	elif cat == 'hex':
		for n in range(1, number, 1):
			l.append(hexagonal(n))
		return l		

tris = generator(10000, 'tri')
pents= generator(10000, 'pent')
hexs = generator(10000, 'hex')


found = []
for i in range(0, len(tris), 1):
	if tris[i] in pents and tris[i] in hexs:
		found.append()

print(tris)
print(pents)
print(hexs)