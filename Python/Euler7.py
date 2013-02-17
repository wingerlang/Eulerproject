#Euler problem 7 - http://projecteuler.net/problem=7 
"""
10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

"""

def primeNumber(n):
    counter, primes = 0, 0
    while primes < n:
        counter += 1
        if isPrime(counter):
            primes += 1
    return counter
def isPrime(n):
    if n < 2 or (n % 2 == 0 and n != 2) :
        return False
    for x in range(3, int(n**0.5)+1, 2):
        if n % x == 0:
            return False
    return True

print(primeNumber(1001))