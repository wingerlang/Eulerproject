"""
Double-base palindromes
Problem 36

    The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
    Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
    (Please note that the palindromic number, in either base, may not include leading zeros.)

"""

def ispalindrome(n):
    return str(n) == str(n)[::-1]
def binary(n):
    return bin(n)[2:]

def theLoop(stop = 1000000):
    total = 0
    for n in range(1,stop):
        if ispalindrome(n) and ispalindrome(binary(n)):
            total += n
    return total
print(theLoop())