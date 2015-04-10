from math import sqrt, floor
import re

pattern = r"1.2.3.4.5.6.7.8.9.0"

num = floor(sqrt(1020304050607080900))

while True:
	res = str(num*num)
	if re.search(pattern, res):
		break
	else:
	    num += 1

print('Answer: %s' % num)