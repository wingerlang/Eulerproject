#Euler21

"""
Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a  b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

"""
""""

#FAIL - THIS CALCULATES IF IT IS A PERFECT NUMBER !!!

def amicable(n):
    tot = 0
    for i in range(1,n):
        if n % i == 0:
            tot += i
          #  print(i, end=' ')
    return tot

def compare(n):
    if n == amicable(amicable(n)):
        return True
    else:
        return False

def theloop(n):
    total = 0
    for i in range(n):
        if compare(i):
            print(str(i) + '-' + str(amicable(amicable(i))) , end=' ')
            total += i
    return total


x = 28
print(str(x) + '  -  ' + str(amicable(x)) + '  -  ' + str(amicable(amicable(x))))
print(x == (amicable(amicable(x))))

print(theloop(10000))


"""






"""
Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a  b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. 
The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.

"""