def isPandigital(s):
	return True

def pandigital(n, upTo = 3):
	s = ""
	for i in range(1, upTo +1, 1):
		s += str(n * i)
	return s 

#print(pandigital(192))

#print(isPandigital(192384576))