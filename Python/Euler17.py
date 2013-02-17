"""
Number letter counts
Problem 17

    If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
    then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

    If all the numbers from 1 to 1000 (one thousand) inclusive were 
    written out in words, how many letters would be used?


    NOTE: Do not count spaces or hyphens. For example, 
    342 (three hundred and forty-two) contains 23 letters and 
    115 (one hundred and fifteen) contains 20 letters. The use of "and" when
    writing out numbers is in compliance with British usage.

"""
words = {
    0 : "",       10: 'ten',
    1 : "one",    11: 'eleven',
    2 : "two",    12: 'twelve',
    3 : "three",  13: 'thirteen',
    4 : "four",   14: 'fourteen',
    5 : "five",   15: 'fifteen',
    6 : "six",    16: 'sixteen',
    7 : "seven",  17: 'seventeen',
    8 : "eight",  18: 'eightteen',
    9 : "nine",   19: 'nineteen'
}
tens = {
    2 : 'twenty', 6 : 'sixty',    
    3 : 'thirty', 7 : 'seventy',  
    4 : 'forty',  8 : 'eighty',   
    5 : 'fifty',  9 : 'ninety',
}
def first(n):
    return int(str(n)[0])
def last(n):
    return int(str(n)[-1])
def removeChar(n):
    return int(str(n)[1:])

def wordLength(n):
    if n < 20:
        return len(words[int(n)])
    elif n < 100:
        return len(tens[int(str(n)[0])])

def tester(n = 342):
    total = 0
    if n >= 1000: #1000-9999
        total += wordLength( first(n)) + len("thousand")
        n = removeChar(n)
        if n < 99 and n != 0:
            total += 3

    if n > 100: # 100-999
        total += wordLength( first(n) ) + len("hundred")
        n = removeChar(n)
        if n:
            total += 3

    if len(str(n)) < 3 and n >= 20: # 20-99
        total += wordLength( n )
        n = removeChar(n)
   
    if n < 20: # 0-9
        total += wordLength(n)

    return total

def theLoop(times):
    total = 0
    for i in range(1,times+1,1):
        total += tester(i)
    return total

print(theLoop(1000)) 