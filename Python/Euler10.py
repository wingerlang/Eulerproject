#Euler 10

"""
Summation of primes

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.

"""

def primeNumber(n):
    counter, primes = 0, 0
    while counter < n:
        counter += 1
        if isPrime(counter):
            primes += counter
    return primes

def isPrime(n):
  if n < 2 or (n % 2 == 0 and n != 2) :
      return False
  for x in range(3, int(n**0.5)+1, 2):
      if n % x == 0:
          return False
  return True

print(primeNumber(2000000))